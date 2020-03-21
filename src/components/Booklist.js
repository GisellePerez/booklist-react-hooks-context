import React, { useContext } from 'react';
import { BookContext } from '../context/BooksContext';
import BookDetails from './BookDetails';


const BookList = () => {
    const {books} = useContext(BookContext);

    const bookList = books.map((book) => {
            return (
                <BookDetails key={book.id} book={book} />
            );
        });

    return (  
        <div className="book-list">
            <ul>
                {books.length ? 
                    bookList 
                : (
                    <div className="empty"> No books to read.</div>
                )}
            </ul>
        </div>
    );
}
 
export default BookList;