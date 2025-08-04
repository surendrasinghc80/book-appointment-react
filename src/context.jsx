import { createContext, useContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [user, setuser] = useState()
    const [token, settoken] = useState('')

    return (
        <>
            <Context.Provider value={{ user, setuser, token, settoken }}>{children}</Context.Provider>
        </>
    )
}

export const ContextState = () => {
    return useContext(Context);
}

export default ContextProvider;