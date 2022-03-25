import React from 'react'
import { ReactComponent as HeartLikeIcon } from '../../../assets/icons/heart-liked.svg'
import './item-card.scss'

const ItemCard = ({ data, type }) => {
    return (
        <section className="card">
            {data &&
                data.map((cardItem, index) => {
                    const imageUrl =
                        type === 'track'
                            ? cardItem?.track?.album?.images[2].url
                            : cardItem?.album?.images[2].url
                    const name = cardItem?.[type]?.name
                    const artists = cardItem?.[type]?.artists
                        .map(artist => {
                            return artist.name
                        })
                        .join(', ')

                    return (
                        <section className="card__info" key={index}>
                            <img
                                className="card__image"
                                src={imageUrl}
                                alt={name}
                            />
                            <section className="card__name-box">
                                <p className="card__name">{name}</p>
                                <p className="card__artists">{artists}</p>
                            </section>
                            {type === 'track' ? (
                                <section className="card__like-box">
                                    <HeartLikeIcon className="card__like-icon" />
                                </section>
                            ) : (
                                <section className="card__songs-count">
                                    <p>{cardItem?.[type]?.tracks?.items.length} Songs</p>
                                </section>
                            )}
                        </section>
                    )
                })}
        </section>
    )
}

export default ItemCard
