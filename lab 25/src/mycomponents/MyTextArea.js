import React from "react";
import PropTypes from 'prop-types';

const MyTextArea = (props) =>{
    return(
        <div className="form-group">
            <h3 className="text-center"></h3>
        <textarea
        value={props.myvalue}
        onChange={props.myonChange}
        placeholder={props.myplaceholder}
        rows={props.myrows}
        cols={props.mycols}
        className="form-control form-control-lg"
        />
        </div>
    );
}
//Required
MyTextArea.protoTypes = {
    mylabel:PropTypes.string.isRequired,
    myvalue:PropTypes.string.isRequired,
    myonChange:PropTypes.func.isRequired,
};
//Optional
MyTextArea.defaultProps = {
    myplaceholder:"",
    myrows:5,
    mycols:25
};
export default MyTextArea;