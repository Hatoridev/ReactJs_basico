import React from 'react'; // Importa o React
import PropTypes from 'prop-types'; // Importa o PropTypes para validação das Props

// Componente que recebe Props e valida seus tipos
function PropTypesComponent(props) {
  return (
    <div>
      <p><strong>Nome:</strong> {props.name}</p> {/* Exibe o nome passado via Props */}
      <p><strong>Idade:</strong> {props.age}</p> {/* Exibe a idade passada via Props */}
    </div>
  );
}

// Definindo os tipos esperados para as Props
PropTypesComponent.propTypes = {
  name: PropTypes.string.isRequired, // A Prop 'name' deve ser uma string e é obrigatória
  age: PropTypes.number.isRequired,  // A Prop 'age' deve ser um número e é obrigatória
};

export default PropTypesComponent; // Exporta o componente para ser usado em outros arquivos

