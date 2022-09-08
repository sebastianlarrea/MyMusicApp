import React, { useEffect, useState } from 'react'
import spotifyService from 'services/spotify'
import spotifyConstants from 'constants/spotify-url'
import stringConstans from 'constants/string-constants'
import ListTemplate from 'components/templates/list-template/list-template'

const Albums = () => {
    const [yourAlbums, setYourAlbums] = useState(null)
    const user = localStorage.getItem('USER_NAME')
    useEffect(() => {
        getFavoriteSongs(spotifyConstants.ALBUMS_URL)
    }, [])
    const getFavoriteSongs = path => {
        spotifyService.getTrackAlbumOrUserData(path).then(response => {
            setYourAlbums(response?.data?.items)
        })
    }

    return (
        <ListTemplate
            user={user}
            data={yourAlbums}
            title={stringConstans.ALBUM_TITLE}
            type={stringConstans.ALBUM_TYPE}
        />
    )
}
export default Albums
