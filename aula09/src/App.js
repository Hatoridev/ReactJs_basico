import React from 'react'; // Importa o React
import { Button, Card, Container } from 'react-bootstrap'; // Importa os componentes do React Bootstrap
import './App.css'; // Importa o arquivo CSS da aplicação

function App() {
  return (
    <div className="App">
      <Container className="mt-5">
        {/* Card componente do React Bootstrap */}
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Bem-vindo ao React Bootstrap!</Card.Title> {/* Título do card */}
            <Card.Text>
              Este é um exemplo básico de como usar os componentes do Bootstrap no React.
            </Card.Text>

            {/* Button componente do React Bootstrap */}
            <Button variant="primary" onClick={() => alert('Botão Clicado!')}>
              Clique Aqui
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;

