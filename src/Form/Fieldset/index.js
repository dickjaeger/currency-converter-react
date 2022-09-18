const Fieldset = ({title, body}) => (
    <fieldset className="form__fieldset">
        <legend className="form__legend">{title}</legend>
        {body}
    </fieldset>
);

export default Fieldset;