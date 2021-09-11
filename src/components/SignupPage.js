import React, {useState, useContext} from 'react'
import { LinksContext } from '../context/links'
import { startSignUpUser } from '../actions/user'
import { startGetLinks, startPopulateDefault } from '../actions/links'
import { initLinks } from '../init-links/initLinks'
import { AuthContext } from '../context/auth'


const SignupPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [error, setError] = useState('')
    const {user, userDispatch} = useContext(AuthContext)

    const handleSignup = async e => {
        e.preventDefault()
        if(password !== rePassword) {
            return setError('Passwords do not match')
        }
        try {
            startSignUpUser(userDispatch, email, password)
            setError('')

        } catch (e) {
            console.log(e)
            return setError('unable to sign up')
        }
    }

    return (
        <div className='container form-container main'>
            <h1 className='title'>Sign Up</h1>
            <h3>{error}</h3>
            <form className='form-flex' onSubmit={handleSignup}>
                <input type='email' placeholder='email' value={email} onChange={ e => setEmail(e.target.value)}/>
                <input type='password' placeholder='password' value={password} onChange={ e => setPassword(e.target.value)}/>
                <input type='password' placeholder='re-password' value={rePassword} onChange={ e => setRePassword(e.target.value)}/>
                <button className='log-button'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignupPage
