import React, { useState, useEffect } from 'react'
import { getSpotifyData } from '../services/spotify'
import ListTemplate from '../components/templates/list-template/list-template'

const Favorites = () => {
    const [favoriteSongs, setFavoriteSongs] = useState([])
    const user = localStorage.getItem('USER_NAME')
    useEffect(() => {
        getFavoriteSongs('tracks?limit=50')
    }, [])
    const getFavoriteSongs = path => {
        getSpotifyData(path).then(response => {
            setFavoriteSongs(response?.data?.items)
        })
    }

    return (
        <ListTemplate
            user={user}
            data={favoriteSongs}
            title="Favorite Songs"
            type = "track"
        />
    )
}
export default Favorites
