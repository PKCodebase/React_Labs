import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PriceComponent from "./PriceComponent";

// import CourseComponent from "./CourseComponenet";

class App extends Component {
  state = {
    courseName: "React JS",
    coursePrice: 20000,
  };

  updateName = () => {
    this.setState((prevState) => ({
      courseName:
        prevState.courseName === "React JS" ? "Angular JS" : "React JS",
    }));
  };

  updatePrice = () => {
    this.setState((prevState) => ({
      coursePrice: prevState.coursePrice === 20000 ? 10000 : 20000,
    }));
  };
  render() {
    console.log("App renderd");
    const { courseName, coursePrice } = this.state;
    return (
      <div className="container">
        <table className="table">
          <tbody>
            <tr>
              <td>Course Name : {courseName}</td>
              <td>
                <button onClick={this.updateName} className="btn btn-success">
                  Update Name
                </button>
              </td>
            </tr>

            <tr>
              <td>Course Price : </td>
              <td>{coursePrice}</td>
              <td>
                <button onClick={this.updatePrice} className="btn btn-success">
                  Update Price
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <PriceComponent price={coursePrice} />
      </div>
    );
  }
}

export default App;
