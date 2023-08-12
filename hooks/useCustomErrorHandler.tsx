import {useState} from 'react'
import { toast } from 'react-toastify';

const useCustomErrorHandler = (error:any) => {
 const [errorMessage,setErrorMessage]=useState("");
 if(error instanceof Error){
    setErrorMessage(error.message);
 }else{
    setErrorMessage("Something went wrong, try again later.")
 }
  return toast.error(errorMessage)
}

export default useCustomErrorHandler