import React from 'react'; // Importa o React, necessário para que o JSX funcione corretamente
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar o aplicativo na página
import './index.css'; // Importa o arquivo de estilos CSS para o projeto
import App from './App'; // Importa o componente App, que é o ponto de entrada do nosso aplicativo

// Cria a raiz do React e renderiza o componente App na div com id 'root' do index.html
const root = ReactDOM.createRoot(document.getElementById('root')); // Cria a raiz do aplicativo React
root.render( // Renderiza o conteúdo da raiz
  <React.StrictMode> {/* StrictMode ajuda a identificar problemas no desenvolvimento */}
    <App /> {/* O componente principal que será exibido */}
  </React.StrictMode>
);

