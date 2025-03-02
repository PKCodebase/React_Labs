import { Component } from "react";
import Leads from "../leads/Leads";
import Enrollments from "../enrollment/Enrollments";
 class Dashboard extends Component{
    render(){
      return(
        <div className="container">
        <div className="alert alert-danger" role="alert">
            <h3 class="text-center">My Dashboard</h3>
            </div> 
            <div class = "row">
            <div class="col-sm-6"> 
            <div class="card"> 
             <div class="card-body"> 
               <h4 class="card-title">Leads Data</h4> 
                   <Leads />  
           </div> 
        </div> 
      </div> 
            <div class="col-sm-6"> 
            <div class="card"> 
            <div class="card-body"> 
            <h4 class="card-title">Enrollment Data</h4> 
                <Enrollments/>
          </div> 
        </div> 
      </div> 
      </div>
    </div>
      );
    }

}
export default Dashboard;