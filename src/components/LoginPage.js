import React, {useState, useContext} from 'react'
import { LinksContext } from '../context/links'
import { startLogInUser } from '../actions/user'
import Logout from './Logout'
import { AuthContext } from '../context/auth'


const LoginPage = ({ history }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, userDispatch} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        startLogInUser(userDispatch, email, password)
        setEmail('')
        setPassword('')
        history.push('/dashboard')
    }

    return (
        <div className='container form-container main'>
            <h1 className='title'>Login</h1>
            {!user.email ?             
            <form onSubmit={handleLogin} className='form-flex'>
                <input type='email' placeholder='email' value={email} onChange={ e => setEmail(e.target.value)}/>
                <input type='password' placeholder='password' value={password} onChange={ e => setPassword(e.target.value)}/>
                <button className='log-button'>Send</button>
            </form> :
            <Logout />} 
        </div>
    )
}

export default LoginPage
