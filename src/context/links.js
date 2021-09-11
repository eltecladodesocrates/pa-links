import React, {useReducer, useEffect, useContext } from 'react'

import { linkReducer } from '../reducer/links'
import { startGetLinks } from '../actions/links'
import { AuthContext } from './auth'
import { initLinks } from '../init-links/initLinks'



export const LinksContext = React.createContext()

const initialState = []

const LinksContextComponent = ({children}) => { 

    const [links, linksDispatch] = useReducer(linkReducer, initLinks)
    const {user} = useContext(AuthContext)


    useEffect( () => {
        user.email && startGetLinks(linksDispatch, user.uid)
    }, [user, links])

    return (

        <LinksContext.Provider value={{links, linksDispatch }}>
            {children}
        </LinksContext.Provider>
    )
}

export default LinksContextComponent
