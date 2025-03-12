import { event } from "jquery";
import { Component } from "react";


class LoginForm extends Component{

    state={
        username:'',
        password:''
    }

    // myUNchangeHandler = (myevent) =>{
    //     myevent.preventDefault();
    //     console.log("Username changed");

    //     this.setState({
    //         username:myevent.target.value
    //     });
    // };

    // myPWchangeHandler = (myevent) =>{
    //     myevent.preventDefault();
    //     console.log("Change password");

    //     this.setState({
    //         password:myevent.target.value
    //     });
        
    // }
    mychangeHandler = (myevent) =>{
        myevent.preventDefault(); //Stop Auto Refresh 
        console.log("My Change Handler");

        this.setState({
         [myevent.target.name]:myevent.target.value,  //Target Properties contain address of the current load 
        });
        
    }

    myclickHandler = (myevent) =>{
        myevent.preventDefault();
        console.log("Button clicked   - myclickHandler");
        console.log(this.state);
        };

        mysubmitHandler = (myevent) =>{
            myevent.preventDefault();
            console.log("Submit Handler");
            console.log(this.state);
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
                            value={this.state.username}
                            // onChange={this.myUNchangeHandler}
                            onChange={this.mychangeHandler}
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
                            value={this.state.password}
                            // onChange={this.myPWchangeHandler}
                            onChange={this.mychangeHandler}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2" align="center" >
                            <button type="submit"
                             className="btn btn-primary btn-lg"
                             >
                                <h2>Login Now</h2>
                            </button>
                        </td>
                    </tr>

                    </tbody>
                </table>
              </form>
            </div>
        );
    }
}

export default LoginForm;