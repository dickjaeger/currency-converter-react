import useCurrentDate from './useCurrentDate.js';
import { Div } from './styled.js'

const CurrentDate = () => {
    const date = useCurrentDate();

    return (
        <Div>
            Dzisiaj jest {date.toLocaleString('pl-PL', {
                weekday: "long",
                day: "numeric",
                month: "long",
            })}
            {", "}
            {date.toLocaleString('pl-PL', {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
            })}
        </Div>
    );
};

export default CurrentDate;