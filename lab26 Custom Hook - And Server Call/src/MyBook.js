import React from "react";
import { useMyAxios } from "./useMyAxios";

export const MyBook = (props) => {
  const { response, loading, error } = useMyAxios({
    method: "GET",
    url: `/mybook/${props.mybookId}`,
  });

  console.log("Mybook Response : ", response);
  const mybook = response;

  return (
    <table className="table">
      <tbody>
        <tr key={mybook.bookId}>
          <td>{mybook.bookId}</td>
          <td>{mybook.bookName}</td>
          <td>{mybook.author}</td>
          <td>{mybook.price}</td>
          <td>{mybook.category}</td>
          <td>{mybook.publications}</td>
        </tr>
      </tbody>
    </table>
  );
};
