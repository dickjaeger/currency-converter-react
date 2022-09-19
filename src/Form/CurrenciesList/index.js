import { List, ListItem, FormField } from '../styled.js';

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
        <List>
            {currencies.map(currency => {
                if (currency.name === "PLN") {
                    return;
                };

                return (
                    <ListItem key={currency.name}>
                        <label>
                            1 {currency.name} =
                            <FormField
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
                    </ListItem>
                );
            })}
        </List>
    );
};

export default CurrenciesList;