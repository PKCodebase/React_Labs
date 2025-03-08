import { Component } from "react";
import Lead from "./Lead";

class LeadsList extends Component{
    state = {
        myleadsList:[
            {leadId:101, name:"kaushik", phone:8709252029,email:"kp@gmail.com",course:"Java"},
            {leadId:102, name:"Rahul", phone:8709252028,email:"rahul@gmail.com",course:"React Js"},
            {leadId:103, name:"kundan", phone:8709252090,email:"kunadan@gmail.com",course:"Angular"}
        ]
    };

    deleteMyLead = (leadId) => {
        console.log("Delete lead");
       const{myleadsList} = this.state;
       console.log(myleadsList);

       const myleads = myleadsList.filter(
        mylead =>mylead.leadId !== leadId
    );
        this.setState({
            myleadsList:myleads
        });
    }

    render(){
        return(
          <div>
            {this.state.myleadsList.map(mylead=>(
                <Lead
                key={mylead.leadId}
                lead={mylead}
                mydeleteClickHandler={this.deleteMyLead.bind(this,mylead.leadId)}/>
            ))}
          </div>
        );
    }


}

export default LeadsList;