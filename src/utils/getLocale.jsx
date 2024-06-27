import { useState, useEffect, useMemo } from "react";

export default function usePersistState(initial_value, id) {
    const _initial_value = useMemo(() => {
        const local_storage_value_str = localStorage.getItem('locale:' + id);
        // If there is a value stored in localStorage, use that
        if(local_storage_value_str) {
            return JSON.parse(local_storage_value_str);
        } 
        // Otherwise use initial_value that was passed to the function
        return initial_value;
    }, []);

    const [locale, setLocale] = useState(_initial_value);

    useEffect(() => {
        const state_str = JSON.stringify(locale); // Stringified state
        localStorage.setItem('locale:' + id, state_str) // Set stringified state as item in localStorage
    }, [locale]);
    
    return [locale, setLocale];

}
