import React, { createContext, useState } from 'react';

const Context = createContext({
    darkMode: false,
    setDarkMode: (darkMode) => {},
});

export function ContextProvider(props) {
    const [darkMode, setDarkMode] = useState(false);

    function setDarkModeHandler() {
        setDarkMode(previousState => !previousState);
    }

    const context = {
        darkMode: darkMode,
        setDarkMode: setDarkModeHandler,
    };

    return (
        <Context.Provider value={context}>
            {props.children}
        </Context.Provider>
    )
}

export default Context;