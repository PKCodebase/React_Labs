import React from "react";
import { useMyAxios } from "./useMyAxios"

export const DeleteBook =(props)=>{
      const{response,loading,error} = useMyAxios(
              {
                  method:"DELETE",
                  url:`/deleteBook/${props.mybookId}`,
              });

              console.log("My Book Response " , response);

              return(
                <div className="container">
                    {response}
                </div>
              );
}