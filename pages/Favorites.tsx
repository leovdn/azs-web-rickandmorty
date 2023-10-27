import { useEffect, useState } from 'react'
import { useEpisodeContext } from '../context/EpisodeContext'
import { Episode } from '../types/types'
import { EpisodeCard } from '../components/EpisodeCard'
import { Box, Container } from '@mui/material'

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
    <Container>
      <h2>Favorite Episodes</h2>
      <Box display="flex" alignItems="center" gap="2rem">
        {favoriteEpisodes.length === 0 && <p>No favorite episodes yet</p>}

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          {favoriteEpisodes.map((episode: Episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </Box>
      </Box>
    </Container>
  )
}
