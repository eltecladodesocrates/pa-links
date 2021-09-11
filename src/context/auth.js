import React, {useEffect, useReducer, useState} from 'react'
import { userReducer } from '../reducer/user'
import { startGetUser } from '../actions/user'

export const AuthContext = React.createContext()

const AuthContextProvider = ({ children }) => {
    const [user, userDispatch] =  useReducer(userReducer, {})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        !user.email && startGetUser(userDispatch)
        !user.email && setLoading(false)
    }, [])

    return (
        <AuthContext.Provider value={{user, userDispatch, loading}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider