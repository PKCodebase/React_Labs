import React, { useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const App =()=> {
  console.log("App - Renderd");

  //State
  const[numbers,setNumbers] = useState({
    a:10,
    b:20
  });

  //Method
  /*const findSum =()=>{
    console.log("findSum Called");
    return numbers.a + numbers.b;
  }*/


    //when state is change then component will be re-renderd
    const findSum = useMemo(
      ()=>{
        console.log("findSum Called");
        return numbers.a + numbers.b;
      },[numbers.a ,numbers.b]
    );
  const changeNumbers = () =>{
    setNumbers({
      a:numbers.a,
      b:numbers.b
    });
  }


  return(
     <div className="container">
      <br/>
      <h3>Use Memo Hook </h3>
      <br/>
      <h4>{numbers.a} + {numbers.b} = {findSum}</h4>
      <br/>
       <button onClick={changeNumbers.bind(this)}>Change Numbers</button>
     </div>
  )
 
}

export default App;
