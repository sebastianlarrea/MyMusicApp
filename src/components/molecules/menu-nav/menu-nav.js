import React from 'react'
import MenuOption from '../../atoms/menu-option/menu-option'

const MenuNav = ({menuOptions}) => {

    return (
        <nav className="menu-nav">
            {menuOptions.map(menuOption => {
                const currentPath = window.location.href.split('/')
                const isSelected = currentPath[currentPath.length - 1] === menuOption.href.slice(1)
                return <MenuOption optionText={menuOption.text} optionHref={menuOption.href} isSelected={isSelected}/>
            })}
        </nav>
    )
}

export default MenuNav
