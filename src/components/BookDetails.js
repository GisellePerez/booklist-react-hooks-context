import React, { useContext } from 'react';
import { BookContext } from '../context/BooksContext';

const BookDetails = ({ book }) => {
    const { removeBook } = useContext(BookContext);
    return (  
        <li>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>

            <button onClick={(event) => {event.preventDefault(); removeBook(book.id)}}> x </button>
        </li>
    );
}
 
export default BookDetails;