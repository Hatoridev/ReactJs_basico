import React, { useRef } from 'react'; // Importa React e o hook useRef para lidar com referências
import './App.css'; // Importa o CSS da aplicação

function App() {
  // Cria uma referência para o campo de input
  const inputRef = useRef(null);

  // Função para focar o input
  const focusInput = () => {
    inputRef.current.focus(); // Foca o campo de input diretamente
  };

  return (
    <div className="App">
      <h1>Usando Refs em React</h1> {/* Título da página */}

      <div className="input-container">
        {/* O input recebe a ref criada acima para que possamos manipulá-lo diretamente */}
        <input 
          ref={inputRef} 
          type="text" 
          placeholder="Clique no botão para focar aqui"
        />
      </div>

      {/* Botão que chama a função focusInput ao ser clicado */}
      <button onClick={focusInput}>
        Focar no Input
      </button>
    </div>
  );
}

export default App;

