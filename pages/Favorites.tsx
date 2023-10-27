import { useEffect, useState } from 'react'
import { useEpisodeContext } from '../context/EpisodeContext'
import { Episode } from '../types/types'
import { EpisodeCard } from '../components/EpisodeCard'

export default function FavoriteEpisodes() {
  const { episodes, loading, error } = useEpisodeContext()

  const [favorites, setFavorites] = useState<string[]>(() => {
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
    favorites.includes(episode.id)
  )

  return (
    <div>
      <h2>Favorite Episodes</h2>
      {favoriteEpisodes.length === 0 && <p>No favorite episodes yet</p>}
      <ul>
        {favoriteEpisodes.map((episode: Episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </ul>
    </div>
  )
}
