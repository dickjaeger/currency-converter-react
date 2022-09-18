const SelectCurrency = ({ currencies, currencyName, setCurrency, resetMessageBox }) => (
    <select
        className="form__field"
        value={currencyName}
        onChange={({ target }) => {
            setCurrency(target.value);
            resetMessageBox();
        }}
    >
        {currencies.map(({ name }) => (
            <option key={name}>{name}</option>
        ))}
    </select>
)

export default SelectCurrency;