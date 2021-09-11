import React, {useContext} from 'react'

import Link from "./Link"
import { LinksContext } from '../context/links'

const EditPage = ({ history }) => {

    const {links} = useContext(LinksContext)

    return (
        <section className='container main' id='edit'>
            {links.map( link => <Link 
                key={link.id}
                link={link}
                boxNumber={(links.indexOf(link)) + 1}
                history={history}
            />)}
        </section>
    )
}

export default EditPage
