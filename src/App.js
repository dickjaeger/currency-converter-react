import { useState } from 'react'
import './App.css';
import Container from './Container/index.js'
import Title from './Title/index.js'
import Form from './Form/index.js'
import MessageBox from './MessageBox/index.js'

function App() {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const calculateResult = (exchangeRate1, exchangeRate2, amount) => {
    return exchangeRate2 / exchangeRate1 * amount;
  };

  const showResult = (exchangeRate1, exchangeRate2, amount, currency2Name) => {
    setError(false);
    setMessage(
      `Dostaniesz dokładnie 
      ${calculateResult(exchangeRate1, exchangeRate2, amount).toFixed(2)}
      ${currency2Name}`
    );
  };

  return (
    <Container>
      <Title />
      <Form
        showResult={showResult}
        setError={setError}
        setMessage={setMessage}
      />
      <MessageBox message={message} error={error} />
    </Container>
  );
};

export default App;
