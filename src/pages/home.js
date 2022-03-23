import React, { useEffect, useState } from 'react'
import { getSpotifyData } from '../services/spotify'
import ListTemplate from '../components/templates/list-template/list-template'

const Home = () => {
    const [userName, setuserName] = useState(localStorage.getItem('USER_NAME'))

    useEffect(() => {
        setAccessToken()
        if(!localStorage.getItem('USER_NAME')) getUserName()
    }, [])
    const setAccessToken = () => {
        if (window.location.hash) {
            localStorage.setItem(
                'ACCESS_TOKEN',
                window.location.hash.split('=')[1].split('&')[0]
            )
            window.location.replace('')
        }
    }
    const getUserName = () => {
        getSpotifyData('me').then(response => {
            const user = response?.data?.display_name.toUpperCase()
            setuserName(user)
            localStorage.setItem('USER_NAME', user)
        })
    }

    return <ListTemplate user={userName} />
}
export default Home
