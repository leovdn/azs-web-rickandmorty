import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { Character } from '../types/types'

type CharacterCardProps = {
  character: Character
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Card sx={{ maxWidth: 300, boxShadow: '4px 4px 14px rgba(0,0,0,0.4)' }}>
      <CardActionArea>
        <CardMedia>
          <img src={character.image} alt={character.name} />
        </CardMedia>

        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            {character.name}
          </Typography>

          <Typography variant="caption" sx={{}}>
            Species
          </Typography>

          <Typography> {character.species}</Typography>

          <Typography> {character.status}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
