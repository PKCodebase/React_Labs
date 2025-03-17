import React from "react";
import propTypes from "prop-types";

const MyRadioButton = (props)=>{
    return(
        <span>
            <h3>
                <input
                type={props.mytpe}
                name={props.myname}
                checked={props.mychecked}
                value={props.myvalue}
                onChange={props.myonChange}
                />
                &nbsp;&nbsp;
                <label>{props.mylabel}</label>
            </h3>
        </span>
    );
};


MyRadioButton.propTypes={
    mylabel:propTypes.string.isRequired,
    myname:propTypes.string.isRequired,
    mychecked:propTypes.bool.isRequired,
    myvalue:propTypes.string.isRequired,
    myonChange:propTypes.func.isRequired,
};

MyRadioButton.defaultProps={
    mytpe:"radio",
};

export default MyRadioButton;