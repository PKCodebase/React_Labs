import React from "react";
import { useCounter } from "./useCounter";

const HaiComponent = () =>{

const[count,doIncrement,doDecrement,doreset] = useCounter(10,5);
    

    return (
        <div className="container">
            <br/>
            <h2>I am HaiComponent-{count}</h2>
            <br/>
            <button className="btn btn-primary me-2" onClick={doIncrement}>Increment</button>
            <button className="btn btn-warning me-2" onClick={doDecrement}>Decrement</button>
            <button className="btn btn-danger"  onClick={doreset}>Reset</button>
        </div>
    )
}
export default HaiComponent;