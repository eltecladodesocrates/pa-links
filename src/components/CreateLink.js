import React, {useContext} from "react"

import { startCreateLink } from "../actions/links"
import { LinksContext } from "../context/links"
import { AuthContext } from "../context/auth"
import Link from "./Link"
import LinkForm from "./LinkForm"


const CreateLink = ({history}) => {

    const {links, linksDispatch} = useContext(LinksContext)
    const {user} = useContext(AuthContext)

    const createLink = (title, href) => {
        startCreateLink(linksDispatch, {title, href}, user.uid)
        history.push('/dashboard')
    }

    return (
        <div className='container form-container'>
            <LinkForm 
                createLink={createLink}
                history={history}
            />
        </div>
    )
}

export default CreateLink
