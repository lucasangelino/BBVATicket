import * as React from 'react'
import { uiContext } from '../../context/uiContext'

export const useToogleMenu = () => {
    const { toggleMenu } = React.useContext(uiContext)
    React.useEffect(() => {
        toggleMenu()
    },[toggleMenu])
}