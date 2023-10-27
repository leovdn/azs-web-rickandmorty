import { useState, useEffect } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { IconButton } from '@mui/material'
interface FavoriteButtonProps {
  episodeId: string
  absolute?: boolean
}

export default function FavoriteButton({
  episodeId,
  absolute,
}: FavoriteButtonProps) {
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
    <IconButton
      onClick={toggleFavorite}
      sx={{
        position: absolute ? 'absolute' : 'initial',
        top: 8,
        left: 8,
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      }}
    >
      {isFavorite ? (
        <FavoriteIcon fontSize="large" color="error" />
      ) : (
        <FavoriteIcon fontSize="large" color="disabled" />
      )}
    </IconButton>
  )
}
