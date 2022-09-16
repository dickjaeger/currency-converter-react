import './style.css';

const Form = () => (

    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kursy walut</legend>
            <p className="form__paragraph">
                Wprowadź aktualny kurs waluty, którą chcesz przeliczać.
            </p>
            <ul className="form__list">
                <li className="form__listItem">
                    <label>
                        1 EUR =<input className="form__field"
                            type="number" name="exchangeRateEUR"
                            value="4.50" step="0.01" min="0" />PLN
                    </label>
                </li>
                <li className="form__listItem">
                    <label>
                        1 USD =<input className="form__field"
                            type="number" name="exchangeRateUSD"
                            value="4.00" step="0.01" min="0" />PLN
                    </label>
                </li>
            </ul>
        </fieldset>
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kalkulator walut</legend>
            <p className="form__paragraph">
                Chcę wymienić
                <select className="form__field">
                    <option>EUR</option>
                    <option>USD</option>
                    <option>PLN</option>
                </select>
                na
                <select className="form__field">
                    <option>PLN</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
            </p>
            <p className="form__paragraph">
                <label>
                    Kwota: <input className="form__field"
                        type="number" />
                </label>
            </p>
            <button className="form__button">Przelicz!</button>
        </fieldset>
    </form>
)

export default Form;