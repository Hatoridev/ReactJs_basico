import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar o estado
import './App.css'; // Importa o arquivo de estilos específicos para o App
import ClickCounter from './ClickCounter'; // Importa o componente ClickCounter, que será usado para o contador de cliques

// Função que representa o componente App
function App() {
  return (
    <div className="App"> {/* Contêiner principal do componente */}
      <h1>Bem-vindo à Aula 03 de React!</h1> {/* Título principal da página */}
      <p>
        Nesta aula, vamos aprender sobre <strong>Eventos</strong> e
        <strong> Componentização</strong>.
      </p>
      
      {/* Inserindo o componente ClickCounter */}
      <ClickCounter /> {/* O componente ClickCounter será renderizado aqui */}
    </div>
  );
}

export default App; // Exporta o componente App para ser usado em outros arquivos

