import React from 'react'; // Importa React
import ReactDOM from 'react-dom/client'; // Importa o ReactDOM para renderizar no DOM
import './index.css'; // Importa o arquivo CSS para estilizar a aplicação
import App from './App'; // Importa o componente principal App

// Cria a raiz do React e renderiza o componente App
const root = ReactDOM.createRoot(document.getElementById('root')); // Cria a raiz de renderização
root.render( 
  <React.StrictMode>
    <App /> {/* Renderiza o componente App */}
  </React.StrictMode>
);

