import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
        {title: 'the final empire', author: 'brandon sanderson', id: 2},
    ]);

    const addNewBook = (title, author) => {
        const newBook = { title, author, id: Date.now() };
        setBooks([...books, newBook]);
    };

    const removeBook = (bookId) => {
        setBooks(books.filter((book) => {
            return book.id !== bookId; 
        }));
    };

    return ( 
        <BookContext.Provider value={{books, addNewBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;