import React, { useState } from 'react'; // Importa React e o hook useState
import './App.css'; // Importa os estilos CSS

function App() {
  // Inicializando o estado com o valor 0
  const [count, setCount] = useState(0); // 'count' armazena o valor e 'setCount' é usado para atualizá-lo

  // Função para aumentar o contador
  const increment = () => {
    setCount(count + 1); // Atualiza o estado com o novo valor de 'count'
  };

  // Função para diminuir o contador
  const decrement = () => {
    setCount(count - 1); // Atualiza o estado com o novo valor de 'count'
  };

  return (
    <div className="App">
      <h1>Contador em React</h1> {/* Título da página */}

      <div className="counter">
        <button onClick={decrement}>-</button> {/* Botão para diminuir o contador */}
        <span>{count}</span> {/* Exibe o valor atual do contador */}
        <button onClick={increment}>+</button> {/* Botão para aumentar o contador */}
      </div>
    </div>
  );
}

export default App; // Exporta o componente App

