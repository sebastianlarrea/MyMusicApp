import React from 'react'
import { ReactComponent as MusicIcon } from 'assets/icons/music-solid.svg'
import LoginButton from 'components/atoms/login-button/login-button'
import './login-template.scss'

const LoginTemplate = ({ title }) => {
    return (
        <main className="login">
            <h1 className="login__title">{title}</h1>
            <figure className="login__logo">
                <MusicIcon className="login__logo-icon" />
            </figure>
            <LoginButton />
        </main>
    )
}

export default LoginTemplate
