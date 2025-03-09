const { Component } = require("react");
const React = require("react");


//create context Object
const myContext = React.createContext();

const  myreducer =(state,action)=>{
   
    console.log("in myreducer",action.type);
    switch(action.type){
        case "DELETE_LEAD":
            return{
                ...state,
                myleadsList:state.myleadsList.filter(
                   ( mylead) =>mylead.leadId !== action.payload
                )
            };
        default:
            return state;
    }

}

export class MyApplicationData extends Component{
    state={
        myleadsList:[
            {leadId:101, name:"kaushik", phone:8709252029,email:"kp@gmail.com",course:"Java"},
            {leadId:102, name:"Rahul", phone:8709252028,email:"rahul@gmail.com",course:"React Js"},
            {leadId:103, name:"kundan", phone:8709252090,email:"kunadan@gmail.com",course:"Angular"},
            {leadId:104, name:"Raj", phone:8709252022,email:"raj@gmail.com",course:"Node Js"}
        ],
        dispatch:(action) =>{
            this.setState((state)=>myreducer(state,action));
        }
    };
    render(){
        return(
            <myContext.Provider value={this.state}>
                {this.props.children}
            </myContext.Provider>
        );
    }
}
export const MyDataConsumer = myContext.Consumer;