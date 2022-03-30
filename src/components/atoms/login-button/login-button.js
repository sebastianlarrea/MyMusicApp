import React from 'react'
import spotifyConstants from '../../../constants/spotify-url'
import { ReactComponent as SpotifyIcon } from '../../../assets/icons/spotify-brands.svg'
import './login-button.scss'

const LoginButton = () => {
    return (
        <a className="login-button" href={spotifyConstants.LOGIN_URL}>
            <SpotifyIcon className="login-button__icon" />
            <label className="login-button__text">INICIAR SESION</label>
        </a>
    )
}

export default LoginButton
