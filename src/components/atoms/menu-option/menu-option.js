import React from 'react'
import './menu-option.scss'

const MenuOption = ({optionText, optionHref, isSelected}) => {

    const menuClass = `menu-option${isSelected ? ' menu-option--select' : ''}`

    return (
        <a className={menuClass} href={optionHref}>{optionText}</a>
    )
}

export default MenuOption
