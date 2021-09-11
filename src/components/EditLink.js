import React, {useContext} from 'react'
import LinkForm from './LinkForm'

import { LinksContext } from '../context/links'
import { AuthContext } from '../context/auth'
import { startEditLinks, startDeleteLink } from '../actions/links'

const EditLink = ({ match, history }) => {

    const {links, linksDispatch} = useContext(LinksContext)
    const {user} = useContext(AuthContext)

    const editLink = (id, title, href) => {
        console.log('Link edited')
        startEditLinks(linksDispatch, id, {title, href}, user.uid)
        history.push('/create')
    }

    return (
        <div>
            {links.map( link => {
                if (match.params.id === link.id) {
                    return (
                        <LinkForm 
                            key={link.id} 
                            link={link}
                            editLink={editLink}
                            history={history}
                    />)
                }
            })}
        </div>

    )
}

export default EditLink
