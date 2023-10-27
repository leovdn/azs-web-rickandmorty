import { useEpisodeContext } from '../context/EpisodeContext'
import { Episode } from '../types/types'

import SearchInput from '../components/SearchInput'
import useSearch from '../hooks/useSearch'
import { EpisodeCard } from '../components/EpisodeCard'
import { Box, Container } from '@mui/material'
import Loader from '../components/Loader'

export default function EpisodeList() {
  const { episodes, loading, error } = useEpisodeContext()

  const { searchQuery, setSearchQuery, filteredItems } = useSearch({
    items: episodes,
    searchKey: 'name',
  })

  if (loading) return <Loader />

  if (error) return <p>Something went wrong</p>

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="4rem">
      <SearchInput value={searchQuery} onChange={setSearchQuery} />

      <Container sx={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {filteredItems.length === 0 ? (
          <p>No episodes found.</p>
        ) : (
          filteredItems.map((episode: Episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))
        )}
      </Container>
    </Box>
  )
}
