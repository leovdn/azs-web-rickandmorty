import { useEffect, useState } from 'react'
import { useEpisodeContext } from '../context/EpisodeContext'
import { Episode } from '../types/types'

export default function FavoriteEpisodes() {
  const { episodes, loading, error } = useEpisodeContext()

  const [favorites, setFavorites] = useState<number[]>(() => {
    const favoritesFromStorage = localStorage.getItem('favorites')
    return favoritesFromStorage ? JSON.parse(favoritesFromStorage) : []
  })

  useEffect(() => {
    const favoritesFromStorage = localStorage.getItem('favorites')
    if (favoritesFromStorage) {
      setFavorites(JSON.parse(favoritesFromStorage))
    }
  }, [])

  if (loading) return <p>Loading...</p>

  if (error) return <p>Something went wrong</p>

  const favoriteEpisodes = episodes.filter((episode: Episode) =>
    favorites.includes(parseInt(episode.id))
  )

  return (
    <div>
      <h2>Favorite Episodes</h2>
      {favoriteEpisodes.length === 0 && <p>No favorite episodes yet</p>}
      <ul>
        {favoriteEpisodes.map((episode: Episode) => (
          <li key={episode.id}>
            <p>{episode.name}</p>
            <p>{episode.air_date}</p>
            <p>{episode.episode}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
