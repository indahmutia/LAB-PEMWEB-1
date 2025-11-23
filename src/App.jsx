import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './pages/BookDetail';
import './styles/App.css';

const App = () => {
  // STATE GLOBAL BUKU
  const [books, setBooks] = useState([
    { id: 1, title: 'KKK', author: 'Ando', date: '2025-11-15', publisher: 'YY' },
    { id: 2, title: 'React Router Guide', author: 'Coder', date: '2025-10-01', publisher: 'TechPub' },
  ]);

  // ============================
  // ➤ ADD BOOK
  // ============================
  const handleAddBook = (newBook) => {
    const bookWithId = { ...newBook, id: Date.now() };
    setBooks(prev => [...prev, bookWithId]);
  };

  // ============================
  // ➤ DELETE BOOK
  // ============================
  const handleDeleteBook = (id) => {
    setBooks(prev => prev.filter(book => book.id !== id));
  };

  // ============================
  // ➤ EDIT / UPDATE BOOK
  // ============================
  const handleEditBook = (updatedBook) => {
    setBooks(prev =>
      prev.map(book =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );
  };

  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="main-title">Book Management</h1>

        <Routes>

          {/* PAGE UTAMA */}
          <Route
            path="/"
            element={
              <BookList
                books={books}
                handleAddBook={handleAddBook}
                handleDeleteBook={handleDeleteBook}
                handleEditBook={handleEditBook}   // <<< PENTING!
              />
            }
          />

          {/* DETAIL */}
          <Route
            path="/books/:id"
            element={<BookDetail books={books} />}
          />

          <Route path="*" element={<h1>404 - Halaman Tidak Ditemukan</h1>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
