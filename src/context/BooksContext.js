import React, { 
    createContext, 
    // useState, 
    useReducer,
    useEffect 
} from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        // the hook runs every time books changes, so it will be stored in localStorage
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])

    return ( 
        <BookContext.Provider value={{books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    );
    
    // const [books, setBooks] = useState([
    //     {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
    //     {title: 'the final empire', author: 'brandon sanderson', id: 2},
    // ]);

//     const addNewBook = (title, author) => {
//         const newBook = { title, author, id: Date.now() };
//         setBooks([...books, newBook]);
//     };

//     const removeBook = (bookId) => {
//         setBooks(books.filter((book) => {
//             return book.id !== bookId; 
//         }));
//     };

//     return ( 
//         <BookContext.Provider value={{books, addNewBook, removeBook }}>
//             {props.children}
//         </BookContext.Provider>
//     );
}
 
export default BookContextProvider;