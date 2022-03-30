import React from 'react'
import stringConstans from '../../../constants/string-constants'
import './menu-option.scss'

const MenuOption = ({ optionText, optionHref, isSelected }) => {
    const menuClass = `${stringConstans.MENU_CLASS} ${
        isSelected ? stringConstans.MENU_SELECTED_CLASS : ''
    }`

    return (
        <a className={menuClass} href={optionHref}>
            {optionText}
        </a>
    )
}

export default MenuOption
