import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/Loading/Loading';
import { Link } from 'react-router-dom';

const MyAppointments = () => {
    const{user}=useContext(AuthContext)
    const url=`http://localhost:5000/booking?email=${user?.email}`
    const {data:bookings,isLoading}=useQuery({
        queryKey:['bookings',user?.email],
        queryFn:async()=>{
            const res = await fetch(url,{
                headers:{
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data= await res.json()
            console.log(data)
            return data
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    if(!bookings?.length|| bookings?.message==="Unauthorized Access" ){
        return <><h2 className="text-3xl font-semibold m-2 text-secondary">My Appointments</h2>
            <p className='text-xl font-semibold m-2'>You have <span className='text-5xl text-success'>0</span> appointments</p>
        </>
    }
    return (
        
<div class="relative overflow-x-auto">
    <h2 className="text-3xl font-semibold m-2 text-secondary">My Appointments</h2>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Service
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Time
                </th>
                <th scope="col" class="px-6 py-3">
                    Payment
                </th>
            </tr>
        </thead>
        <tbody>
            {
                bookings.map(book=><tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {book?.client}
                </th>
                <td class="px-6 py-4">
                    {book?.service}
                </td>
                <td class="px-6 py-4">
                    {book?.appointmentDate}
                </td>
                <td class="px-6 py-4">
                   {book?.slot}
                </td>
                <td class="px-6 py-4">
                {book.price && !book.paid &&
                <Link to={`/dashboard/payment/${book._id}`}><button className='btn-sm btn-warning'>Pay</button>
                   </Link>}
                {book.price && book.paid && 
                <span className='text-primary'>Paid</span>}
                </td>
               -
            </tr>)
            }
        </tbody>
    </table>
</div>

    );
};

export default MyAppointments;