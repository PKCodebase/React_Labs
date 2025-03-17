import React from "react";
import classnames from "classnames";
import propTypes from 'prop-types'; 

//Using props
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
                          className={classnames("form-control form-control-lg", 
                                              {
                                                  "is-invalid":props.myerror, 
                                              "is-valid":!props.myerror
                                          })}/>
                           <div className="text-danger">{props.myerror}</div>
                      </div> 
                     
         </div>
    )
}

MyTextInput.propTypes = {
        mylabel:propTypes.string.isRequired,
        myname:propTypes.string.isRequired,
        mytype:propTypes.string.isRequired,
        myvalue:propTypes.string.isRequired,
        myonChange:propTypes.func.isRequired,
    }

    MyTextInput.defaultProps = { 
        mytext:'text', 
        myerror:'', 
    } 

export default MyTextInput;