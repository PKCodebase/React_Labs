import React, { Component } from "react";
import OfferComponent from "./OfferComponent";

class PriceComponent extends Component {
  shouldComponentUpdate(nextProps) {
    console.log("PriceComponent shouldComponentUpdate");
    if (this.props.price === nextProps.price) {
      return false;
    }
    return true;
  }
  render() {
    console.log("PriceComponent renderd");
    return (
      <div className="container">
        <h3>Price Component</h3>
        <h3>Price:{this.props.price}</h3>
        <OfferComponent price={this.props.price} />
        <br />
      </div>
    );
  }
}

export default PriceComponent;
