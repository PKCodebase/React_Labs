import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TexxInputDemo from "./mydemos/TextInputDemo";
import TextAreaDemo from "./mydemos/TextAreaDemo";
import SelectBoxDemo from "./mydemos/SelectBoxDemo";
import RadioButtonDemo from "./mydemos/RadioButtonDemo";
import CheckBoxDemo from "./mydemos/CheckBoxDemo";
const App = () => { 
      return(
      <div className="card">
            <div className="card-header">
                  <h2 className="text-center">Welcome to Kaushik Page!!</h2>
            </div> 

            <div className="card-body">
                 <TexxInputDemo />
                 <TextAreaDemo />
                 <SelectBoxDemo />
                 <RadioButtonDemo />
                 <CheckBoxDemo />
            </div>

      </div>
      
       );
    

 }
export default App; 
