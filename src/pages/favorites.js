import React from 'react'
import ListTemplate from '../components/templates/list-template/list-template'

const Favorites = () => {

    const user = localStorage.getItem('USER_NAME')
    return <ListTemplate user={user} />

}
export default Favorites