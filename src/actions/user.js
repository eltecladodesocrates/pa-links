import { auth, database } from "../firebase/firebase"
import { initLinks } from "../init-links/initLinks"

const getUser = (uid, email) => ({
    type: 'GET_USER',
    user: {
        uid,
        email
    }
})

export const startGetUser = (dispatch) => {
    return auth.onAuthStateChanged( user => {
        dispatch(getUser(user.uid, user.email))
    })

}

export const startSignUpUser = (dispatch, email, password) => {
    return auth.createUserWithEmailAndPassword(email, password).then( res => {
        dispatch(getUser(res.user.uid, email))
        initLinks.map( link => {
            database.ref(`users/${res.user.uid}/links`).push(link)
        })
    })
}

export const startLogInUser = (dispatch, email, password) => {
    return auth.signInWithEmailAndPassword(email, password).then( res => {
        dispatch(getUser(res.user.uid, email))
    })
}

const logOutUser = () => ({
    type: 'LOG_OUT'
})

export const startLogOutUser = (dispatch) => {
    return auth.signOut().then(() => {
        dispatch(logOutUser())
    })
}


