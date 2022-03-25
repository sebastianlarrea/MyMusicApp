import React from 'react'
import ItemCard from '../../molecules/item-card/item-card';
import Header from '../../organisms/header/header'
import './list-template.scss'

const ListTemplate = props => {

    const {user, data, title, type} = props
    return (
        <div>
            <Header userName={user}/>
            <h1 className="page-title">{title}</h1>
            <ItemCard data={data} type={type} />
        </div>
    )
}

export default ListTemplate
