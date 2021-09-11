import React, { useContext } from 'react'
import { startLogOutUser } from '../actions/user'
import { AuthContext } from '../context/auth'
import { useHistory } from 'react-router-dom'

const Logout = () => {

    const {user, userDispatch} = useContext(AuthContext)
    const history = useHistory()

    const handleLogOut = () => {
        startLogOutUser(userDispatch)
        history.push('/')
    }

    return (
        <form onSubmit={handleLogOut}>
            <button className='log-button'>Log Out</button>
        </form>
    )
}

export default Logout
