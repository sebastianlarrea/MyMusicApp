const CLIENT_ID = 'a1e00db798f645b9bd52e97906056f1e'
const SCOPES = [
    'user-read-private',
    'user-read-email',
    'playlist-read-private',
    'playlist-modify-public',
    'user-library-read',
    'user-library-modify',
    'user-read-recently-played'
]
const REDIRECT_URI = 'http://localhost:3000/home'

const LOGIN_URL = `https://accounts.spotify.com/es-ES/authorize?client_id=${CLIENT_ID}&scope=${SCOPES}&redirect_uri=${REDIRECT_URI}&response_type=token&show_dialog=true`

const DATA_LIMIT = 50
const RECENTLY_PLAYED_URL = `player/recently-played?limit=${DATA_LIMIT}`
const SONG_LIKEDS_URL = 'tracks/contains?ids='
const ALBUMS_URL = `albums?limit=${DATA_LIMIT}`
const FAVS_URL = `tracks?limit=${DATA_LIMIT}`

const spotifyConstants = {
    LOGIN_URL,
    RECENTLY_PLAYED_URL,
    SONG_LIKEDS_URL,
    ALBUMS_URL,
    FAVS_URL
}

export default spotifyConstants
