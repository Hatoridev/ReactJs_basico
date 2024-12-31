import React, { useRef } from 'react'; // Importa React e useRef
import './App.css'; // Importa o arquivo de estilos CSS

// Função que representa o componente App
function App() {
  const inputRef = useRef(null); // Cria uma referência para o campo de input
  const buttonRef = useRef(null); // Cria uma referência para o botão

  // Função que será chamada ao clicar no botão
  const focusInput = () => {
    inputRef.current.focus(); // Faz o input ganhar o foco (o cursor aparecerá no campo de texto)
  };

  const changeButtonColor = () => {
    // Altera a cor de fundo do botão quando clicado
    buttonRef.current.style.backgroundColor = 'lightblue'; 
  };

  return (
    <div className="App">
      <h1>Aprendendo Refs em React!</h1>
      <p>Com Refs, podemos acessar diretamente os elementos do DOM!</p>

      {/* Campo de input com referência */}
      <input
        ref={inputRef} // Atribui a referência 'inputRef' ao campo de texto
        type="text"
        placeholder="Clique no botão para focar aqui"
      />

      {/* Botão que usa a referência e chama a função para alterar a cor */}
      <button
        ref={buttonRef} // Atribui a referência 'buttonRef' ao botão
        onClick={() => { // Ao clicar, executa as duas funções
          focusInput(); // Faz o input ganhar o foco
          changeButtonColor(); // Altera a cor de fundo do botão
        }}
      >
        Focar no Input e Mudar Cor
      </button>
    </div>
  );
}

export default App; // Exporta o componente App para ser usado em outros arquivos

