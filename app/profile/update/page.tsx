"use client"
import { ChangeEvent, useEffect, useState } from "react";
import { FaUser, FaInfoCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useRouter } from "next/navigation";
import LineLoader from "@/components/loaders/LineLoader";
import {ref, update} from "firebase/database"
import { auth, database } from "@/config/firebase";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const [focused, setFocused] = useState<string>("");
  const [data,setData]=useState<ProfileUpdateFields>({
    photo:"",
    username:"",
  })

  const [errors,setErrors]=useState<String[]>([]);
  const [loading,setLoading]=useState<boolean>(false)

  const handleSetData=(e:ChangeEvent<HTMLInputElement>)=>{
    clearErrors()
    setData((prevData)=>({
      ...prevData,
      [e.target.name]:e.target.value
    }))
  }


  const handleValidations=()=>{
    clearErrors()
    if(!data.username){
      setErrors(["Please enter your username"])
    }else{
      handleUpdateUsername()
    }
  }

  const handleUpdateUsername=async()=>{
    try {
      setLoading(true)
     await update(ref(database, "/users/" + auth.currentUser?.uid), {
       username: data.username,
     });
    toast.success("Profile updated successfully")
     
    } catch (error) {
      let errorMessage:string="";
      if(error instanceof Error){
        errorMessage=error.message
      }else{
        errorMessage="Something went wrong, try again later"
      }
      setErrors([...errors,errorMessage]);
      
    }finally{
      setLoading(false)
    }
  }

  const clearErrors=()=>{
    setErrors([])
  }

  return (
    <div className="w-[80%] mx-auto m-4 md:w-1/3 rounded-lg p-0 relative border">
      {loading && <LineLoader overlay={true} />}
      <div className="min-h-[80vh]  p-6 z-20 space-y-8 md:space-y-5  flex  items-center  pt-16 flex-col">
        <div className="bg-[#5ab9c1] rounded-full p-8  z-50 relative">
          <FaUser size={40} color="#081314" />

          <div className="border border-gray-200 rounded-full p-2 hover:cursor-pointer hover:scale-105  flex top-[40%] bg-[#f8f9fa] absolute -right-[10%]">
            <MdEdit size={15} color="gray" />
          </div>
        </div>

        <div className="text-[#202124]  text-2xl text-center font-semibold ">
          Welcome!
        </div>
        {/* Username */}
        <div
          className={`w-full mt-8 float-label-container ${
            focused !== "username" && data.username && "active-label-container"
          } relative flex flex-col `}
        >
          <input
            type="text"
            name="username"
            id="username"
            autoComplete={"Off"}
            onChange={handleSetData}
            onFocus={() => setFocused("username")}
            onBlur={() => setFocused("")}
            className={`w-full bg-white z-3 border ${
              errors?.length > 0 ? "border-red-500" : "border-gray-300"
            } rounded p-[13px]  outline-[#1b66c8]  `}
          />
          <label
            className="float-label z-1 font-[500] ml-4 bg-white text-gray-500 px-2"
            htmlFor="username"
          >
            Username
          </label>
          <ul>
            {errors.map((error, index) => (
              <li
                key={index}
                className="text-red-500 text-xs flex items-center p-1"
              >
                <FaInfoCircle className="mr-1" />
                {error}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex justify-end items-center">
          <button onClick={handleValidations} className="border text-sm py-2 rounded border-gray-300 px-6 hover:cursor-pointer hover:bg-[#1b66c8] hover:text-white duration-75 text-[#1b66c8] hover:text-[#1b66c8] ">
            Update profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile