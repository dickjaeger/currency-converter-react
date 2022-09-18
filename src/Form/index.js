import { useState } from 'react'
import currenciesArray from '../currencies.js';
import Fieldset from './Fieldset/index.js';
import CurrenciesList from './CurrenciesList/index.js';
import SelectCurrency from './SelectCurrency/index.js';
import CurrentDate from './CurrentDate/index.js';
import './style.css';

const Form = ({ showResult, setError, setMessage }) => {
    const [currencies, setCurrencies] = useState(currenciesArray);
    const [currency1Name, setCurrency1Name] = useState("EUR");
    const [currency2Name, setCurrency2Name] = useState("PLN");
    const [amount, setAmount] = useState("");

    const resetMessageBox = () => {
        setError(false);
        setMessage("");
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currency1 = currencies.find(({ name }) => name === currency1Name);
        const currency2 = currencies.find(({ name }) => name === currency2Name);

        if (amount === "") {
            setError(true);
            setMessage("Podaj kwotę jaką chcesz wymienić!");
            return;
        };

        if (!(currency1.value && currency1.value > 0) || !(currency2.value && currency2.value > 0)) {
            setError(true);
            setMessage("Podaj kurs, który jest większy od 0!");
            return;
        };

        showResult(currency1, currency2, amount);
    };

    const onAmountChange = ({ target }) => {
        setAmount(target.value);
        resetMessageBox();
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <Fieldset
                title="Kursy walut"
                body={<>
                    <CurrentDate />
                    <p className="form__paragraph">
                        Wprowadź aktualny kurs waluty, którą chcesz przeliczać.
                    </p>
                    <CurrenciesList
                        currencies={currencies}
                        setCurrencies={setCurrencies}
                        resetMessageBox={resetMessageBox}
                    />
                </>}
            />
            <Fieldset
                title="Kalkulator walut"
                body={<>
                    <p className="form__paragraph">
                        Chcę wymienić
                        <SelectCurrency
                            currencies={currencies}
                            currencyName={currency1Name}
                            setCurrencyName={setCurrency1Name}
                            resetMessageBox={resetMessageBox}
                        />
                        na
                        <SelectCurrency
                            currencies={currencies}
                            currencyName={currency2Name}
                            setCurrencyName={setCurrency2Name}
                            resetMessageBox={resetMessageBox}
                        />

                    </p>
                    <p className="form__paragraph">
                        <label>
                            Kwota: <input
                                className="form__field"
                                type="number"
                                value={amount}
                                onChange={onAmountChange}
                            />
                        </label>
                    </p>
                    <button className="form__button">Przelicz!</button>
                </>}
            />
        </form>
    );
};

export default Form;