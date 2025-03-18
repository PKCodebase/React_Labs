import { Component } from "react";
import MyTextInput from "../mycomponents/MyTextInput";
import MyButton from "../mycomponents/MyButton";

class TexxInputDemo extends Component{
    state={
        userName:"",
        password:"",
    }

    onChangeHandler = (event)=>{
        console.log("onChangeHandler");
        this.setState({
            [event.target.name]:event.target.value,
        })
    }

    onSubmitHandler=(event)=>{
        event.preventDefault();
        console.log("onSubmitHandler");
        const{userName,password}=this.state;
        console.log(userName);
        console.log(password);
        //Add validations
        //Make call to server
        //form Reset
         this.setState({
            userName:"",
            password:""
        });
    }
    render(){
        const{userName,password} = this.state;

        return(
            <div className="card-body container col-md-6">
                <h3 className="text-center">InputTextDemo</h3>
                <form onSubmit={this.onSubmitHandler}>
                    <MyTextInput
                    myname="userName"
                    mylabel="Username"
                    myvalue={userName}
                    myonChange={this.onChangeHandler}
                    />

                   <MyTextInput
                   mytype="password"
                    myname="password"
                    mylabel="Password"
                    myvalue={password}
                    myonChange={this.onChangeHandler}
                    />
                    
                    <br/>

                    <MyButton myvalue="Submit Now"/>
                </form>
            </div>
        )
    }
}
export default TexxInputDemo;   