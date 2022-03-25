import React, { useEffect, useState } from 'react'
import { getSpotifyData } from '../services/spotify'
import ListTemplate from '../components/templates/list-template/list-template'

const Home = () => {
    const [userName, setuserName] = useState(localStorage.getItem('USER_NAME'))
    const [recentlyPlayed, setRecentlyPlayed] = useState([])

    useEffect(() => {
        if (window.location.hash) setAccessToken()
        if (!userName) getUserName('')
        getRecentlyPlayed('player/recently-played')
    }, [userName])

    const setAccessToken = () => {
        localStorage.setItem(
            'ACCESS_TOKEN',
            window.location.hash.split('=')[1].split('&')[0]
        )
        window.location.replace('')
    }
    const getUserName = path => {
        getSpotifyData(path).then(response => {
            const user = response?.data?.display_name.toUpperCase()
            setuserName(user)
            localStorage.setItem('USER_NAME', user)
        })
    }
    const getRecentlyPlayed = path => {
        getSpotifyData(path).then(response => {
            setRecentlyPlayed(response?.data?.items)
        })
    }

    return (
        <ListTemplate
            user={userName}
            data={recentlyPlayed}
            title="Recently Played"
            type="track"
        />
    )
}
export default Home
