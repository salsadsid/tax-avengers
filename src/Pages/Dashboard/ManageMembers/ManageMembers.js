import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Loading from "../../../components/Loading/Loading";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";

const ManageMembers = () => {
  const [deletingMember,setDeletingMember]=useState(null)
  const { data: members=[], isLoading,refetch } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/members",{
          method:"GET",
          headers:{
            "content-type":"application/json",
            authorization:`Bearer ${localStorage.getItem("accessToken")}`
          }
        });
        const data = res.json();
        return data;
      } catch (error) {
        toast.error("Internal Error");
      }
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  const closeModal=()=>{
    setDeletingMember(null)
  }
  const handleDeleteMember=member=>{
    fetch(`http://localhost:5000/members/${member._id}`,{
      method:"DELETE",
      headers:{
        "content-type":"application/json",
        authorization:`Bearer ${localStorage.getItem("accessToken")}`
      }
    }).then(res=>res.json()).then(data=>{
      console.log(data)
      if(data.deletedCount > 0){
        toast.success(`${member.name} successfully removed.`, {
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
      }
      refetch()
    })
  }
  return (
    <div class="relative overflow-x-auto">
      <h2 className="text-3xl font-semibold m-2 text-secondary">All members</h2>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Avatar
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {members?.length && members?.map((member) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="avatar">
                  <div className="w-16 mask mask-hexagon ">
                    <img src={member?.imageUrl} />
                  </div>
                </div>
              </th>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {member?.name}
              </th>
              <td class="px-6 py-4">{member?.email}</td>

              <td class="px-6 py-4">
              <label onClick={()=>setDeletingMember(member)} htmlFor="confirmation-modal" className="btn bg-white border-2 border-black hover:border-black rounded-full text-lg px-8 py-3 pb-10 normal-case hover:bg-black text-black hover:text-white shadow">Delete</label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          {deletingMember &&
            <ConfirmationModal
            title={`Are you sure you want to delete ?`}
            message={`${deletingMember.name} is removed from our team.`}
            closeModal={closeModal}
            successAction={handleDeleteMember}
            modalData={deletingMember}
            ></ConfirmationModal>
          }
    </div>
  );
};

export default ManageMembers;
