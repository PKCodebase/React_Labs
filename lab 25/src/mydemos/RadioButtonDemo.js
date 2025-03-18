import { Component } from "react";
import MyRadioButton from "../mycomponents/MyRadioButton";
import MyButton from "../mycomponents/MyButton";

class RadioButtonDemo extends Component{
    state={
        gender:"",
    };

    onChangeHandler =(event)=>{
        console.log("onChangeHandler");
        this.setState({
            gender:event.target.value,
        });
    };

    onSubmitHandler =(event)=>{
        event.preventDefault();
        console.log("onSubmitHandler");
        console.log(this.state.gender);
    };

    render(){
        return(
            <div className="card-body container col-md-6">
                <h3 className="text-center">RadioButton Demo</h3>
                <form onSubmit={this.onSubmitHandler}>
                  <div className="radio">
                    <MyRadioButton
                    mylabel="Male"
                    myvalue="Male"
                    myname="gender"
                    mychecked={this.state.gender==="Male"}
                    myonChange={this.onChangeHandler}
                    />

                    <MyRadioButton
                    mylabel="Female"
                    myvalue="Female"
                    myname="gender"
                    mychecked={this.state.gender==="Female"}
                    myonChange={this.onChangeHandler}
                    />
                     </div>

                     <MyButton myvalue="Submit Now"/>
                 
                </form>
            </div>
        )
    }
}

export default RadioButtonDemo;