import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BookDetail = ({ books }) => {
  // Mengambil parameter dinamis 'id' dari URL
  const { id } = useParams();

  // Mencari data buku berdasarkan id
  // Perlu parseInt karena id dari URL (useParams) adalah string
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="book-detail-container not-found">
        <h2>Buku Tidak Ditemukan 😔</h2>
        <p>Kembali ke <Link to="/">Halaman Utama</Link></p>
      </div>
    );
  }

  return (
    <div className="book-detail-container">
      <h1 className="detail-title">Detail Buku</h1>
      <div className="detail-card">
        <p><strong>Judul:</strong> {book.title}</p>
        <p><strong>Penulis:</strong> {book.author}</p>
        <p><strong>Tanggal Publikasi:</strong> {book.date}</p>
        <p><strong>Penerbit:</strong> {book.publisher}</p>
      </div>
      <Link to="/" className="back-button">
        &larr; Kembali ke Daftar Buku
      </Link>
    </div>
  );
};

export default BookDetail;