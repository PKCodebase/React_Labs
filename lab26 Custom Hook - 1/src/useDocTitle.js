import { useEffect } from "react"

const useDocTitle = (color,count) =>{
    useEffect(()=>{
        document.title = `Clicked ${color} button ${count}`
    
    },[count]);
}

export default  useDocTitle;