import { Component } from "react";
import Hai from "./Hai";

class Hello extends Component{

   static displayName ="My hello Component";
  

    constructor(props){
        super(props);
        console.log(1,"Hello-Constructor");
        this.state={
           message:"Ok Guys"
        }

    }
    static getDerivedStateFromProps(myprops,mystate){
        console.log(2,"Hello-getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log(4,"Hello-componentDidMount");
    }
    render(){
        console.log(3,"Hello-render");

        return(
            <div className="container">
                <h1 className="text-center">Hello Component</h1>
                <h2>Trainer Name:{this.props.mytrainer}</h2>
                <br/>
                <Hai mycolor="red"/>
            </div>
        )
    }

}
export default Hello;