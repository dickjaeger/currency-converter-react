import { useState, useEffect } from 'react';

export const useCurrentRates = () => {
    const [RatesState, setCurrentRates] = useState({
        rates: {},
        date: "",
        loading: true,
        error: "",
    });


    useEffect((RatesState) => {
        fetch("https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,CZK,PLN,GBP")
            .then(response => response.json())
            .then(result => {
                if (result.error) {
                    throw new Error();
                };

                setTimeout(() => setCurrentRates({
                    rates: result.rates,
                    date: result.date,
                    loading: false,
                }), 1000);
            })
            .catch(() => {
                setTimeout(() => setCurrentRates({
                    ...RatesState,
                    error: "Nie udało się pobrać kursów walut. Sprawdź połączenie z internetem i spróbuj ponownie!",
                    loading: false,
                }), 1000);
            });
    }, []);

    return [RatesState];
}