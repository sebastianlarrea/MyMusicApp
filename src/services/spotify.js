const axios = require('axios')

const API_URL = 'https://api.spotify.com/v1/'
const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN')

const HEADERS = {
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
    }
}

export const getSpotifyData = path => {
    return axios.get(`${API_URL}${path}`, HEADERS)
}
