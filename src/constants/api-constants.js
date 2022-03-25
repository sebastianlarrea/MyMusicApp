export const API_URL = 'https://api.spotify.com/v1/me/'

const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN')
export const HEADERS = {
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
    }
}