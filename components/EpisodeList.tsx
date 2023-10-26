import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useEpisodeContext } from '../context/EpisodeContext'
import { Episode } from '../types/types'

export default function EpisodeList() {
  const { episodes, loading, error } = useEpisodeContext()
  const [favorites, setFavorites] = useState<number[]>(() => {
    const favoritesFromStorage = localStorage.getItem('favorites')
    return favoritesFromStorage ? JSON.parse(favoritesFromStorage) : []
  })
  const [watched, setWatched] = useState<number[]>(() => {
    const watchedFromStorage = localStorage.getItem('watched')
    return watchedFromStorage ? JSON.parse(watchedFromStorage) : []
  })

  const toggleFavorite = (id: number) => {
    const index = favorites.indexOf(id)
    if (index === -1) {
      setFavorites([...favorites, id])
    } else {
      setFavorites(favorites.filter((favId) => favId !== id))
    }
  }

  const toggleWatched = (id: number) => {
    const index = watched.indexOf(id)
    if (index === -1) {
      setWatched([...watched, id])
    } else {
      setWatched(watched.filter((watchedId) => watchedId !== id))
    }
  }

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(watched))
  }, [watched])

  if (loading) return <p>Loading...</p>

  if (error) return <p>Something went wrong</p>

  return (
    <div>
      {episodes.map((episode: Episode) => (
        <div key={episode.id} style={{ border: '2px solid' }}>
          <button onClick={() => toggleFavorite(episode.id)}>
            {favorites.includes(episode.id) ? 'Unfavorite' : 'Favorite'}
          </button>

          <button onClick={() => toggleWatched(episode.id)}>
            {watched.includes(episode.id) ? 'Unwatched' : 'Watched'}
          </button>

          <Link to={`episode/${episode.id}`}>
            <h2>{episode.name}</h2>
            <p>{episode.air_date}</p>
            <p>{episode.episode}</p>
            <p>{episode.characters.length} characters</p>
          </Link>
        </div>
      ))}
    </div>
  )
}
