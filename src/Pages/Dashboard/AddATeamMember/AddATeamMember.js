import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// style="background-image: url(https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);"

const AddATeamMember = () => {
  const { register, handleSubmit } = useForm();
  const naviagte= useNavigate()
  const { data: specialties = [] } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/apptionmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  const handleAddMember = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=1555200&key=${process.env.REACT_APP_imgbb_key}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if(imgData){
          const member={
            name:data.name,
            email:data.email,
            specialty:data.specialty,
            imageUrl: imgData.data.url
          }
          
          fetch("http://localhost:5000/members",{
            method:"POST",
            headers:{
              "content-type":"application/json",
              authorization:`Bearer ${localStorage.getItem("accessToken")}`
            },
            body:JSON.stringify(member)
          }).then(res=>res.json()).then(data=>{
            if(data.acknowledged){
              toast.success(`${member.name} is our new team member, Congrats`, {
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
              naviagte("/dashboard/managemember")
            }
          })
        }
      });
  };
  return (
    <div class="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center">
      <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
        <div class="text-center">
          <h2 class="mt-5 text-3xl font-bold text-gray-900">
            Add A Team Member
          </h2>
          <p class="mt-2 text-sm text-gray-400">
            Lorem ipsum is placeholder text.
          </p>
        </div>
        <form
          class="mt-8 space-y-3"
          action="#"
          method="POST"
          onSubmit={handleSubmit(handleAddMember)}
        >
          <div class="grid grid-cols-1 space-y-2">
            <label class="text-sm font-bold text-gray-500 tracking-wide">
              Name
            </label>
            <input
              {...register("name")}
              class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type=""
              placeholder="John Doe"
            />
          </div>
          <div class="grid grid-cols-1 space-y-2">
            <label class="text-sm font-bold text-gray-500 tracking-wide">
              Email
            </label>
            <input
              {...register("email")}
              class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type=""
              placeholder="mail@gmail.com"
            />
          </div>
          <div class="grid grid-cols-1 space-y-2">
            <label class="text-sm font-bold text-gray-500 tracking-wide">
              Specialty
            </label>
            <select
              {...register("specialty")}
              class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type=""
              placeholder="Tax"
            >
              {specialties.map((specialty) => (
                <option key={specialty._id} value={specialty.name}>
                  {specialty.name}
                </option>
              ))}
            </select>
          </div>
          <div class="grid grid-cols-1 space-y-2">
            <label class="text-sm font-bold text-gray-500 tracking-wide">
              Attach Document
            </label>
            <div class="flex items-center justify-center w-full">
              <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-30 p-10 group text-center cursor-pointer">
                <input
                  {...register("image")}
                  type="file"
                  class="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-primary file:text-white
      hover:file:bg-green-800 cursor-pointer hover:cursor-pointer transition ease-in duration-300"
                />
              </label>
            </div>
          </div>
          <p class="text-sm text-gray-300">
            <span>File type:types of images</span>
          </p>
          <div>
            <button
              type="submit"
              class="my-5 w-full flex justify-center bg-primary text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-green-800 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Add Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddATeamMember;
