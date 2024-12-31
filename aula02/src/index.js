import React from 'react';
import ReactDOM from 'react-dom/client'; // Agora usamos 'react-dom/client' ao invés de 'react-dom'
import './index.css';
import App from './App';

// Cria a raiz do React e renderiza o componente App
const root = ReactDOM.createRoot(document.getElementById('root')); // Cria a raiz do React
root.render( // Renderiza o App dentro da raiz criada
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

