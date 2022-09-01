import { useContext, createContext, useState, useEffect } from 'react'

export const AppContext = createContext()

export function AppContextProvider({ children }) {
    const [userData, setUserData] = useState()

    useEffect(() => {
        setUserData({ name: 'John', surname: 'Doe' })
    }, [])

    return (
        <AppContext.Provider value={{ userData, setUserData }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}
