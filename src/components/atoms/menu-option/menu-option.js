import React from 'react'
import './menu-option.scss'

const MenuOption = ({ optionText, optionHref, isSelected }) => {
    const menuClass = isSelected
        ? 'menu-option menu-option--selected'
        : 'menu-option'

    return (
        <a className={menuClass} href={optionHref}>
            {optionText}
        </a>
    )
}

export default MenuOption
