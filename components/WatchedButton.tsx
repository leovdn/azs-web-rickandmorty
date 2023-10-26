import { useState, useEffect } from 'react'

interface WatchedButtonProps {
  episodeId: string
}

export default function WatchedButton({ episodeId }: WatchedButtonProps) {
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
    <button onClick={toggleWatched}>
      {isWatched ? 'Unwatched' : 'Watched'}
    </button>
  )
}
