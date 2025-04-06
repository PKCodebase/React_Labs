import React from "react";
import { useContext } from "react";
//whenever you wnat to use context data then
//1.import this


const OfferComponent = (props) => {
  console.log("OfferComponent renderd")
  return(
    <div className="container">
      <h3>Offer Component</h3>
      <h3>Offer : {props.price}</h3>
      <br/>
     
    </div>
  );
};

export default React.memo(OfferComponent);
