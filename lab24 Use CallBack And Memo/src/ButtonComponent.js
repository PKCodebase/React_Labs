import React from "react"

const ButtonComponent=(props)=>{
    console.log("Button component")
    return(
        <div className="container">
            <button onClick={props.clickHandler} className="btn btn-success"> {props.children} </button>
        </div>
    )
}
// export default React.memo(ButtonComponent);

export default ButtonComponent;