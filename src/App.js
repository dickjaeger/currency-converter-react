import { useState } from 'react'
import './App.css';
import Container from './Container/index.js'
import Title from './Title/index.js'
import Form from './Form/index.js'
import MessageBox from './MessageBox/index.js'

function App() {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const resetMessageBox = () => {
    setError(false);
    setMessage("");
  }

  const switchExchangeRate = (currency, exchangeRateEUR, exchangeRateUSD) => {
    switch (currency) {
      case "EUR":
        return exchangeRateEUR;
      case "USD":
        return exchangeRateUSD;
      default:
        return 1;
    }
  }

  const calculateResult = (exchangeRateEUR, exchangeRateUSD, currency1, currency2, amount) => {
    const exchangeRate1 = switchExchangeRate(currency1, exchangeRateEUR, exchangeRateUSD);
    const exchangeRate2 = switchExchangeRate(currency2, exchangeRateEUR, exchangeRateUSD);

    if (amount === "") {
      setError(true);
      setMessage("Podaj kwotę jaką chcesz wymienić!");
      return;
    };

    if (!(exchangeRate1 && exchangeRate1 > 0) || !(exchangeRate2 && exchangeRate2 > 0)) {
      setError(true);
      setMessage("Podaj kurs, który jest większy od 0!");
      return;
    };

    setError(false);
    setMessage(`Dostaniesz dokładnie ${(exchangeRate1 / exchangeRate2 * amount).toFixed(2)} ${currency2}`);

  }

  return (
    <Container>
      <Title />
      <Form calculateResult={calculateResult} resetMessageBox={resetMessageBox} />
      <MessageBox message={message} error={error} />
    </Container>
  );
}

export default App;
