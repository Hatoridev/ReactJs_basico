import React from 'react'; // Importa a biblioteca React
import './App.css'; // Importa o arquivo CSS para o estilo da aplicação
import PropTypesComponent from './PropTypesComponent'; // Importa o componente com PropTypes
import PropComponent from './PropComponent'; // Importa o componente que utiliza Props

function App() {
  const name = 'Alberto'; // Define uma variável 'name' com o valor 'Alberto'
  const age = 26; // Define uma variável 'age' com o valor 26

  return (
    <div className="App"> {/* Contêiner principal da aplicação */}
      <h1>Bem-vindo à Aula 02 de React!</h1> {/* Título principal */}
      <p>Vamos aprender sobre <strong>Props</strong> e <strong>PropTypes</strong> nesta aula!</p> {/* Explicação geral */}
      
      <div className="content">
        <h2>O que está sendo abordado nesta aula:</h2>
        <ul>
          <li><strong>Props:</strong> Passando dados entre componentes.</li>
          <li><strong>PropTypes:</strong> Validando tipos de dados das Props.</li>
        </ul>
      </div>

      {/* Exibe o componente com Props passadas */}
      <div className="props-demo">
        <h3>Componente com Props:</h3>
        <PropComponent name={name} age={age} />
      </div>

      {/* Exibe o componente com PropTypes e validação */}
      <div className="prop-types-demo">
        <h3>Componente com PropTypes:</h3>
        <PropTypesComponent name={name} age={age} />
      </div>
    </div>
  );
}

export default App; // Exporta o componente App para o index.js

