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

export const LOGIN_URL = `https://accounts.spotify.com/es-ES/authorize?client_id=${CLIENT_ID}&scope=${SCOPES}&redirect_uri=${REDIRECT_URI}&response_type=token&show_dialog=true`