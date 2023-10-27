import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from '@mui/material'
import { Character } from '../types/types'

type CharacterCardProps = {
  character: Character
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const characterStatus = {
    ['Alive']: 'success',
    ['Dead']: 'error',
    ['unknown']: 'default',
  }

  return (
    <Card
      sx={{
        maxWidth: 300,
        boxShadow: '4px 4px 20px 1px rgba(0,0,0,0.2)',
        border: '1px solid #333',
      }}
    >
      <CardActionArea>
        <CardMedia>
          <img src={character.image} alt={character.name} />
        </CardMedia>

        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
          >
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
                {character.name}
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="caption"
                color="#b8b8b8"
                fontWeight="200"
                lineHeight="0"
              >
                Species
              </Typography>
              <Typography> {character.species}</Typography>
            </Box>
          </Box>

          <Chip
            sx={{ borderRadius: '4px', marginTop: '1rem' }}
            color={characterStatus[character.status]}
            label={character.status}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
