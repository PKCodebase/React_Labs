import { Component } from 'react'; 
import './App.css'; 

//Functional omponent

// function App(){

//     return(
//         <div className='app'>
//             <p className='myclass1'>Welcome to  my page</p>
//             <p className='myclass2'>My name is kaushik</p>

//         </div>
//     );
// }



//class Component

// class App extends Component{
//     render(){
//         return(
//             <div className='myclass'>
//                 <p className='myclass1'>Welcome to  my page</p>
//                 <p className='myclass2'>My name is kaushik</p>

//             </div>
//         );
//     }
//}


const App = () =>{

    const companyName = "Java lerning center";
    let courseName = "React 19";
    return(
    <div className='myclass'>
        <p className='myclass1'>Welcome to  {companyName}</p>
        <p className='myclass2'>My course name is {courseName}</p>

    </div>
    );
}

export default App; 
