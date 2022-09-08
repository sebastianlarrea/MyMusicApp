import React from 'react'
import { ReactComponent as HeartLikeIcon } from 'assets/icons/heart-liked.svg'
import spotifyService from 'services/spotify'
import stringConstans from 'constants/string-constants'
import './item-card.scss'

const ItemCard = ({ cardItem, type, isLiked }) => {
    const trackId = cardItem?.track?.id
    const imageUrl =
        type === stringConstans.TRACK_TYPE
            ? cardItem?.track?.album?.images[2].url
            : cardItem?.album?.images[2].url
    const name = cardItem?.[type]?.name
    const spanishFormat = new Intl.ListFormat('es')
    const artists = cardItem?.[type]?.artists.map(artist => {
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
        <div className="card">
            <div className="card__image-box">
                <img className="card__image" src={imageUrl} alt={name} />
            </div>
            <div className="card__name-box">
                <p className="card__name">{name}</p>
                <p className="card__artists">{artistsFormated}</p>
            </div>
            {type === stringConstans.TRACK_TYPE ? (
                <div className="card__like-box">
                    <HeartLikeIcon
                        className={
                            isLiked
                                ? 'card__like-icon card__like-icon--active'
                                : 'card__like-icon'
                        }
                        onClick={handleLike}
                    />
                </div>
            ) : (
                <div className="card__songs-count">
                    <p>{cardItem?.[type]?.tracks?.items.length} Songs</p>
                </div>
            )}
        </div>
    )
}

export default ItemCard
