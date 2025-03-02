import { Component } from 'react'; 
import './App.css'; 
class App extends Component { 
    state = { 
        sid:101, 
        sname:"kaushik", 
        email:"kaushikprasad1659@gmail.com", 
        dob:Date(),
        isActive:true,
        mycourse:{
         cId:"113",
         cName:"Java",
         price:10000,
         trainer:"srinivas",
         isOnline:false
     },
     mycourseNames:["Java","React","MongoDB","MySql","Html"],


     mycourseList:[
      {cId:"105",cName:"React",price:10000,trainer:"Robin"},
      {cId:"106",cName:"Php",price:90000,trainer:"Ravi"},
      {cId:"107",cName:"C++",price:15000,trainer: "Bjaarnee"},
      {cId:"108",cName:"C",price:20000,trainer: "James"}
     ]
   };

   showMoreInfo = (mycid,mycname) =>  {
    console.log("Course id : ",mycid);
    console.log("Course Name : ",mycname)
   }
   
 render(){ 
 console.log("I am App Component"); 



 let mycourseNamesDisplay = this.state.mycourseNames.map(
 (courseName,myindex) => (
  <li key={myindex}>{courseName}</li>
 )
);


 let mycourseListDisplay = this.state.mycourseList.map(
  (mycourse)=>(
    <tr key={mycourse.cId}>
      <td>{mycourse.cId}</td>
      <td>{mycourse.cName}</td>
      <td>{mycourse.price}</td>
      <td>{mycourse.trainer}</td>
      <td>
        <button 
        onClick={this.showMoreInfo.bind(this,mycourse.cId,mycourse.cName)} className='mybutton'>More Info</button>
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
  <h3><u> 1.Simple Type Properties </u></h3>
  <p>Sid:{this.state.sid}</p>
  <p>Sname:{this.state.sname}</p>
  <p>Email:{this.state.email}</p>
  <p>DOB:{this.state.dob}</p>
  <p>Active:{this.state.isActive? "yes":"No"}</p>
</div>


<div className='mydata'>
   <h3><u> 2.Object Type Properties </u></h3>
  <p>Course Id:{this.state.mycourse.cId}</p>
  <p>Course Name:{this.state.mycourse.cName}</p>
  <p>Price:{this.state.mycourse.price}</p>
  <p>Trainer:{this.state.mycourse.trainer}</p>
  <p>Online:{this.state.mycourse.isOnline? "yes":"No"}</p>
</div>


<div className='mydata'>
   <h3><u> 3.Array of simple Type  </u></h3>
   <ul>{mycourseNamesDisplay}</ul>
</div>


<div className="mydata">
          <h3><u>4. Array of Object Type</u></h3>
          <table>
            <thead>
              <tr>
                <th>Course Id</th>
                <th>Course Name</th>
                <th>Price</th>
                <th>Trainer</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {mycourseListDisplay}
            </tbody>
          </table>
        </div>
        <br/><br/><br/><br/><br/><br/>

      </div>
    ); 
  } 
}
export default App; 
