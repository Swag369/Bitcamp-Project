import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const ContextProvider = (props) => {
    const [loggedIn, setIsLoggedIn] = useState(false);

    const login = (username, password) => {
        if (username === "Bitcamp" && password === "Bitcamp") {
            setIsLoggedIn(true);
        }
    }

    const logout = () => {
        setIsLoggedIn(false);
    }

    return (
        <UserContext.Provider value={{loggedIn, login, logout}}>
            {props.children}
        </UserContext.Provider>
    )
}