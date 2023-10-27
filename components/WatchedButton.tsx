import { useState, useEffect } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { IconButton } from '@mui/material'
interface WatchedButtonProps {
  episodeId: string
  absolute?: boolean
}

export default function WatchedButton({
  episodeId,
  absolute,
}: WatchedButtonProps) {
  const [isWatched, setIsWatched] = useState(false)

  const toggleWatched = () => {
    const watched = JSON.parse(localStorage.getItem('watched') || '[]')
    if (isWatched) {
      // Remove from watched
      const updatedWatched = watched.filter(
        (watchedId: string) => watchedId !== episodeId
      )
      localStorage.setItem('watched', JSON.stringify(updatedWatched))
    } else {
      // Add to watched
      watched.push(episodeId)
      localStorage.setItem('watched', JSON.stringify(watched))
    }

    setIsWatched((prevWatched) => !prevWatched)
  }

  useEffect(() => {
    // Check if the current episode is in the list of favorites
    const favorites = JSON.parse(localStorage.getItem('watched') || '[]')
    setIsWatched(favorites.includes(episodeId.toString()))

    return () => {
      // Cleanup, if needed
    }
  }, [episodeId])

  return (
    <IconButton
      onClick={toggleWatched}
      sx={{
        position: absolute ? 'absolute' : 'initial',
        right: '4px',
        top: '4px',
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      }}
    >
      {isWatched ? (
        <VisibilityIcon fontSize="large" color="primary" />
      ) : (
        <VisibilityIcon fontSize="large" color="disabled" />
      )}
    </IconButton>
  )
}
