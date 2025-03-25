import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register";

const App = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <h2 className="text-dark fw-bold mb-4">Welcome to Kaushik's Page!!</h2>
      <Register />
    </div>
  );
};

export default App;
