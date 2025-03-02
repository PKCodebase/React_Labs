import { Component } from 'react'; 
import './App.css'; 

class App extends Component { 
 
 state = { 
    sid:102, 
    sname:"kaushik", 
    email:"kaushikprasad1659@gmail.com", 
    dob:Date(),
    isActive:true,
    mycourse:{
     cId:"113",
     cName:"React",
     price:70000,
     trainer:"srinivas",
     isOnline:true
    },
    mycourseNames:["Angular","React","MongoDB","NodeJS","ExpressJS"],
    mycourseList:[
        {cId:"1001",cName:"React",price:"7000",trainer:"Srinivas"},
        {cId:"1002",cName:"Angular",price:"8000",trainer:"Srinivas"},
        {cId:"1003",cName:"MongoDB",price:"5000",trainer:"Srinivas"},
        {cId:"1004",cName:"NodeJS",price:"6000",trainer:"Srinivas"}
    ]
    
 } ;
  

     showMoreInfo = (mycourse) =>{
        console.log("Course",mycourse);
        
     }
 render(){ 
 console.log("I am App Component"); 

 let mycourseNamesDisplay = this.state.mycourseNames.map(
    (cName,index)=>(
        // <li key={index}>{index}-{cName}</li> //its print index also
        <li key={index}>{cName}</li>

    )

);

  let mycourseListDisplay = this.state.mycourseList.map(
   (mycourse) =>(
    <tr key={mycourse.cId}>
        <td>{mycourse.cId}</td>
        <td>{mycourse.cName}</td>
        <td>{mycourse.price}</td>
        <td>{mycourse.trainer}</td>
        <td><button className='mybutton' onClick={this.showMoreInfo.bind(this,mycourse)}>More Info

        </button>
        </td>
    </tr>
   )
  );
 return ( 
<div>
    <div className="myheader">
        <p>Welcome to Java Learning Center</p>
    </div>
    <div className='mydata'>
        <h3><u> 1.Simple Type of Properties</u></h3>
        <p>Student Id : {this.state.sid}</p>
        <p>Student Name:{this.state.sname}</p>
        <p>Student Email:{this.state.email}</p>
        <p>Student DOB:{this.state.dob}</p>
        <p>Student status:{this.state.isActive ? "yes" : "No"}</p>
    </div>

    <div className='mydata'>
        <h3><u> 2.Object Type Properties</u></h3>
        <p>Course Id:{this.state.mycourse.cId}</p>
        <p>Course Name : {this.state.mycourse.cName}</p>
        <p>Course Price:{this.state.mycourse.price}</p>
        <p>Course Trainer:{this.state.mycourse.trainer}</p>
        <p>Course Status:{this.state.mycourse.isOnline ? "yes" : "No"}</p>
    </div>

    <div className='mydata'>
        <h3><u>3.Array of Simple Types</u></h3>
        <ul>{mycourseNamesDisplay}</ul>
    </div>

    <div className='mydata'>
        <h3><u>4.Array of Object Type</u></h3>
        <table>
            <thead>
              <tr>
                <th>Course Id</th>
                <th>Course Name</th>
                <th>Course Price</th>
                <th>Course Trainer</th>
                <th></th>
                
              </tr>
            </thead>
            <tbody>
                {mycourseListDisplay}
            </tbody>
        </table>
    </div>



</div>
 ); 
 } 
 } 
export default App; 
