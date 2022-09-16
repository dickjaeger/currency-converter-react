import { useState } from 'react'
import './style.css';

const Form = ({ calculateResult, resetMessageBox }) => {
    const [exchangeRateEUR, setEUR] = useState(4.5);
    const [ExchangeRateUSD, setUSD] = useState(4.0);
    const [currency1, setCurrency1] = useState("EUR");
    const [currency2, setCurrency2] = useState("PLN");
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(exchangeRateEUR, ExchangeRateUSD, currency1, currency2, amount);
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kursy walut</legend>
                <p className="form__paragraph">
                    Wprowadź aktualny kurs waluty, którą chcesz przeliczać.
                </p>
                <ul className="form__list">
                    <li className="form__listItem">
                        <label>
                            1 EUR =
                            <input
                                className="form__field"
                                type="number"
                                value={exchangeRateEUR}
                                onChange={({ target }) => {
                                    setEUR(target.value);
                                    resetMessageBox();
                                }}
                                step="0.01"
                                min="0"
                            />
                            PLN
                        </label>
                    </li>
                    <li className="form__listItem">
                        <label>
                            1 USD =
                            <input
                                className="form__field"
                                type="number"
                                name="exchangeRateUSD"
                                value={ExchangeRateUSD}
                                onChange={({ target }) => {
                                    setUSD(target.value);
                                    resetMessageBox();
                                }}
                                step="0.01"
                                min="0"
                            />
                            PLN
                        </label>
                    </li>
                </ul>
            </fieldset>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <p className="form__paragraph">
                    Chcę wymienić
                    <select
                        className="form__field"
                        value={currency1}
                        onChange={({ target }) => {
                            setCurrency1(target.value);
                            resetMessageBox();
                        }}
                    >
                        <option>EUR</option>
                        <option>USD</option>
                        <option>PLN</option>
                    </select>
                    na
                    <select
                        className="form__field"
                        value={currency2}
                        onChange={({ target }) => {
                            setCurrency2(target.value);
                            resetMessageBox();
                        }}
                    >
                        <option>PLN</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                </p>
                <p className="form__paragraph">
                    <label>
                        Kwota: <input
                            className="form__field"
                            type="number"
                            value={amount}
                            onChange={({ target }) => {
                                setAmount(target.value);
                                resetMessageBox();
                            }}
                        />
                    </label>
                </p>
                <button className="form__button">Przelicz!</button>
            </fieldset>
        </form>
    );
}

export default Form;