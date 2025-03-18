
import propTypes from 'prop-types';


const MyButton = (props) =>{
    return(
        <div className="container">
            <div className="form-group">
                <input
                type={props.mytype}
                value={props.myvalue}
                className="form-control form-control-lg"
                />
            </div>
        </div>
    )
}

MyButton.propTypes = {
    myvalue : propTypes.string.isRequired,

}

MyButton.defaultProps = {
    mytype : 'submit'
}

export default MyButton;