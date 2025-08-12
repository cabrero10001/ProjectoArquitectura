import React, {createContext, useContext, useState} from 'react'

const UserContext = createContext();

export const ContextUser = ({children}) => {
    const [user, setUser] = useState({})

    const [logueado, setLogueado] = useState(false);

    return (
    <UserContext.Provider value={{ user, setUser, logueado, setLogueado}}>
        {children}
    </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext debe ser usado dentro de un ContextUser");
    }
    return context;
}