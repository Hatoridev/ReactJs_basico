import React, { useState, useRef } from 'react'; // Importa React, useState e useRef
import './App.css'; // Importa o arquivo de estilos CSS

function App() {
  // Definindo o estado para o nome
  const [name, setName] = useState('');
  
  // Criando uma referência para o campo de input
  const nameInputRef = useRef(null); // A referência começa como null

  // Função para focar no campo de input ao clicar no botão
  const focusInput = () => {
    nameInputRef.current.focus(); // Foca o campo de input
  };

  // Função para limpar o campo de input
  const clearInput = () => {
    nameInputRef.current.value = ''; // Limpa o valor do campo de input
  };

  return (
    <div className="App">
      <h1>Exemplo de Refs em React</h1> {/* Título da página */}

      <input 
        ref={nameInputRef}  // A referência 'nameInputRef' é associada ao campo de input
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} // Atualiza o estado 'name' ao digitar
        placeholder="Digite seu nome" 
      />
      <p>Nome digitado: {name}</p> {/* Exibe o nome digitado */}
      
      <button onClick={focusInput}>Focar no campo</button> {/* Foca no campo de input */}
      <button onClick={clearInput}>Limpar campo</button> {/* Limpa o campo de input */}
    </div>
  );
}

export default App; // Exporta o componente App

