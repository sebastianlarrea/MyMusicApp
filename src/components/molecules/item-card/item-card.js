import React, { useEffect, useState } from 'react'
import { ReactComponent as HeartLikeIcon } from '../../../assets/icons/heart-liked.svg'
import './item-card.scss'

const ItemCard = ({ cardItem, type, isLiked }) => {
    const [classLikeIcon, setClassLikeIcon] = useState('card__like-icon')
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
    useEffect(() => {
        isLiked || isLiked === undefined
            ? setClassLikeIcon('card__like-icon card__like-icon--active')
            : setClassLikeIcon('card__like-icon')
    }, [isLiked])
    return (
        <section className="card__info">
            <section class="card__image-box">
                <img className="card__image" src={imageUrl} alt={name} />
            </section>
            <section className="card__name-box">
                <p className="card__name">{name}</p>
                <p className="card__artists">{artists}</p>
            </section>
            {type === 'track' ? (
                <section className="card__like-box">
                    <HeartLikeIcon className={classLikeIcon} />
                </section>
            ) : (
                <section className="card__songs-count">
                    <p>{cardItem?.[type]?.tracks?.items.length} Songs</p>
                </section>
            )}
        </section>
    )
}

export default ItemCard
