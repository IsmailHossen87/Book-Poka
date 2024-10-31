import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({data}) => {
    const {image,bookName,author,bookId
    } = data
    return (
       <Link to={`books/${bookId}`}>
        <div className="card bg-base-100 shadow-xl p-6 ">
        <figure className='border bg-gray-200 py-8  rounded-2xl'>
          <img
            src={image}
            className='h-[170px] rounded-lg'
            alt={bookName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>{author}</p>
          <div className="card-actions mt-2 justify-end">
            <div className='badge badge-outline'>Fashion</div>
            <div className='badge badge-outline'>Products</div>
          </div>
        </div>
      </div></Link>
    );
};

export default Book;