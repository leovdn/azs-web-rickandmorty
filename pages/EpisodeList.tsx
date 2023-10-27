import { useEpisodeContext } from '../context/EpisodeContext'
import { Episode } from '../types/types'

import SearchInput from '../components/SearchInput'
import useSearch from '../hooks/useSearch'
import { EpisodeCard } from '../components/EpisodeCard'
import { Box, Container } from '@mui/material'
import { Dna } from 'react-loader-spinner'

export default function EpisodeList() {
  const { episodes, loading, error } = useEpisodeContext()

  const { searchQuery, setSearchQuery, filteredItems } = useSearch({
    items: episodes,
    searchKey: 'name',
  })

  if (loading)
    return (
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    )

  if (error) return <p>Something went wrong</p>

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap="4rem">
      <SearchInput value={searchQuery} onChange={setSearchQuery} />

      <Container sx={{ display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
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
