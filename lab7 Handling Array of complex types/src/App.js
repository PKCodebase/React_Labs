import { Component } from 'react'; 
import './App.css'; 
class App extends Component { 
    state = { 
      mycoursesToDisplay:[],
      mystudentsData:[
        {
        sid:101, 
        sname:"kaushik", 
        email:"kaushikprasad1659@gmail.com", 
        phones:{ office:1111 ,home:2222},
        address:{city:"Blore", state:"KA"},
        mycourses:[
         {cId:"105",cName:"Java",price:13000,trainer:"James"},
         {cId:"106",cName:"Python",price:12000,trainer:"srinivas"},
         {cId:"107",cName:"React",price:16000,trainer:"srinivas"},
         {cId:"108",cName:"Html",price:4000,trainer:"srinivas"},
        ]
      },
      {
        sid:102, 
        sname:"Ravi", 
        email:"ravi59@gmail.com", 
        phones:{ office:1112 ,home:2223},
        address:{city:"Blore", state:"KA"},
        mycourses:[
         {cId:"109",cName:"Java",price:13000,trainer:"James"},
         {cId:"110",cName:"Python",price:12000,trainer:"srinivas"},
         {cId:"111",cName:"React",price:16000,trainer:"srinivas"},
         {cId:"112",cName:"Html",price:4000,trainer:"srinivas"},
        ]
      },
      {
        sid:103, 
        sname:"Rakesh", 
        email:"rakesh16@gmail.com", 
        phones:{ office:1113 ,home:2224},
        address:{city:"Ranchi", state:"JH"},
        mycourses:[
         {cId:"113",cName:"Java",price:13000,trainer:"James"},
         {cId:"114",cName:"Python",price:12000,trainer:"srinivas"},
         {cId:"115",cName:"React",price:16000,trainer:"srinivas"},
         {cId:"116",cName:"Html",price:4000,trainer:"srinivas"},
        ]
      },
      {
        sid:104, 
        sname:"Rahul", 
        email:"rahul1@gmail.com", 
        phones:{ office:1114 ,home:2225},
        address:{city:"patna", state:"Bihar"},
        mycourses:[
         {cId:"117",cName:"Java",price:13000,trainer:"James"},
         {cId:"118",cName:"Python",price:12000,trainer:"srinivas"},
         {cId:"119",cName:"React",price:16000,trainer:"srinivas"},
         {cId:"120",cName:"Html",price:4000,trainer:"srinivas"},
        ]
      },
    ]
  }

   showCourseInfo = (mysid ) =>  {
    console.log("SID : ",mysid);


    let filteredStudent = this.state.mystudentsData.filter(
    (mystudnet) => mystudnet.sid === mysid
   );

   let mycourseList = filteredStudent[0].mycourses;
   
   let tempcoursesToDisplay=mycourseList.map(
    (mycourses) =>(
      <tr key={mycourses.cId}>
      <td>{mycourses.cId}</td>
      <td>{mycourses.cName}</td>
      <td>{mycourses.price}</td>
      <td>{mycourses.trainer}</td>
      </tr>
    )
   )

   let displayCourses=(
    <div>
      <h3>Course Details of student:{mysid}</h3>
    
<table>
  <thead>
    <tr>
      <th>CID</th>
      <th>Cname</th>
      <th>Price</th>
      <th>Trainer</th>
    </tr>
  </thead>
  <tbody>
    {tempcoursesToDisplay}
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

let mystudentsToDisplay = this.state.mystudentsData.map(
  (mystudnet)=>(
    <tr key={mystudnet.sid}>
      <td>{mystudnet.sid}</td>
      <td>{mystudnet.sname}</td>
      <td>{mystudnet.email}</td>
      <td>{mystudnet.phones.office}</td>
      <td>{mystudnet.phones.home}</td>
      <td>{mystudnet.address.city}</td>
      <td>{mystudnet.address.state}</td>
      <td>
  <button 
    className="mybutton" 
    onClick={this.showCourseInfo.bind(this,mystudnet.sid)}>
    Course Info
  </button>
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
      <th>SID</th>
      <th>Sname</th>
      <th>Email</th>
      <th>Office Phone</th>
      <th>Home Phone</th>
      <th>City</th>
      <th>State</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {mystudentsToDisplay}
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
