import React, {useContext, useState} from "react"

import { startCreateLink } from "../actions/links"
import { LinksContext } from "../context/links"
import { AuthContext } from "../context/auth"
import LinkForm from "./LinkForm"


const CreateLink = ({history}) => {

    const {links, linksDispatch} = useContext(LinksContext)
    const {user} = useContext(AuthContext)
    const [error, setError] = useState('')

    const createLink = (title, href) => {
        if(links.length >= 31) {
            return setError('You have reached the limit of links')
        }
        startCreateLink(linksDispatch, {title, href}, user.uid)
        setError('')
        history.push('/')
    }

    return (
        <div className='container form-container'>
            {error !== '' && <p className='error-message'>{error}</p>}
            <LinkForm 
                createLink={createLink}
                history={history}
            />
        </div>
    )
}

export default CreateLink
