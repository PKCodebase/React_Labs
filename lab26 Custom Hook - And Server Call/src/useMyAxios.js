import React, { useEffect, useState } from "react"
import axios from "axios"

axios.defaults.baseURL="https://www.google.com"

export const useMyAxios = (axiosParams) =>{
  const[response,setResponse] = useState([])
  const[error,setError] = useState("")
  const[loading,setLoading] = useState(true)

  const callServer = async (params) =>{
    try{
      const result = await axios.request(params)  //request is used to all request Get,Post,put
      setResponse(result.data)
      console.log(result.data)
    }catch(error){
      setError(error)
    }finally{
      setLoading(false)
    }
  };
  useEffect(()=>{
    callServer(axiosParams)   //execute once only that's why we using useeffect:
  },[]);  //[axiosParams] then you pass same id it calling infinite

  return {response,error,loading};
};