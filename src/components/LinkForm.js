import React, {useState} from 'react'


const LinkForm = ({ link, createLink, editLink, history }) => {

    const [title, setTitle] = useState( link ? link.title : '' )
    const [href, setHref] = useState(link ? link.href : '' )

    const handleSubmit = e => {
        e.preventDefault()
        if (editLink) {
            return editLink(link.id, title, href)
        } 
        createLink(title, href)
        setTitle('')
        setHref('')
    }

    return (
        <div className='form-container main container'>
            {history.location.pathname === `/create` ? <h2 className='title'>Create Link</h2> : <h2 className='title'>Edit Link</h2>}
            <form className='form-flex' onSubmit={handleSubmit}>
                <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}/>
                <input type='text' placeholder='Link' value={href} onChange={e => setHref(e.target.value)}/>
                <button className='log-button'>Save</button>
            </form>
        </div>
    )
}

export default LinkForm