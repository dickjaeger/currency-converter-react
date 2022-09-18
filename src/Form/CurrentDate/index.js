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
            {date.toLocaleString()}
        </div>
    );
};

export default CurrentDate;