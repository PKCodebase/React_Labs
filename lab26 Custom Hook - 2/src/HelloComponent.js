import React, { useState} from "react";
import { useCounter } from "./useCounter";

const HelloComponent = () =>{

    const[count,doIncremet,doDecrement,doReset] = useCounter(0,1);

    return (
        <div className="container">
            <br/>
            <h2>I am HelloComponent - {count}</h2>
            <br/>
            <button  className="btn btn-primary me-2" onClick={doIncremet}> Increment </button>
            <button className="btn btn-warning me-2" onClick={doDecrement}> Decrement</button>
            <button className="btn btn-danger"  onClick={doReset}> Reset</button>
        </div>
    )
}
export default HelloComponent;