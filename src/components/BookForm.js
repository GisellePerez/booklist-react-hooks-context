import React, { useState, useContext } from 'react';
import { BookContext } from '../context/BooksContext';

const BookForm = () => {
    // const {addNewBook} = useContext(BookContext);
    const { dispatch } = useContext(BookContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const getTitleHandler = (event) => {
        setTitle(event.target.value);
    }
    
    const getAuthorHandler = (event) => {
        setAuthor(event.target.value);
    }

    const addBookHandler = (event) => {
        event.preventDefault();
        // addNewBook(title, author);
        dispatch({
            type: 'ADD_BOOK',
            book: {
                title, 
                author
            }
        });
        setTitle('');
        setAuthor('');
    }

    return (  
        <form>
            <label>Title:</label>
            <input placeholder="Enter book title" 
                value={title}
                onChange={(event) => getTitleHandler(event)} 
            />

            <label>Author:</label>
            <input placeholder="Enter book title" 
                value={author}
                onChange={(event) => getAuthorHandler(event)} 
            />

            <button onClick={(event) => addBookHandler(event)}>Add book</button>
        </form>
    );
}
 
export default BookForm;