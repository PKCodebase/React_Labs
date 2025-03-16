import React from 'react'; 
 
import classnames from 'classnames'; 
import propTypes from 'prop-types'; 
 
const MyTextInput1 = ( 
    {myname,mylabel,mytype,myvalue,myplaceholder,myonChange,myerror} 
    ) => { 
return( 
    <div className="container"> 
       <div className="form-group">  
          <label htmlFor= {myname} > {mylabel} </label>  
          <input type= {mytype} 
                name= {myname} 
                placeholder= {myplaceholder} 
                value= {myvalue} 
                onChange= {myonChange} 
                className={  classnames("form-control form-control-lg", 
                    {"is-invalid":myerror, "is-valid":!myerror} )     }   
                    />  
          <div className="text-danger"> {myerror} </div> 
          </div> 
    </div> 
)   } 
 
                                  
MyTextInput1.propTypes = { 
    mylabel : propTypes.string.isRequired, 
    myname : propTypes.string.isRequired, 
    myvalue : propTypes.string.isRequired, 
    myonChange : propTypes.func.isRequired, 
} 
 
MyTextInput1.defaultProps = { 
    mytext:'text', 
    myerror:'', 
} 
export default MyTextInput1;