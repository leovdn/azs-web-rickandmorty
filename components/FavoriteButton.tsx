import { useState, useEffect } from 'react'

interface FavoriteButtonProps {
  episodeId: string
}

export default function FavoriteButton({ episodeId }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(
        (favId: string) => favId !== episodeId.toString()
      )
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    } else {
      // Add to favorites
      favorites.push(episodeId.toString())
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }

    setIsFavorite((prevFavorite) => !prevFavorite)
  }

  useEffect(() => {
    // Check if the current episode is in the list of favorites
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    setIsFavorite(favorites.includes(episodeId.toString()))

    return () => {
      // Cleanup, if needed
    }
  }, [episodeId])

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? 'Unfavorite' : 'Favorite'}
    </button>
  )
}
