import { Component } from "react";

class Hello extends Component{

   static displayName ="My hello Component";
   static defaultProps={
    mytrainer:"Srinivas",
    mycolor:"Red"
   }

    constructor(props){
        super(props);
        console.log("Hello-Constructor");
        this.state={
           message:"Ok Guys"
        }

    }
    static getDerivedStateFromProps(myprops,mystate){
        console.log("Hello-getDerivedStateFromProps");
        console.log("Hello",myprops);
        console.log("Hello",mystate);
        return{
            trainer:myprops.mytrainer,
            color:myprops.mycolor
        };
    }
    render(){
        console.log("Hello-render");
        // console.log(1,"Hello -static var",Hello.displayName);
        // console.log(2, "Hello -static var", Hello.defaultProps);
        // console.log(3, "Hello", this.state);
        console.log(3, "Hello", this.props);
        console.log(4, "Hello", this.state);

        return(
            <div className="container">
                <h1 className="text-center">My name is kaushik</h1>
                <h2>Trainer Name:{this.props.mytrainer}</h2>
                <h2>Color:{this.props.mycolor}</h2>
            </div>
        )
    }

}
export default Hello;