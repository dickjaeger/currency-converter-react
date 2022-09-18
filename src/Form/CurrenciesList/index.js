const CurrenciesList = ({ currencies, setCurrencies, resetMessageBox }) => {
    const onChange = (name, newValue) => {
        setCurrencies(currencies.map(currency => {
            if (currency.name === name) {
                return {
                    ...currency,
                    value: newValue,
                };
            };

            return currency;
        }));
        resetMessageBox();
    };

    return (
        <ul className="form__list">
            {currencies.map(currency => {
                if (currency.name === "PLN") {
                    return;
                };

                return (
                    <li key={currency.name} className="form__listItem">
                        <label>
                            1 {currency.name} =
                            <input
                                className="form__field"
                                type="number"
                                value={currency.value}
                                onChange={({ target }) => {
                                    onChange(currency.name, target.value);
                                }}
                                step="0.01"
                                min="0"
                            />
                            PLN
                        </label>
                    </li>
                );
            })}
        </ul>
    );
};

export default CurrenciesList;