import { Link } from 'react-router-dom'
import { Episode } from '../types/types'
import FavoriteButton from './FavoriteButton'
import WatchedButton from './WatchedButton'

type EpisodeCardProps = {
  episode: Episode
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  const charactersImageList = episode.characters.map(
    (character) => character.image
  )

  return (
    <div>
      <FavoriteButton episodeId={episode.id} />

      <WatchedButton episodeId={episode.id} />

      <Link to={`episode/${episode.id}`}>
        <img
          src={charactersImageList[Number(episode.id)]}
          alt="Episode image"
        />
        <h2>{episode.name}</h2>
        <p>{episode.air_date}</p>
        <p>{episode.episode}</p>
        <p>{episode.characters.length} characters</p>
      </Link>
    </div>
  )
}
