import React, { useState } from 'react'; // Importa React e o hook useState para gerenciar o estado do contador

// Função que representa o componente ClickCounter
function ClickCounter() {
  // useState cria uma variável de estado chamada 'count' e uma função para atualizá-la (setCount)
  const [count, setCount] = useState(0); // Inicializa o contador com 0

  // Função que será chamada quando o botão for clicado
  const handleClick = () => {
    setCount(count + 1); // Incrementa o contador em 1
  };

  return (
    <div className="click-counter"> {/* Contêiner do componente ClickCounter */}
      <h2>Contador de Cliques</h2> {/* Título do contador */}
      <p>Você clicou {count} vezes</p> {/* Exibe o número de cliques */}
      <button onClick={handleClick}>Clique aqui!</button> {/* Botão que dispara o evento de clique */}
    </div>
  );
}

export default ClickCounter; // Exporta o componente ClickCounter para ser usado em outros arquivos

