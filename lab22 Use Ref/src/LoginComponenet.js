import React, { useEffect, useRef } from "react";


const LoginComponent = () => {

  const usernameInput = useRef();
  const passwordInput = useRef();

  // const divRef = useRef();
   const verifyUser = () =>{
    console.log("verify user");
    console.log("UN : " ,usernameInput.current.value);
    console.log("PW : " ,passwordInput.current.value);
  }

  useEffect(()=>{
    // usernameInput.current.focus();
    passwordInput.current.focus();
  },[]);

  return(
    // <div ref={divRef} className="container"></div>
    <div className="container">
      <h3 className="text-center">Login Form</h3>
      <br/>
      <br/>
     <table className="table">
      <tbody>

        <tr>
          <td>Username : </td>
          <td><input ref={usernameInput} type="text" name="username" /></td>
        </tr>

        <tr>
          <td>Password : </td>
          <td><input ref={passwordInput} type="password" name="password"/></td>
        </tr>
         

        <tr>
          <td></td>
          <td><button onClick={verifyUser.bind(this)}>Login </button></td>
        </tr>


      </tbody>
     </table>
    </div>
  );
 
}

export default LoginComponent;
