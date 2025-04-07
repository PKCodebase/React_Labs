import React from "react";
import OfferComponent from "./OfferComponent";

//whenever you wnat to use context data then
//1.import this


const PriceComponent = (props) => {
  console.log("PriceComponent renderd")
  return(
    <div className="container">
      <h3>Price Component</h3>
      <h3>Price:{props.price}</h3>
      <OfferComponent price={props.price}/>
      <br/>
     
    </div>
  );
};

export default React.memo(PriceComponent);
