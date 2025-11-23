import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Selamat Datang di Book Manager Project! 📚</h1>
      {/* ... Tambahkan konten perkenalan lainnya di sini ... */}
      <Link to="/manage" className="action-button">
        Mulai Kelola Buku &rarr; {/* Ini akan membawa Anda ke halaman yang berisi form/list */}
      </Link>
    </div>
  );
};

export default Home;