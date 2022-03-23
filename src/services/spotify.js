import axios from 'axios'
import {API_URL, HEADERS} from '../constants/api-constants'

export const getSpotifyData = path => {
    return axios.get(`${API_URL}${path}`, HEADERS)
}
