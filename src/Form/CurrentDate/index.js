import useCurrentDate from './useCurrentDate.js';
import { Container } from './styled.js'

const CurrentDate = () => {
    const date = useCurrentDate();

    return (
        <Container>
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
        </Container>
    );
};

export default CurrentDate;