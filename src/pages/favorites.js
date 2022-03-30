import React, { useState, useEffect } from 'react'
import spotifyService from '../services/spotify'
import spotifyConstants from '../constants/spotify-url'
import stringConstans from '../constants/string-constants'
import ListTemplate from '../components/templates/list-template/list-template'

const Favorites = () => {
    const [favoriteSongs, setFavoriteSongs] = useState(null)
    const user = localStorage.getItem('USER_NAME')

    useEffect(() => {
        getFavoriteSongs(spotifyConstants.FAVS_URL)
    }, [])

    const getFavoriteSongs = path => {
        spotifyService.getData(path).then(response => {
            setFavoriteSongs(response?.data?.items)
        })
    }

    return (
        <ListTemplate
            user={user}
            data={favoriteSongs}
            title={stringConstans.FAVS_TITLE}
            type={stringConstans.TRACK_TYPE}
        />
    )
}
export default Favorites
