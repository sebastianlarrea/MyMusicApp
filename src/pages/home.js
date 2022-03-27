import React, { useEffect, useState } from 'react'
import { getSpotifyData } from '../services/spotify'
import ListTemplate from '../components/templates/list-template/list-template'

const Home = () => {
    const [userName, setuserName] = useState(localStorage.getItem('USER_NAME'))
    const [recentlyPlayed, setRecentlyPlayed] = useState([])
    const [likedSongs, setLikedSongs] = useState([])

    useEffect(() => {
        if (window.location.hash) setAccessToken()
        if (!userName) getUserName('')
        getRecentlyPlayed('player/recently-played?limit=50')
    }, [userName])

    useEffect(() => {
        const likedSongs = recentlyPlayed.map(song => {
            return song.track.id
        })
        getSpotifyData(`tracks/contains?ids=${likedSongs}`).then(response => {
            setLikedSongs(response?.data)
        })
    }, [recentlyPlayed])

    const setAccessToken = () => {
        const accessToken = window.location.hash.split('=')[1].split('&')[0]
        const expireTimestamp =
            Number(Date.now()) +
            Number(window.location.hash.split('=').pop()) * 1000
        localStorage.setItem('ACCESS_TOKEN', accessToken)
        localStorage.setItem('EXPIRE_DATE', expireTimestamp)
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
            likedSongs={likedSongs}
            title="Recently Played"
            type="track"
        />
    )
}
export default Home
