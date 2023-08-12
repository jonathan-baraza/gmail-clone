import { toast } from "react-toastify";

export default function CustomErrorHandler(error:any){
    let errorMessage:string="";
    if (error instanceof Error) {
      errorMessage=error.message;
    }else{
        errorMessage="Something went wrong, try again later";
    }
    toast.error(errorMessage);
}