import React from 'react';
import ReactDOM from 'react-dom/client'; // Altere o import para 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Crie a raiz do React e renderize o componente
const root = ReactDOM.createRoot(document.getElementById('root')); // Criação da raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

