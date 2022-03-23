import React from 'react'
import ListTemplate from '../components/templates/list-template/list-template'

const Albums = () => {

    const user = localStorage.getItem('USER_NAME')
    return <ListTemplate user={user} />

}
export default Albums