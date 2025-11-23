import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Pastikan CSS ini ada

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Pastikan tidak ada BrowserRouter di sini jika sudah ada di App.jsx */}
    <App /> 
  </React.StrictMode>,
)