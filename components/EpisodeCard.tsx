import { Link } from 'react-router-dom'
import { Episode } from '../types/types'
import FavoriteButton from './FavoriteButton'
import WatchedButton from './WatchedButton'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

type EpisodeCardProps = {
  episode: Episode
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  const charactersImageList = episode.characters.map(
    (character) => character.image
  )

  const characterlength = episode.characters.length

  return (
    <Card
      sx={{
        maxWidth: 300,
        position: 'relative',
        boxShadow: '4px 4px 14px rgba(0,0,0,0.4)',
      }}
    >
      <CardActionArea>
        <Link to={`/episode/${episode.id}`}>
          <CardMedia>
            <img
              src={charactersImageList[characterlength - 1]}
              alt="Episode image"
            />
          </CardMedia>

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color="primary"
              fontWeight="bold"
            >
              {episode.name}
            </Typography>
            <Typography>{episode.air_date}</Typography>
            <Typography>{episode.episode}</Typography>
            <Typography>{episode.characters.length} characters</Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <FavoriteButton episodeId={episode.id} absolute />
      <WatchedButton episodeId={episode.id} absolute />
    </Card>
  )
}
