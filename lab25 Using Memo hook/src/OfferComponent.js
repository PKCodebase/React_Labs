import React, { Component } from "react";
import { useContext } from "react";
//whenever you wnat to use context data then
//1.import this

class OfferComponent extends Component {
  shouldComponentUpdate(nextProps) {
    console.log("OfferComponent shouldComponentUpdate");
    if (this.props.price === nextProps.price) {
      return false;
    }
    return true;
  }
  render() {
    console.log("OfferComponent renderd");
    return (
      <div className="container">
        <h3>Offer Component</h3>
        <h3>Offer : {this.props.price}</h3>
        <br />
      </div>
    );
  }
}

export default OfferComponent;
