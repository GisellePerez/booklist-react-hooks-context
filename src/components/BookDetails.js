import React, { useContext } from 'react';
import { BookContext } from '../context/BooksContext';

const BookDetails = ({ book }) => {
    // const { removeBook } = useContext(BookContext);
    const { dispatch } = useContext(BookContext);

    const removeBookHandler = (event) => {
        event.preventDefault();
        dispatch({
            type: 'REMOVE_BOOK',
            id: book.id 
        });
    };

    return (  
        <li>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>

            <button onClick={(event) => removeBookHandler(event)}> x </button>
        </li>
    );
}
 
export default BookDetails;