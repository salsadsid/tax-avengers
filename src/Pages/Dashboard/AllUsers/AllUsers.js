import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../../components/SecondaryButton/SecondaryButton';
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const{data:users=[],refetch}=useQuery({
        queryKey:["users"],
        queryFn:async()=>{
            const res=await fetch('http://localhost:5000/users')
            const data = await res.json()
            return data
        }
    })

    const handleMakeAdmin=user=>{
       fetch(`http://localhost:5000/users/admin/${user._id}`,{
                method:"PUT",
                headers:{
                    authorization:`Bearer ${localStorage.getItem("accessToken")}`
                }
            }).then(res=>res.json())
            .then(data=>{
                if(data.modifiedCount>0){
                    toast.success(`${user.name} is Now Admin, Congrats`, {
                        style: {
                          background: "#1FAA59",
                          color:"#fff"
                        },
                        // Custom Icon
                        icon: "👏",
                        // Change colors of success/error/loading icon
                        iconTheme: {
                          primary: "#000",
                          secondary: "#fff",
                        },
                      });
                      refetch()
                }
                if(data.message.title==="Forbidden Access"){
                    toast.error(`${data.message.des}`,{
                        style: {
                          background: "#BF3325",
                          color:"#fff"
                        },
                      })
                }
            })
    }
    return (
        <div class="relative overflow-x-auto">
    <h2 className="text-3xl font-semibold m-2 text-secondary">All Users</h2>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                   Admin
                </th>
                <th scope="col" class="px-6 py-3">
                   Action
                </th>
                
            </tr>
        </thead>
        <tbody>
            {
                users.map(user=><tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user?.name}
                </th>
                <td class="px-6 py-4">
                    {user?.email}
                </td>
                <td class="px-6 py-4">
                {user?.role!=="admin" && <button onClick={()=>handleMakeAdmin(user)} className="btn bg-primary border-2 border-primary hover:border-black rounded-full text-lg px-8 py-3 pb-10 normal-case hover:bg-black text-white hover:text-white shadow">
          Make Admin
        </button> }
                </td>
                <td class="px-6 py-4">
                <button className="btn bg-white border-2 border-black hover:border-black rounded-full text-lg px-8 py-3 pb-10 normal-case hover:bg-black text-black hover:text-white shadow">
          Delete
        </button>
                </td>
               
            </tr>)
            }
        </tbody>
    </table>
</div>
    );
};

export default AllUsers;