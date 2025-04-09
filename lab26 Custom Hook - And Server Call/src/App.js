import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BooksList } from "./BooksList";
import { AddBook } from "./AddBook";
import { MyBook } from "./MyBook";
import { DeleteBook } from "./DeleteBook";



 export const App = () => {
  console.log("App rendered");
  return(
    <div className="container">

        <MyBook />
      {/* <MyBook mybookId="101" />
      <MyBook mybookId="102" /> */}

      <DeleteBook/>
      {/* <DeleteBook mybookId="101"/>
      <DeleteBook mybookId="101"/> */}

      
      {/* <AddBook/>
     <BooksList/> */}
    </div>
  )
};

