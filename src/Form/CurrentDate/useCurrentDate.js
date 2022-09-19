import { useState, useEffect } from 'react';

const useCurrentDate = () => {
    const [date, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return date;
}

export default useCurrentDate;