// Reducer
export const linkReducer = (state, action) => {  
    switch (action.type) {
        case 'CREATE_LINK':
            return [
                ...state,
                {
                    ...action.link
                }
            ]
        case 'GET_LINKS':
            return action.links
        case 'EDIT_LINKS':
            return state.map( link => {
                if (link.id === action.id) {
                    return {
                        ...link,
                        ...action.updates
                    }
                } else {
                    return link
                }
            })
        case 'DELETE_LINK':
            return state.filter( link => link.id !== action.id)
      default:
        return state
  
    }
}