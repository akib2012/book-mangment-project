import React from 'react';
import { data, Link, useLoaderData, useLocation } from 'react-router';
import Book from './Book';

const Books = () => {
    const bookdata = useLoaderData();
    
    // console.log(bookdata);
    return (
        <div className='max-w-10/12 mx-auto flex flex-col justify-center '>
            <h3 className='text-4xl font-bold my-5 text-center'>Books</h3>
            <div className='grid grid-cols-4 gap-7 mx-16 justify-center'>
                {
                    bookdata.map(bdata => <Link state={bdata} to={`/book-detils/${bdata.bookId}`}><Book  id={bookdata.bookId} bdata={bdata}></Book></Link>)
                }
            </div>
        </div>
    );
};

export default Books;