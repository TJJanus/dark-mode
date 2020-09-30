import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue ] = useState(() => {

        const item = window.localStorage.getItem(key); // get from local storage by key

        return item ? JSON.parse(item) : initialValue; // parse the stored JSON

    });

    const setValue = value => {
        // Save State
        setStoredValue(value);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue]
}

