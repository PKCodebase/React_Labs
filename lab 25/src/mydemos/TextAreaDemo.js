import { Component } from "react";
import MyTextArea from "../mycomponents/MyTextArea";
import MyButton from "../mycomponents/MyButton";

class TextAreaDemo extends Component{

    //Optional
    constructor(props){
        super(props);
        this.state={
            message:""
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler = (event)=>{
        console.log("onChangeHandler");
        this.setState({
            message:event.target.value,
        });
    };

    onSubmitHandler =(event)=>{
        event.preventDefault();
        console.log("onSubmitHandler");
        console.info(this.state.message);
        this.setState({
            message:"",
        });
    };

    render(){
        const{message} = this.state;
        return(
            <div className="card-body container col-md-6">
                <h3 className="text-center">TextAreaDemo</h3>
                <form onSubmit={this.onSubmitHandler}>
                  <MyTextArea
                  mylabel="message"
                  myvalue={message}
                  myonChange={this.onChangeHandler}/>

                  <br/>


                  <MyButton myvalue="Submit Now"/>
                </form>

            </div>
        );
    }
}
export default TextAreaDemo;