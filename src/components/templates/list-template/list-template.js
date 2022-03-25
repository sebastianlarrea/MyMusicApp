import React from 'react'
import ItemCard from '../../molecules/item-card/item-card'
import Header from '../../organisms/header/header'
import './list-template.scss'

const ListTemplate = props => {
    const { user, data, likedSongs, title, type } = props
    return (
        <div>
            <Header userName={user} />
            <h1 className="page-title">{title}</h1>
            <section className="card">
                {data &&
                    data.map((cardItem, index) => {
                        return (
                            <ItemCard
                                key={index}
                                cardItem={cardItem}
                                isLiked={likedSongs && likedSongs[index]}
                                type={type}
                            />
                        )
                    })}
            </section>
        </div>
    )
}

export default ListTemplate
