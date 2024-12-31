import React, { useState } from 'react'; // Importa React e o hook useState
import './App.css'; // Importa o arquivo de estilos CSS

function App() {
  // Definindo o estado 'count' para controlar o número de cliques
  const [count, setCount] = useState(0); // O estado começa com o valor 0

  // Função para incrementar o contador
  const increment = () => {
    setCount(count + 1); // Atualiza o estado de 'count' com +1
  };

  // Função para decrementar o contador
  const decrement = () => {
    setCount(count - 1); // Atualiza o estado de 'count' com -1
  };

  return (
    <div className="App">
      <h1>Contador com React</h1> {/* Título da página */}
      <p>
        O contador está em <strong>{count}</strong> {/* Exibe o valor atual de 'count' */}
      </p>

      {/* Botões para incrementar e decrementar */}
      <button onClick={increment}>Incrementar</button> {/* Chama a função 'increment' quando clicado */}
      <button onClick={decrement}>Decrementar</button> {/* Chama a função 'decrement' quando clicado */}
    </div>
  );
}

export default App; // Exporta o componente App

