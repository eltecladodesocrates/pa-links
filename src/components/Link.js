import React, {useState, useContext} from 'react'
import { NavLink } from 'react-router-dom'

import LinkForm from './LinkForm'
import { startDeleteLink } from '../actions/links'
import { LinksContext } from '../context/links'
import { AuthContext } from '../context/auth'


const Link = ({ link, boxNumber, history }) => {

    const [edit, setEdit] = useState(false)
    const {linksDispatch} = useContext(LinksContext)
    const {user} = useContext(AuthContext)


    const deleteLink = () => {
        startDeleteLink(linksDispatch, {id: link.id}, user.uid)
        history.push('/edit')
    }

    return (
        <>
        {history.location.pathname === '/' ? 
            <a className={`box box-${boxNumber}`} href={link.href} target='_blank'>{link.title}</a> :
            !edit &&
                <div className='edit-container'>
                    <span className='link-title'>{link.title}</span>
                    <NavLink className='edit-button button' to={`/edit/${link.id}`}>Edit</NavLink>
                    <button className='remove-button button' onClick={deleteLink}>Remove</button>
                </div>
        }
        </>
    )
}

export default Link