import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBook from "./books/AddBook";
const App = () => { 
      return(
      <div className="card">
            <div className="card-header">
                  <h2 className="text-center">Welcome to Kaushik Page!!</h2>
            </div> 

            <div className="card-body">
                 <AddBook />
            </div>

      </div>
      
       );
    

 }
export default App; 
