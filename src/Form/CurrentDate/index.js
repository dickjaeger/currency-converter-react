import { useState, useEffect } from 'react';
import './style.css';

const CurrentDate = () => {
    const [date, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    });

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