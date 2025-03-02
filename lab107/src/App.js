import { Component } from 'react'; 
import './App.css'; 
class App extends Component { 
    state = { 
      mycoursesToDisplay:[],
      // showCourseFlag:false,
        mystudentsData:[
          {
            sId : 101,
          sName :"kaushik",
          emailId : "kp@gmail.com",
          phones:{office :12345,home:98765},
          address : {city:"Blr",state:"KA"},
          mycourses:[
            {cid:1001,cName:"React",price:5000,trainer:"Suresh"},
            {cid:1002,cName:"Angular",price:4000,trainer:"Ramesh"},
            {cid:1003,cName:"Vue",price:3000,trainer:"Rajesh"},
            { cid: 1004, cName: "Node", price: 2000, trainer: "Rajesh" }
          ]
          },
          {
            sId : 102,
          sName :"Rahul",
          emailId : "rahul@gmail.com",
          phones:{office :12345,home:98765},
          address : {city:"Blr",state:"KA"},
          mycourses:[
            {cid:1005,cName:"React",price:5000,trainer:"Suresh"},
            {cid:1006,cName:"Angular",price:4000,trainer:"Ramesh"},
            {cid:1007,cName:"Vue",price:3000,trainer:"Rajesh"},
            { cid: 1008, cName: "Node", price: 2000, trainer: "Rajesh" }
          ]
          },
          {
            sId : 103,
          sName :"Amit",
          emailId : "amit@gmail.com",
          phones:{office :12345,home:98765},
          address : {city:"Blr",state:"KA"},
          mycourses:[
            {cid:1009,cName:"React",price:5000,trainer:"Suresh"},
            {cid:1010,cName:"Angular",price:4000,trainer:"Ramesh"},
            {cid:1011,cName:"Vue",price:3000,trainer:"Rajesh"},
            { cid: 1012, cName: "Node", price: 2000, trainer: "Rajesh" }
          ]
          },
          {
            sId : 104,
          sName :"Ravi",
          emailId : "rv@gmail.com",
          phones:{office :12345,home:98765},
          address : {city:"Blr",state:"KA"},
          mycourses:[
            {cid:1013,cName:"React",price:5000,trainer:"Suresh"},
            {cid:1014,cName:"Angular",price:4000,trainer:"Ramesh"},
            {cid:1015,cName:"Vue",price:3000,trainer:"Rajesh"},
            { cid: 1016, cName: "Node", price: 2000, trainer: "Rajesh" }
          ]
          },
        ]
   };

   showCourseInfo = (mysid) =>  {
    console.log("Student id : ",mysid);

    // this.setState({
    //   showCourseFlag:true
    // });

  
    
    let filterdStudent = this.state.mystudentsData.filter(
      (mystudent) => mystudent.sId===mysid
    );

    let mycourseList = filterdStudent[0].mycourses;
    let tempCoursesToDisplay   =   mycourseList.map(
      (mycourse)=>(
        <tr key={mycourse.cid}>
        <td>{mycourse.cid}</td>
        <td>{mycourse.cName}</td>
        <td>{mycourse.price}</td>
        <td>{mycourse.trainer}</td>
        </tr>
      )
    )


   
   
    let  displayCourses=(
      <div>
        <h3>Course Details of Student : {mysid}</h3>
      
        <table>
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Price</th>
            <th>Trainer</th>
          </tr>
        </thead>
        <tbody>
          {tempCoursesToDisplay}
        </tbody>
        </table>
        </div>  
      );
    

    
    this.setState(
      {mycoursesToDisplay:displayCourses,
       
      }
    );
    
   

   }
   showCourseData = (mystudent)=>{
    console.log("Student id : ", mystudent.sId);


    let mycourseList = mystudent.mycourses; 
let tempCoursesToDisplay = mycourseList.map( 
(mycourse) => ( 
<tr key={mycourse.cid}> 
<td> {mycourse.cid} </td> 
<td> {mycourse.cName} </td> 
<td> {mycourse.price} </td> 
<td> {mycourse.trainer} </td> 
</tr> 
) 
) 
let  displayCourses = ( 
<div> 
<h3> Course Details of Student : {mystudent.sId}</h3> 
<table> 
<thead> 
<tr> 
<th> CID</th> 
<th> CName</th> 
<th> Price</th> 
<th>Trainer</th> 
</tr>  
</thead> 
<tbody> 
{tempCoursesToDisplay} 
</tbody> 
</table> 
</div> 
); 
this.setState({ 
mycoursesToDisplay:displayCourses, 
}); 
}
  
   
 render(){ 
 console.log("I am App Component"); 

 let mystudentToDisplay = this.state.mystudentsData.map(
  (mystudent)=>(
    <tr key={mystudent.sId}>
      <td>{mystudent.sId}</td>
      <td>{mystudent.sName}</td>
      <td>{mystudent.emailId}</td>
      <td>{mystudent.phones.office}</td>
      <td>{mystudent.phones.home}</td>
      <td>{mystudent.address.city}</td>
      <td>{mystudent.address.state}</td>
      <td>
        <button 
        onClick={this.showCourseInfo.bind(this,mystudent.sId)} className='mybutton'>Course Info</button>
      </td>
      <td>
        <button 
        onClick={this.showCourseData.bind(this,mystudent)} className='mybutton'>Course Data</button>
      </td>
    </tr>
  )

 );

 return ( 


  <div>


 <div className="myheader"> 
 <p>Welcome to kaushik Website</p>
 </div> 


<div className='mydata'>
  <table>
<thead>
  <tr>
    <th>Student ID</th>
    <th>Student Name</th>
    <th>Email ID</th>
    <th>Office Phone</th>
    <th>Home Phone</th>
    <th>City</th>
    <th>State</th>
    <th></th>
    <th>  </th>
   </tr>
</thead>
<tbody>
  {mystudentToDisplay}
</tbody>
</table>
 </div>
 <br/><br/>


    <div className='mydata'>
    {this.state.mycoursesToDisplay}
</div>


<br/><br/><br/><br/><br/><br/>
       </div>
    ); 
  } 
}
export default App; 

 

        
        
   
