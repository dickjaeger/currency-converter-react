const SelectCurrency = ({ currencies, currencyName, setCurrencyName, resetMessageBox }) => (
    <select
        className="form__field"
        value={currencyName}
        onChange={({ target }) => {
            setCurrencyName(target.value);
            resetMessageBox();
        }}
    >
        {currencies.map(({ name }) => (
            <option key={name}>{name}</option>
        ))}
    </select>
)

export default SelectCurrency;