import React from 'react'
import { ReactComponent as MusicIcon } from '../../../assets/icons/music-solid.svg'
import { ReactComponent as MenuBarIcon } from '../../../assets/icons/bars-solid.svg'
import { ReactComponent as LogoutIcon } from '../../../assets/icons/right-from-bracket-solid.svg'
import stringConstans from '../../../constants/string-constants'
import MenuNav from '../../molecules/menu-nav/menu-nav'
import './header.scss'

const Header = ({userName}) => {

    const menuOptions = [
        {
            text: stringConstans.HOME_NAV,
            href: stringConstans.HOME_PATH
        },
        {
            text: stringConstans.FAVS_NAV,
            href: stringConstans.FAVS_PATH
        },
        {
            text: stringConstans.ALBUM_NAV,
            href: stringConstans.ALBUM_PATH
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
            <MenuBarIcon className="main-header__menu-bar"/>
        </header>
    )
}

export default Header
