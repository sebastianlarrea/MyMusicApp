import axios from 'axios'
import {API_URL, HEADERS} from '../constants/api-constants'

export const getSpotifyData = path => {
    return axios.get(`${API_URL}${path}`, HEADERS)
}

export const deleteSpotifyTrack = id => {
    return axios.delete(`${API_URL}tracks?ids=${id}`, HEADERS)
}

export const addSpotifyTrack = id => {
    return axios.put(`${API_URL}tracks?ids=${id}`, {}, HEADERS)
}