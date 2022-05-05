import React, { useEffect, useState } from 'react'
import { ReactComponent as HeartLikeIcon } from '../../../assets/icons/heart-liked.svg'
import spotifyService from '../../../services/spotify'
import spotifyConstants from '../../../constants/string-constants'
import './item-card.scss'
import stringConstans from '../../../constants/string-constants'

const ItemCard = ({ cardItem, type, isLiked }) => {
    const [classLikeIcon, setClassLikeIcon] = useState(spotifyConstants.LIKE_CLASS)
    const id = cardItem?.track?.id
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

    useEffect(() => {
        isLiked || isLiked === undefined
            ? setClassLikeIcon(`${spotifyConstants.LIKE_CLASS} ${spotifyConstants.LIKE_ACTIVE_CLASS}`)
            : setClassLikeIcon(spotifyConstants.LIKE_CLASS)
    }, [isLiked])

    const handleLike = () => {
        isLiked || isLiked === undefined
            ? spotifyService.deleteTrack(id).then(() => {
                  window.location.replace('')
              })
            : spotifyService.addTrack(id).then(() => {
                  window.location.replace('')
              })
    }

    return (
        <section className="card__info">
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
                        className={classLikeIcon}
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
