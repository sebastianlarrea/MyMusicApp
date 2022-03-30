import React, { useEffect, useState } from 'react'
import spotifyService from '../services/spotify'
import stringConstans from '../constants/string-constants'
import spotifyConstants from '../constants/spotify-url'
import ListTemplate from '../components/templates/list-template/list-template'

const Home = () => {
    const [userName, setuserName] = useState(localStorage.getItem('USER_NAME'))
    const [recentlyPlayed, setRecentlyPlayed] = useState(null)
    const [likedSongs, setLikedSongs] = useState(null)

    useEffect(() => {
        if (window.location.hash) setAccessToken()
        if (!userName) getUserName()
        if (!recentlyPlayed) {
            getRecentlyPlayed(spotifyConstants.RECENTLY_PLAYED_URL)
        }
        const likedSongs =
            recentlyPlayed &&
            recentlyPlayed.map(song => {
                return song.track.id
            })
        spotifyService
            .getData(`${spotifyConstants.SONG_LIKEDS_URL}${likedSongs}`)
            .then(response => {
                setLikedSongs(response?.data)
            })
    }, [userName, recentlyPlayed])

    const setAccessToken = () => {
        const accessToken = window.location.hash.split('=')[1].split('&')[0]
        const expireTimestamp =
            Number(Date.now()) +
            Number(window.location.hash.split('=').pop()) * 1000
        localStorage.setItem('ACCESS_TOKEN', accessToken)
        localStorage.setItem('EXPIRE_DATE', expireTimestamp)
        window.location.replace('')
    }

    const getUserName = () => {
        spotifyService.getData().then(response => {
            const user = response?.data?.display_name.toUpperCase()
            setuserName(user)
            localStorage.setItem('USER_NAME', user)
        })
    }

    const getRecentlyPlayed = path => {
        spotifyService.getData(path).then(response => {
            setRecentlyPlayed(response?.data?.items)
        })
    }

    return (
        recentlyPlayed && (
            <ListTemplate
                user={userName}
                data={recentlyPlayed}
                likedSongs={likedSongs}
                title={stringConstans.HOME_TITLE}
                type={stringConstans.TRACK_TYPE}
            />
        )
    )
}
export default Home
