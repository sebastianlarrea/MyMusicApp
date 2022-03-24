import React from 'react'
import { ReactComponent as MusicIcon } from '../../../assets/icons/music-solid.svg'
import { ReactComponent as MenuBar } from '../../../assets/icons/bars-solid.svg'
import { ReactComponent as LogoutIcon } from '../../../assets/icons/right-from-bracket-solid.svg'
import MenuNav from '../../molecules/menu-nav/menu-nav'
import './header.scss'

const Header = ({userName}) => {

    const menuOptions = [
        {
            text: 'Home',
            href: '/home'
        },
        {
            text: 'Favs',
            href: '/favs'
        },
        {
            text: 'Albums',
            href: '/albums'
        }
    ]
    
    const Logout = () => {
        localStorage.removeItem('ACCESS_TOKEN')
        localStorage.removeItem('USER_NAME')
        window.location.replace('')
    }

    return (
        <header className="main-header">
            <MusicIcon className="main-header__logo"/>
            <MenuNav menuOptions={menuOptions}/>
            <h3 className="main-header__user-name">{userName}</h3>
            <LogoutIcon className="main-header__logout" onClick={Logout}/>
            <MenuBar className="main-header__menu-bar"/>
        </header>
    )
}

export default Header
