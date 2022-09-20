import { useState } from 'react'
import { useCurrentRates } from './useCurrentRates'
import SelectCurrency from './SelectCurrency/index.js';
import CurrentDate from './CurrentDate/index.js';
import UpdateDateInfo from './UpdateDateInfo';
import StateContainer from './ErrorContainer';
import { Form as StyledForm, FormRow, FormField, Button } from './styled.js';

const Form = ({ showResult, setError, setMessage }) => {
    const [currentRates, updateRatesDate, loading, error] = useCurrentRates();
    const [currency1Name, setCurrency1Name] = useState("EUR");
    const [currency2Name, setCurrency2Name] = useState("PLN");
    const [amount, setAmount] = useState("");

    const resetMessageBox = () => {
        setError(false);
        setMessage("");
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const exchangeRate1 = currentRates[currency1Name];
        const exchangeRate2 = currentRates[currency2Name];

        if (amount === "") {
            setError(true);
            setMessage("Podaj kwotę jaką chcesz wymienić!");
            return;
        };
        if (amount < 0) {
            setError(true);
            setMessage("Podaj kwotę większą od 0!");
            return;
        };

        showResult(exchangeRate1, exchangeRate2, amount, currency2Name);
    };

    const onAmountChange = ({ target }) => {
        setAmount(target.value);
        resetMessageBox();
    };
    console.log(loading);
    return (
        <StyledForm onSubmit={onFormSubmit}>
            <CurrentDate />
            {!error && !loading
                ? <>
                    <FormRow>
                        Chcę wymienić
                        <SelectCurrency
                            currencies={Object.keys(currentRates)}
                            currencyName={currency1Name}
                            setCurrencyName={setCurrency1Name}
                            resetMessageBox={resetMessageBox}
                        />
                        na
                        <SelectCurrency
                            currencies={Object.keys(currentRates)}
                            currencyName={currency2Name}
                            setCurrencyName={setCurrency2Name}
                            resetMessageBox={resetMessageBox}
                        />

                    </FormRow>
                    <FormRow>
                        <label>
                            Kwota: <FormField
                                type="number"
                                value={amount}
                                onChange={onAmountChange}
                            /> {currency1Name}
                        </label>
                    </FormRow>
                </>
                : <StateContainer error={error}/>
            }
            <Button>Przelicz!</Button>
            <UpdateDateInfo updateRatesDate={updateRatesDate} />
        </StyledForm>
    );
};

export default Form;