import React, { useContext } from 'react'
import { startLogOutUser } from '../actions/user'
import { AuthContext } from '../context/auth'

const Logout = () => {

    const {user, userDispatch} = useContext(AuthContext)

    const handleLogOut = () => {
        startLogOutUser(userDispatch)
    }

    return (
        <form onSubmit={handleLogOut}>
            <button className='log-button'>Log Out</button>
        </form>
    )
}

export default Logout
