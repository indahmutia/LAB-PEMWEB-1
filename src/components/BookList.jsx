import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookList({ books, handleAddBook, handleDeleteBook, handleEditBook }) {

  // Form state
  const [input, setInput] = useState({ title: '', author: '', date: '', publisher: '' });

  // State untuk mode edit
  const [editId, setEditId] = useState(null);

  // ============================
  // HANDLE SUBMIT: ADD atau EDIT
  // ============================
  const handleSubmit = () => {
    if (!input.title.trim()) return;

    if (editId) {
      // MODE EDIT
      const updatedData = { ...input, id: editId };
      handleEditBook(updatedData);   // kirim ke App.jsx
      setEditId(null);               // keluar dari edit mode
    } else {
      // MODE ADD
      handleAddBook(input);
    }

    // Reset form
    setInput({ title: '', author: '', date: '', publisher: '' });
  };

  // ============================
  // KETIKA TEKAN TOMBOL EDIT
  // ============================
  const startEdit = (book) => {
    setEditId(book.id);
    setInput({
      title: book.title,
      author: book.author,
      date: book.date,
      publisher: book.publisher,
    });
  };

  return (
    <div className="book-management-container">

      {/* === FORM === */}
      <h2 className="add-book-heading">{editId ? 'Edit Book' : 'Add Book'}</h2>

      <div className="form-group">
        <input 
          type="text" 
          placeholder="Book Title" 
          value={input.title} 
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        />
        <input 
          type="text" 
          placeholder="Author / Penulis" 
          value={input.author} 
          onChange={(e) => setInput({ ...input, author: e.target.value })}
        />
        <input 
          type="date" 
          value={input.date} 
          onChange={(e) => setInput({ ...input, date: e.target.value })}
        />
        <input 
          type="text" 
          placeholder="Publisher"
          value={input.publisher} 
          onChange={(e) => setInput({ ...input, publisher: e.target.value })}
        />

        {/* Tombol berubah jadi Update ketika edit */}
        <button className="add-button" onClick={handleSubmit}>
          {editId ? 'Update Book' : 'Add Book'}
        </button>
      </div>

      {/* === TABLE === */}
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>Publisher</th>
              <th>Action</th>
              <th>Detail</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={book.id}>
                <td>{index + 1}</td>
                <td data-label="Title">{book.title}</td>
                <td data-label="Author">{book.author}</td>
                <td data-label="Date">{book.date}</td>
                <td data-label="Publisher">{book.publisher}</td>

                <td className="action-buttons">
                  {/* TOMBOL EDIT */}
                  <button className="edit-btn" onClick={() => startEdit(book)}>
                    Edit
                  </button>

                  {/* TOMBOL DELETE */}
                  <button className="delete-btn" onClick={() => handleDeleteBook(book.id)}>
                    Delete
                  </button>
                </td>

                <td>
                  <Link to={`/books/${book.id}`} className="detail-link">Detail</Link>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default BookList;
