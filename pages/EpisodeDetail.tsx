// EpisodeDetail.tsx

import React from 'react'
import { useParams } from 'react-router-dom'
import { useEpisodeContext } from '../context/EpisodeContext'
import FavoriteButton from '../components/FavoriteButton'
import WatchedButton from '../components/WatchedButton'
import CharacterCard from '../components/CharacterCard'
import { Box, Container } from '@mui/material'
import { MainContainer } from '../styles/home'

const EpisodeDetail: React.FC = () => {
  const { id } = useParams()
  const { episodes, loading, error } = useEpisodeContext()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  // Find the specific episode based on the id parameter
  const episode = episodes.find((ep) => ep.id.toString() === id)

  if (!episode) {
    return <p>Episode not found</p>
  }

  return (
    <MainContainer>
      <Container>
        <Box display="flex" alignItems="center" gap="2rem">
          <h1>{episode.name}</h1>

          <Box position="relative">
            <FavoriteButton episodeId={episode.id} />
            <WatchedButton episodeId={episode.id} />
          </Box>
        </Box>

        <Box>
          <p>
            <strong>Episode: </strong> {episode.episode}
          </p>
          <p>
            <strong>Air date: </strong> {episode.air_date}
          </p>
          <br />
          <h2>Characters in this Episode</h2>
        </Box>

        <Box display="flex" flexWrap="wrap" gap="2rem" margin="2rem 0">
          {episode.characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </Box>
      </Container>
    </MainContainer>
  )
}

export default EpisodeDetail
