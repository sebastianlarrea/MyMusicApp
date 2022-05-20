import React, { useState } from 'react'

import { ReactComponent as MusicIcon } from '../../../assets/icons/music-solid.svg'
import { ReactComponent as MenuBarIcon } from '../../../assets/icons/bars-solid.svg'
import { ReactComponent as XMarkIcon } from '../../../assets/icons/xmark-solid.svg'
import { ReactComponent as LogoutIcon } from '../../../assets/icons/right-from-bracket-solid.svg'

import stringConstans from '../../../constants/string-constants'

import MenuNav from '../../molecules/menu-nav/menu-nav'

import './header.scss'

const Header = ({ userName }) => {
    const [activeMenu, setactiveMenu] = useState(false)

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

    const toggleMenu = () => {
        activeMenu ? setactiveMenu(false) : setactiveMenu(true)
    }

    return (
        <>
            <header className="main-header">
                <MusicIcon className="main-header__logo" />
                <MenuNav menuOptions={menuOptions} />
                {!activeMenu && (
                    <h3 className="main-header__user-name">{userName}</h3>
                )}
                <LogoutIcon className="main-header__logout" onClick={Logout} />
                <MenuBarIcon
                    onClick={toggleMenu}
                    className="main-header__menu-bar"
                />
            </header>

            {activeMenu && (
                <aside className="menu-column">
                    <XMarkIcon
                        onClick={toggleMenu}
                        className="menu-column__close-menu"
                    />
                    <LogoutIcon className="menu-column__logout" onClick={Logout} />
                    <h3 className="menu-column__user-name">{userName}</h3>
                    <nav className="menu-column__nav">
                        <MenuNav isColumn={true} menuOptions={menuOptions} />
                    </nav>
                    
                </aside>
            )}
        </>
    )
}

export default Header
