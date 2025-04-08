import React, { useState } from "react";
import useDocTitle from "./useDocTitle";

const HaiComponent = () =>{

    const [count,setCount] = useState(10);

    const updateCounter =()=>{
        setCount(count+1);  
    }

    // useEffect(()=>{
    //     document.title = `HaiComponent-${count}`;
    // },[count]);

    useDocTitle("Red",count);

    return (
        <div className="container">
            <br/>
            <h2>I am HaiComponent-{count}</h2>
            <br/>
            <button onClick={updateCounter} className="btn btn-danger">Click {count} Times</button>
        </div>
    )
}
export default HaiComponent;