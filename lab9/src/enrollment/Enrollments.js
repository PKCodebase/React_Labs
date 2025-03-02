import { Component } from "react";

class Enrollments extends Component{
    state = { 
        enrollmentCount: 5, 
        enrollmentShow: true, 
        enrollmentList: [ 
        {leadId:101,sid:501,sname:'Sri',course:'Angular',feepaid:10000.0,feebal:5000.0}, 
        {leadId:102,sid:502,sname:'Vas',course:'React',feepaid:10000.0,feebal:5000.0}, 
        {leadId:103,sid:503,sname:'Sri',course:'Angular',feepaid:10000.0,feebal:5000.0}, 
        {leadId:104,sid:504,sname:'Vas',course:'React',feepaid:10000.0,feebal:5000.0}, 
        {leadId:105,sid:505,sname:'Sri',course:'Angular',feepaid:10000.0,feebal:5000.0}, 
        ], 
        }; 
        render() { 
        let myenrollsToDisplay = null; 
        if (this.state.enrollmentShow === true) { 
        myenrollsToDisplay = this.state.enrollmentList.map((myenrollment) => ( 
        <table className="table table-striped table-light table-bordered"> 
        <tbody> 
        <tr> 
        <td> <h6> {myenrollment.leadId}</h6> </td> 
        <td> <h6> {myenrollment.sid}</h6> </td> 
        <td> <h6> {myenrollment.course}</h6> </td> 
        <td> <h6> {myenrollment.feepaid}</h6> </td> 
        <td> <h6> {myenrollment.feebal}</h6> </td> 
        </tr> 
        </tbody> 
        </table> 
        )); 
        } 
        return ( 
        <div> 
        <h5> Total Enrollments : {this.state.enrollmentCount} <br /> </h5> 
        {myenrollsToDisplay} 
        </div> 
        ); 
        } 
        }
        export default Enrollments;