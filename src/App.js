import './App.css';
import Container from './Container/index.js'
import Title from './Title/index.js'
import Form from './Form/index.js'
import MessageBox from './MessageBox/index.js'

function App() {
  return (
    <Container>
      <Title />
      <Form />
      <MessageBox />
    </Container>
  );
}

export default App;
