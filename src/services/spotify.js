import axios from 'axios'
import { API_URL, HEADERS } from '../constants/api-constants'

axios.interceptors.request.use(request => {
    const expireDate = localStorage.getItem('EXPIRE_DATE')
    const tokenIsExpired = Date.now() > expireDate
    if (tokenIsExpired) {
        localStorage.removeItem('ACCESS_TOKEN')
        window.location.replace('')
    } else return request
})

const spotifyService = {
    getData: (path = '') => {
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
