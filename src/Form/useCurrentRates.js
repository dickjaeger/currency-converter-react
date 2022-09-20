import { useState, useEffect } from 'react';

export const useCurrentRates = () => {
    const [currentRates, setCurrentRates] = useState({});
    const [ratesUpdateDate, setRatesUpdateDate] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,CZK,PLN,GBP")
            .then(response => response.json())
            .then(result => {
                if (result.error) {
                    throw new Error();
                };
                setCurrentRates(result.rates);
                setRatesUpdateDate(result.date);
                setTimeout(() => setLoading(false), 1000);
            })
            .catch(() => {
                setError(
                    "Nie udało się pobrać kursów walut. Sprawdź połączenie z internetem i spróbuj ponownie!"
                    );
                    setTimeout(() => setLoading(false), 1000);
            });
    }, []);

    return [currentRates, ratesUpdateDate, loading, error];
}