import { Episode } from '../types/types'
import FavoriteButton from './FavoriteButton'
import WatchedButton from './WatchedButton'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from '@mui/material'
import { StyledLink } from '../styles/app'

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
        boxShadow: '4px 4px 20px 1px rgba(0,0,0,0.2)',
        border: '1px solid #333',
      }}
    >
      <CardActionArea>
        <StyledLink
          to={`/episode/${episode.id}`}
          style={{ textDecoration: 'none' }}
        >
          <CardMedia>
            <img
              src={charactersImageList[characterlength - 1]}
              alt="Episode image"
            />
          </CardMedia>

          <CardContent>
            <Box>
              <Typography
                variant="caption"
                color="#b8b8b8"
                fontWeight="200"
                lineHeight="0"
              >
                Name
              </Typography>

              <Typography variant="h5" fontWeight="bold">
                {episode.name}
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" marginTop="1rem">
              <Box>
                <Typography
                  variant="caption"
                  color="#b8b8b8"
                  fontWeight="200"
                  lineHeight="0"
                >
                  Aired date
                </Typography>
                <Typography>{episode.air_date}</Typography>
              </Box>

              <Box>
                <Typography
                  variant="caption"
                  color="#b8b8b8"
                  fontWeight="200"
                  lineHeight="0"
                >
                  Episode
                </Typography>
                <Typography>{episode.episode}</Typography>
              </Box>
            </Box>

            <Chip
              sx={{ borderRadius: '4px', marginTop: '1rem' }}
              color="primary"
              label={`${episode.characters.length} characters`}
            />
          </CardContent>
        </StyledLink>
      </CardActionArea>
      <FavoriteButton episodeId={episode.id} absolute />
      <WatchedButton episodeId={episode.id} absolute />
    </Card>
  )
}
