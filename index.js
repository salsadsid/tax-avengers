const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fr7f4kz.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const appointmentOption = client
      .db("tax-avengers")
      .collection("appointmentOption");
    const bookingCollection = client.db("tax-avengers").collection("booking");



    app.get("/appointmentOption", async (req, res) => {
      const date = req.query.date;
      console.log(date);
      const query = {};
      const options = await appointmentOption.find(query).toArray();
      const bookingQuery = { appointmentDate: date };
      const alreadyBooked = await bookingCollection
        .find(bookingQuery)
        .toArray();
      options.forEach((option) => {
        const optionBooked = alreadyBooked.filter(
          (book) => book.service === option.name
        );
        const bookedSlot = optionBooked.map((book) => book.slot);
        const remainingSlot = option.slots.filter(
          (slot) => !bookedSlot.includes(slot)
        );
        option.slots = remainingSlot;
      });
      res.send(options);
    });

    // not working
    // app.get("/v2/appointmentOption", async (req, res) => {
    //   const date = req.query.date;
    //   const options = await appointmentOption.aggregate([
    //     {
    //       $lookup: {
    //         from: "booking",
    //         localField: "name",
    //         foreignField: "service",           
    //         pipeline: [
    //             {
    //                 $match:{
    //                     $expr:{
    //                         $eq:['appointmentDate',date]
    //                     }
    //                 }
    //             }
    //         ],
    //         as: "booked",
    //       },
    //     },
    //     {
    //         $project:{
    //             name:1,
    //             des:1,
    //             slots:1,
    //             booked:{
    //                 $map:{
    //                     input:'$booked',
    //                     as:'book',
    //                     in:"$$book.slot"
    //                 }
    //             }
    //         }
    //     },
    //     {
    //         $project:{
    //             name:1,
    //             des:1,
    //             slots:{
    //                 $setDifference:["$slots","$booked"]
    //             }
    //         }
    //     }
    //   ]).toArray();
    //   res.send(options)
    //   console.log(options)
    // });


    app.post("/booking", async (req, res) => {
      const booking = req.body;
      console.log(booking);
      const query={
        appointmentDate:booking.appointmentDate,
        email:booking.email,
        service:booking.service
      }

      const alreadyBooked= await bookingCollection.find(query).toArray()

      if(alreadyBooked.length){
        const message= `You already booked an appointment on ${booking.appointmentDate}`
        return res.send({acknowledged:false,message})
      }
      const result = await bookingCollection.insertOne(booking);
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("TAX-AVENGER_SERVER_WORKING");
});

app.listen(port, () => {
  console.log(`TAX-AVENGER_SERVER_WORKING ON PORT:${port}`);
});
