import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    // Its come Book
    const {bookId} = useParams()
    const id = parseInt(bookId)
    console.log(id)
    const data = useLoaderData()
    
    const book =data.find(book => book.bookId === id);
    const {bookid:currentId , image} = book

    return (
        <div className='w-2/3 mx-auto my-6'>
            <img className='h-[150px]' src={image} alt="" />
            <h3>Book Details </h3>
            <button className='btn btn-outline btn-primary'>Read</button>
            <button className='btn btn-primary'>WishList</button>
        </div>
    );
};

export default BookDetails;