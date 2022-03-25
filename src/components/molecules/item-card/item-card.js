import React from 'react'
import { ReactComponent as HeartLikeIcon } from '../../../assets/icons/heart-liked.svg'
import './item-card.scss'

const ItemCard = ({ cardItem, type, isLiked }) => {
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

    const modifyLikButton = () => {
        return isLiked || isLiked === undefined
            ? 'card__like-icon card__like-icon--active'
            : 'card__like-icon'
    }
    return (
        <section className="card__info">
            <img className="card__image" src={imageUrl} alt={name} />
            <section className="card__name-box">
                <p className="card__name">{name}</p>
                <p className="card__artists">{artists}</p>
            </section>
            {type === 'track' ? (
                <section className="card__like-box">
                    <HeartLikeIcon className={modifyLikButton()} />
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
