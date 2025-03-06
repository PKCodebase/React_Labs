import { Component } from "react";

class Hai extends Component{

    static displayName="Hai Component";

    constructor(props){
        super(props);
        console.log(1,"Hai-Constructor");
        this.state={
            message:"Ok Guys"
        }
    
    }

    static getDerivedStateFromProps(myprops,mystate){
        console.log(2,"Hai getDerivedeprops");
        return null;
    }

    componentDidMount(){
        console.log(4, "Hai ComponentDidMount");
    }shouldComponentUpdate(nextProps,nextState){
        console.log("Hai--shouldComponentUpdate");
        return false;
     }
     getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Hai--getSnapshotBeforeUpdate");
        return null;
     }
     componentDidUpdate(prevProps, prevState, mysnapshot){
        console.log("Hai -- componentDidUpdate");
     }
     componentWillUnmount(){
        console.log(5, "Hai- componentWillUnmount");
     }

    render(){
        console.log(3, "Hai render");
        return (
            <div className="container">
                <h1 className="text-center">Hai Component</h1>
                <h2>Color:{this.props.mycolor}</h2>
                <br/>
            </div>
       
        )
    }

} 
export default Hai;