import * as React from 'react'

export const uiContext = React.createContext()

export const UIProvider = ({children}) => {
    const [isMenuHidden, setIsMenuHidden] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuHidden(!isMenuHidden)
    }

    return (
        <uiContext.Provider value={{
            isMenuHidden,
            toggleMenu
        }}>
            {children}
        </uiContext.Provider>
    )
}
