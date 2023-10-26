// EpisodeDetail.tsx

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEpisodeContext } from '../context/EpisodeContext'

const EpisodeDetail: React.FC = () => {
  const { id } = useParams()
  const { episodes, loading, error } = useEpisodeContext() // Use the context hook to access episodes

  const [isFavorite, setIsFavorite] = useState(false)

  // Function to toggle the favorite status
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter((id: string) => id !== id)
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    } else {
      // Add to favorites
      favorites.push(id)
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }

    setIsFavorite((prevFavorite) => !prevFavorite)
  }
  useEffect(() => {
    // Check if the current episode is in the list of favorites
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    setIsFavorite(favorites.includes(id))

    return () => {
      // Cleanup, if needed
    }
  }, [episodes, id])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  // Find the specific episode based on the episodeId parameter
  const episode = episodes.find((ep) => ep.id.toString() === id)

  if (!episode) {
    return <p>Episode not found</p>
  }

  console.log(id)

  return (
    <div>
      <h1>{episode.name}</h1>
      <button onClick={toggleFavorite}>
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
      <p>Episode Number: {episode.id}</p>
      <p>Air Date: {episode.air_date}</p>
      <h2>Characters in this Episode</h2>
      <ul>
        {episode.characters.map((character) => (
          <li key={character.id} style={{ border: '2px solid' }}>
            <img src={character.image} alt={character.name} />
            <p>Name: {character.name}</p>
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EpisodeDetail
