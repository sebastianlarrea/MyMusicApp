import React, { useEffect, useState } from 'react'
import { getSpotifyData } from '../services/spotify'
import ListTemplate from '../components/templates/list-template/list-template'

const Albums = () => {
    const [yourAlbums, setYourAlbums] = useState([])
    const user = localStorage.getItem('USER_NAME')
    useEffect(() => {
        getFavoriteSongs('albums?limit=50')
    }, [])
    const getFavoriteSongs = path => {
        getSpotifyData(path).then(response => {
            setYourAlbums(response?.data?.items)
        })
    }

    return (
        <ListTemplate
            user={user}
            data={yourAlbums}
            title="Your Albums"
            type="album"
        />
    )
}
export default Albums
