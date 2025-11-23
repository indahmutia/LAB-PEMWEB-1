import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          📚 Book Manager App
        </Link>
        
        <div className="navbar-links">
          {/* 1. Link Perkenalan Project */}
          <Link to="/" className="nav-item">
            Perkenalan
          </Link>
          
          {/* 2. Link Kelola Buku (Form & List) */}
          <Link to="/manage" className="nav-item">
            Kelola Buku
          </Link>
          
          {/* 3. Link Detail Buku (Contoh: Menuju Detail ID 1) */}
          <Link to="/books/1" className="nav-item example-link">
            Detail Buku (Contoh)
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;