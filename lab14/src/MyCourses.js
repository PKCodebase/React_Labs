import { Component } from "react";

class MyCourses extends Component{
     static displayName="MyCourses compionent";

     constructor(props){
        super(props);

        console.log(1,"My course constructor");

        this.state = {
            trainerName:"Kaushik Prasad",
            trainerEmail:"kp@gmail.com",
            mycourseList:[
                {cId:1,cName:"Java",price:10000},
                {cId:2,cName:"Python",price:20000},
                {cId:3,cName:"React",price:30000},
                {cId:4,cName:"Angular",price:40000},
                {cId:5,cName:"Vue",price:50000}
            ]
        };

     }
     static getDerivedStateFromProps(myprops,mystate){
        console.log(2,"My course getDerivedStateFromProps");
        return null;
     }
     componentDidMount(){
        console.log(4,"My course componentDidMount");
     }
     shouldComponentUpdate(nextProps,nextState){
        console.log("Mycourses--shouldComponentUpdate");
     }
     getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Mycourses--getSnapshotBeforeUpdate");
        return null;
     }
     componentDidUpdate(prevProps, prevState, mysnapshot){
        console.log("Mycourse -- componentDidUpdate");
     }
     componentWillUnmount(){
        console.log(5, "My course componentWillUnmount");
     }
     render(){
        console.log(3, "My course render");

        let courseListToDisplay = this.state.mycourseList.map(
         (mycourse)=>(
            <tr key={mycourse.cId}>
                <td>{mycourse.cId}</td>
                <td>{mycourse.cName}</td>
                <td>{mycourse.price}</td>
            </tr>
        )
        );

        return(
            <div className="container">
                <br/>
                <div className="container">
                    <table className="table">
                        <tbody>
                            {courseListToDisplay}
                        </tbody>
                    </table>
                </div>
            </div>
        )
     }
}

export default MyCourses;