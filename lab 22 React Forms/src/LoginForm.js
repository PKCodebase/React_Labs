import { event } from "jquery";
import { Component } from "react";
import React from "react";


class LoginForm extends Component{

    static defaultProps ={
      username:'kaushik',
      password:'1234',
    };

    constructor(props){
        super(props);  
        this.usernameInput = React.createRef();
        this.passwordInput = React.createRef();
        
      

    }

    myclickHandler = (myevent) =>{
        myevent.preventDefault();
        console.log("Button clicked   - myclickHandler");
        console.log("UN",this.usernameInput.current.value);
        console.log("PW", this.passwordInput.current.value);
        };

        mysubmitHandler = (myevent) =>{
            myevent.preventDefault();
            console.log("Submit Handler");
            console.log("UN",this.usernameInput.current.value);
        console.log("PW", this.passwordInput.current.value);
        };

    render(){
        return(
            <div className="container col-md-6">
              <h2 className="text-center">Login form</h2>
              <form onSubmit={this.mysubmitHandler}>
                <table className="table table-striped table-bordered table-light">
                   <tbody>
                    <tr>
                        <td><label htmlFor="username">Username : </label></td>
                        <td>
                            <input
                            type="text"
                            id="username"
                            name="username"
                            className="form-control form-control-lg"
                            placeholder="Enter Username.."
                            ref = {this.usernameInput}
                            defaultValue={this.props.username}
                            // onChange={this.myUNchangeHandler}
                            // onChange={this.mychangeHandler}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td><label htmlFor="password"> Password : </label></td>
                        <td>
                            <input 
                            type="password"
                            id="password"
                            name="password"
                            className="form-control form-control-lg"
                            placeholder="Enter Password.."
                            ref={this.passwordInput}
                            defaultValue={this.props.password}
                         // onChange={this.myPWchangeHandler}
                            // onChange={this.mychangeHandler}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2" align="center" >
                            <button type="submit"
                            onClick={this.myclickHandler}
                             className="btn btn-primary btn-lg"
                             >
                                <h2>Login Now</h2>
                            </button>
                        </td>
                    </tr>

                    </tbody>
                </table>

                {/* Welcome to {this.props.username}; */}
              </form>
            </div>
        );
    }
}

export default LoginForm;