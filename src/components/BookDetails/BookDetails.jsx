import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addStoreList } from "../../utility/addDB";

const BookDetails = () => {

    const handleMark =(id)=>{
        addStoreList(id)
    }


  // Its come Book
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);
  const { bookid: currentId, image,bookName } = book;

  return (
    <div className="card w-80 mx-auto shadow-xl h-96 bg-blue-300">
      <figure className="border bg-yellow-200 py-3 rounded-xl">
        <img
        className="h-72 "
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p></p>
        <div className="card-actions">
          <button onClick={()=>handleMark(bookId)} className="btn btn-outline btn-primary">Mark asRead</button>
          <button className="btn btn-secondary">Add to wishList</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
