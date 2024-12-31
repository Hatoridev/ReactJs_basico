import React from 'react'; // Importa React
import ReactDOM from 'react-dom/client'; // Importa o ReactDOM para renderizar a app no DOM
import './index.css'; // Importa os estilos CSS
import App from './App'; // Importa o componente App

// Cria a raiz do React e renderiza o componente App
const root = ReactDOM.createRoot(document.getElementById('root')); // Cria a raiz de renderização
root.render( 
  <React.StrictMode>
    <App /> {/* Renderiza o componente App */}
  </React.StrictMode>
);

