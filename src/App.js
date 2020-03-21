import React from 'react';
import BookContextProvider from './context/BooksContext';
import BookList from './components/Booklist';
import Navbar from './components/Navbar';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
