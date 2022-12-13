import { useState, useEffect } from 'react';

type UseLocalStorageParams<State> = {
    /** Key that is used for storing in localStorage. */
    key: string;
    /** Value used if there is no content in localStorage. */
    fallbackValue: State;
    /** Callback that treats localStorage incoming value */
    getItemCallback: (value: string) => State;
    /** Callback that transform state value to string.
     * It executes every time a item is stored in localStorage. */
    setItemCallback: (value: State) => string;
};

/**
 * Works like a useState hook but the data stored is also stored on localStorage.
 * This hook also looks if there is already stored a value.
 * @returns Variable and setter, same to useState.
 */
export function useLocalStorageState<State>({
    key,
    fallbackValue,
    getItemCallback,
    setItemCallback,
}: UseLocalStorageParams<State>) {
    const [value, setValue] = useState<State>(fallbackValue);
    useEffect(() => {
        const stored = localStorage.getItem(key);
        setValue(stored ? getItemCallback(stored) : fallbackValue);
    }, [fallbackValue, key]);

    useEffect(() => {
        if (value !== fallbackValue) localStorage.setItem(key, setItemCallback(value));
    }, [fallbackValue, key, value]);

    return [value, setValue] as const;
}
