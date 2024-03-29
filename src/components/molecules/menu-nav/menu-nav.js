import React from 'react'
import MenuOption from 'components/atoms/menu-option/menu-option'
import './menu-nav.scss'

const MenuNav = ({ menuOptions, isColumn }) => {
    return (
        <nav className={isColumn ? 'menu-column-nav' : 'menu-nav'}>
            {menuOptions.map((menuOption, index) => {
                const currentPath = window.location.href.split('/')
                const isSelected =
                    currentPath[currentPath.length - 1] ===
                    menuOption.href.slice(1)
                return (
                    <MenuOption
                        key={index}
                        optionText={menuOption.text}
                        optionHref={menuOption.href}
                        isSelected={isSelected}
                    />
                )
            })}
        </nav>
    )
}

export default MenuNav
