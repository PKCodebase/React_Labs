import React from "react";
import propTypes from 'prop-types'; 

const MyTextInput =(props)=>{
    
    return(
         <div className="container">
          <div className="form-group">
                         <label htmlFor={props.myname}>{props.mylabel} </label>
                         
                         <input 
                         type={props.mytype}
                         name={props.myname}
                         placeholder={props.myplaceholder}
                         value={props.myvalue}
                         onChange={props.myonChange}
                         className="form-control form-control-lg"
                          />
                      </div> 
                     
         </div>
    )
}

MyTextInput.propTypes = {
        mylabel:propTypes.string.isRequired,
        myname:propTypes.string.isRequired,
        // mytype:propTypes.string.isRequired,
        myvalue:propTypes.string.isRequired,
        myonChange:propTypes.func.isRequired,
    }

    MyTextInput.defaultProps = { 
        mytype:'text', 
    } 

export default MyTextInput;