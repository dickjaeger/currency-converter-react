import useCurrentDate from './useCurrentDate.js';
import './style.css';

const CurrentDate = () => {
    const date = useCurrentDate();
    
    return (
        <div className="date">
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
        </div>
    );
};

export default CurrentDate;