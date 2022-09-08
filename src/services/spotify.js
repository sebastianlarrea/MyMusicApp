import { API_URL, HEADERS } from 'constants/api-constants'
import axios from 'axios'

axios.interceptors.request.use(request => {
    const expireDate = localStorage.getItem('EXPIRE_DATE')
    const tokenIsExpired = Date.now() > expireDate
    if (tokenIsExpired) {
        localStorage.removeItem('ACCESS_TOKEN')
        window.location.replace('')
    } else return request
})

const spotifyService = {
    getTrackAlbumOrUserData: (path = '') => {
        return axios.get(`${API_URL}${path}`, HEADERS)
    },

    deleteTrack: id => {
        return axios.delete(`${API_URL}tracks?ids=${id}`, HEADERS)
    },

    addTrack: id => {
        return axios.put(`${API_URL}tracks?ids=${id}`, {}, HEADERS)
    }
}

export default spotifyService
