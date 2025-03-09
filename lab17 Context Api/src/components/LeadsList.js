import { Component } from "react";
import Lead from "./Lead";
import { MyDataConsumer } from "../appContext";

class LeadsList extends Component{

    render(){
        return(
           <MyDataConsumer>
            {
                value=>{
                  const {myleadsList} = value;
                  return(
                    <div>
                      {myleadsList.map(mylead=>(
                          <Lead
                          key={mylead.leadId}
                          lead={mylead}
                         />
                      ))}
                    </div>
                  );
                }
            }
           </MyDataConsumer>
        );
    }


}

export default LeadsList;