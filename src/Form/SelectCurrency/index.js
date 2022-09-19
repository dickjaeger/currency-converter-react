import { FormField } from '../styled.js';

const SelectCurrency = ({ currencies, currencyName, setCurrencyName, resetMessageBox }) => (
    <FormField
        as="select"
        value={currencyName}
        onChange={({ target }) => {
            setCurrencyName(target.value);
            resetMessageBox();
        }}
    >
        {currencies.map(({ name }) => (
            <option key={name}>{name}</option>
        ))}
    </FormField>
)

export default SelectCurrency;