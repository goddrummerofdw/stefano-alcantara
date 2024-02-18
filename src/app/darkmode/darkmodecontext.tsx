'use client'
import React from 'react';
interface PropType {
    children: any
}

// Create a context
interface contextType {
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}
const DarkModeContext = React.createContext<contextType>({
    darkMode: false,
    setDarkMode: () => { }
});

// Create a provider component
export function DarkModeProvider({ children }: PropType) {
    const [darkMode, setDarkMode] = React.useState(false);

    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

// Custom hook to use the context

export function useDarkMode() {
    return React.useContext(DarkModeContext);
}
