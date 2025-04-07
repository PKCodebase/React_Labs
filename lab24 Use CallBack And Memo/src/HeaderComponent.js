import React from "react";


const HeaderComponent = (props) => {
  console.log("HeaderComponent renderd")
  return(
    <div className="container">
      <br/>
      <h3>useCallBack()-Hook</h3>
      <br/>
     
    </div>
  );
};

export default React.memo(HeaderComponent);
