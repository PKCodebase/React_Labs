import React from "react";
import { useMyAxios } from "./useMyAxios"


export const AddBook =()=>{

    const{response,loading,error} = useMyAxios(
        {
            method:"POST",
            url:'/addBook',
            headers:{
                acceept:'*/*'
            },
            data:{
                bookName : "Java",
                author : "Srinivas Dande",
                price : 1000,
                category : "Computer Science",
                publications : "Pk Code"
            },
        });

        console.log("Response : ",response);

        return(
           <div className="container">
            {response}
           </div>
        );

}