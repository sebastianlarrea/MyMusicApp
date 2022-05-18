import React from 'react'
import { ReactComponent as HeartLikeIcon } from '../../../assets/icons/heart-liked.svg'
import spotifyService from '../../../services/spotify'
import './item-card.scss'
import stringConstans from '../../../constants/string-constants'

const ItemCard = ({ cardItem, type, isLiked }) => {
    
    const trackId = cardItem?.track?.id
    const imageUrl =
        type === stringConstans.TRACK_TYPE
            ? cardItem?.track?.album?.images[2].url
            : cardItem?.album?.images[2].url
    const name = cardItem?.[type]?.name
    const spanishFormat = new Intl.ListFormat('es')
    const artists = cardItem?.[type]?.artists
    .map(artist => {
        return artist.name
    })
    const artistsFormated = spanishFormat.format(artists)

    const handleLike = () => {
        isLiked 
            ? spotifyService.deleteTrack(trackId).then(() => {
                  window.location.replace('')
              })
            : spotifyService.addTrack(trackId).then(() => {
                  window.location.replace('')
              })
    }

    return (
        <section className="card">
            <section className="card__image-box">
                <img className="card__image" src={imageUrl} alt={name} />
            </section>
            <section className="card__name-box">
                <p className="card__name">{name}</p>
                <p className="card__artists">{artistsFormated}</p>
            </section>
            {type === stringConstans.TRACK_TYPE ? (
                <section className="card__like-box">
                    <HeartLikeIcon
                        className={
                            isLiked
                            ? 'card__like-icon card__like-icon--active'
                            : 'card__like-icon'
                        }
                        onClick={handleLike}
                    />
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
