import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({booking}) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [txnId, setTxnId] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const {price,client,email,_id}=booking
 
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://tax-avengers-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("")
    setProcessing(true)
    const {paymentIntent, error:confirmCardError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: client,
            email:email
          },
        },
      },
    );
    if(confirmCardError){
      setCardError(confirmCardError.message)
    }
    if(paymentIntent.status==="succeeded"){
      const payment={
        price,
        txnId:paymentIntent.id,
        email:email,
        bookingId:_id
      }
      fetch("https://tax-avengers-server.vercel.app/payments",{
        method:"POST",
        headers:{
          'content-type':'application/json',
          authorization:`bearer ${localStorage.getItem('accessToken')}`
        },
        body:JSON.stringify(payment)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.insertedId){

          setSuccess("Congratulations. Your payment is successful.")
          setTxnId(paymentIntent.id)
        }
      })
    }
    setProcessing(false)
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-warning px-4 py-2 mt-4 rounded"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="mt-4 text-red-500">{cardError}</p>
      {
        success && <div>
          <p className="text-primary">{success}</p>
          <p className="text-pink-600 font-normal">Transaction ID: {txnId}</p>
        </div>
      }
    </>
  );
};

export default CheckoutForm;
