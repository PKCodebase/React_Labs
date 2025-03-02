import { Component } from 'react'; 
import './App.css'; 
import Student from './student/Student';



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


class App extends Component{

    state = {
        myheader:"Welcome to jlc",
    }
    render(){
        console.log("I am App")
        return (
            <div className="myheader">
                <p>{this.state.myheader}</p>
                <br/>
                <Student/>
            </div>
        
        );
    }
}




export default App; 
