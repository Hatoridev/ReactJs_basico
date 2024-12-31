import React from 'react'; // Importa a biblioteca React

// Componente que recebe Props e exibe seus valores
function PropComponent(props) {
  return (
    <div>
      <p><strong>Nome:</strong> {props.name}</p> {/* Exibe o nome passado via Props */}
      <p><strong>Idade:</strong> {props.age}</p> {/* Exibe a idade passada via Props */}
    </div>
  );
}

export default PropComponent; // Exporta o componente para ser usado em outros arquivos

