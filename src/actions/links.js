import {database} from '../firebase/firebase'

// Actions

// Save Initial Links in DB
export const populateDefault = (link) => ({
    type: 'POPULATE_DEFAULT',
    link
})

export const startPopulateDefault = (dispatch, links, uid) => {
    links.map( link => {
        database.ref(`users/${uid}/links`).push(link).
        then(() => {
            dispatch(createLink(link.title, link.href))
        })
    })
}

// Create Link
export const createLink = ({title, href}) => ({
    type: 'CREATE_LINK',
    link: {
        title,
        href
    }
})

export const startCreateLink = (dispatch, link, uid) => {
    database.ref(`users/${uid}/links`).push(link).
    then(() => {
        console.log('From start create link')
        dispatch(createLink(link))
    }).
    catch((e) => console.log('Error', e))
  }

// Get Links
export const getLinks = links => ({
    type: 'GET_LINKS',
    links
})

export const startGetLinks = (dispatch, uid) => {

    database.ref(`users/${uid}/links`).once('value').then( snapshot => {
        const links = []
        snapshot.forEach( childSnapshot => {
            links.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        })
        dispatch(getLinks(links))
    })

}

// Edit Links
export const editLinks = (id, updates) => ({
    type: 'EDIT_LINKS',
    id,
    updates
})

export const startEditLinks = (dispatch, id, updates, uid) => {
    database.ref(`users/${uid}/links/${id}`).update(updates).then(() => {
        dispatch(editLinks(id, updates))
    })
}

// Delete Link
export const deleteLink = ({id} = {}) => ({
    type:'DELETE_LINK',
    id
})

export const startDeleteLink = (dispatch, {id}, uid) => {
    database.ref(`users/${uid}/links/${id}`).remove().then(() => {
        dispatch(deleteLink({id}))
    })
}

// export const removeExpense = ({ id } = {}) => ({
//     type: 'REMOVE_EXPENSE',
//     id
// })

// export const startRemoveExepense = ({ id } = {}) => {
//     return (dispatch) => {
//         return database.ref(`expenses/${id}`).remove().then(() => {
//             dispatch(removeExpense({ id }))
//         })
//     }
// }