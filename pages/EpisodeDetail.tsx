// EpisodeDetail.tsx

import React from 'react'
import { useParams } from 'react-router-dom'
import { useEpisodeContext } from '../context/EpisodeContext'
import FavoriteButton from '../components/FavoriteButton'
import WatchedButton from '../components/WatchedButton'
import CharacterCard from '../components/CharacterCard'

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
    <div>
      <h1>{episode.name}</h1>
      <FavoriteButton episodeId={episode.id} />
      <WatchedButton episodeId={episode.id} />
      <p>Episode Number: {episode.id}</p>
      <p>Air Date: {episode.air_date}</p>
      <h2>Characters in this Episode</h2>

      <ul>
        {episode.characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </ul>
    </div>
  )
}

export default EpisodeDetail
