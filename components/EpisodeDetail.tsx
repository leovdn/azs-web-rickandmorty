// EpisodeDetail.tsx

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEpisodeContext } from '../context/EpisodeContext'

const EpisodeDetail: React.FC = () => {
  const { id } = useParams()
  const { episodes, loading, error } = useEpisodeContext() // Use the context hook to access episodes

  const [isFavorite, setIsFavorite] = useState(false)
  const [isWatched, setIsWatched] = useState(false)

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

  // Function to toggle the watched status
  const toggleWatched = () => {
    const watched = JSON.parse(localStorage.getItem('watched') || '[]')
    if (isWatched) {
      // Remove from watched
      const updatedWatched = watched.filter(
        (watchedId: string) => watchedId !== id
      )
      localStorage.setItem('watched', JSON.stringify(updatedWatched))
    } else {
      // Add to watched
      watched.push(id)
      localStorage.setItem('watched', JSON.stringify(watched))
    }

    setIsWatched((prevWatched) => !prevWatched)
  }

  useEffect(() => {
    // Check if the current episode is in the list of favorites
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    setIsFavorite(favorites.includes(id))

    // Check if the current episode is in the list of watched episodes
    const watched = JSON.parse(localStorage.getItem('watched') || '[]')
    setIsWatched(watched.includes(id))

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

  return (
    <div>
      <h1>{episode.name}</h1>
      <button onClick={toggleFavorite}>
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
      <button onClick={toggleWatched}>
        {isWatched ? 'Unwatched' : 'Watched'}
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
