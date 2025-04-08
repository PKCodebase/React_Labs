import React, { useState} from "react";
import useDocTitle from "./useDocTitle";

const HelloComponent = () =>{

    const [count,setCount] = useState(0);

    const updateCounter =()=>{
        setCount(count+1);  
    }

    //  useEffect(()=>{
    //         document.title = `HelloComponent-${count}`;
    //     },[count]);

     useDocTitle("Green",count);

    return (
        <div className="container">
            <br/>
            <h2>I am HelloComponent-{count}</h2>
            <br/>
            <button onClick={updateCounter} className="btn btn-success">Click {count} Times</button>
        </div>
    )
}
export default HelloComponent;