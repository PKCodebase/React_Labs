import React from "react";
import { useMyAxios } from "./useMyAxios";

export const BooksList = () => {
  const { response, loading, error } = useMyAxios({
    method: "GET",
    url: "/allbooks",

    /*    data:{
           bookId     it is basically Update and post the data 
       }, */

    /*   headers:{
                    Send Jwt Token
        } */
  });
  console.log("Response : ", response);

  const mybooksList = response.map((mybook) => {
    return (
      <tr key={mybook.bookId}>
        <td>{mybook.bookId}</td>
        <td>{mybook.bookName}</td>
        <td>{mybook.author}</td>
        <td>{mybook.price}</td>
        <td>{mybook.category}</td>
        <td>{mybook.publications}</td>

        <td>
          <button className="btn btn-success">View Details</button>
        </td>
      </tr>
    );
  });

  const mybooksListToDisplay = (
    <table className="table">
      <thead>
        <tr>
          <th>Book Id</th>
          <th>Book Name</th>
          <th>Author</th>
          <th>Price</th>
          <th>Category</th>
          <th>Publications</th>
        </tr>
      </thead>
      <tbody>{mybooksList}</tbody>
    </table>
  );

  const messageToDisplay = <h3>{error.message} </h3>;

  let toDisplay = null;

  if (loading) {
    toDisplay = <h3>Loading....Please wait...</h3>;
  } else {
    if (error) {
      toDisplay = messageToDisplay;
    } else {
      toDisplay = mybooksListToDisplay;
    }
  }

  return (
    <div className="container">
      <br />
      {toDisplay}
    </div>
  );
};
