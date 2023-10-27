import { useEpisodeContext } from '../context/EpisodeContext'
import { Episode } from '../types/types'

import SearchInput from '../components/SearchInput'
import useSearch from '../hooks/useSearch'
import { EpisodeCard } from '../components/EpisodeCard'

export default function EpisodeList() {
  const { episodes, loading, error } = useEpisodeContext()

  const { searchQuery, setSearchQuery, filteredItems } = useSearch({
    items: episodes,
    searchKey: 'name',
  })

  if (loading) return <p>Loading...</p>

  if (error) return <p>Something went wrong</p>

  return (
    <div>
      <SearchInput value={searchQuery} onChange={setSearchQuery} />

      {filteredItems.length === 0 ? (
        <p>No episodes found.</p>
      ) : (
        filteredItems.map((episode: Episode) => (
          <div key={episode.id} style={{ border: '2px solid' }}>
            <EpisodeCard episode={episode} />
          </div>
        ))
      )}
    </div>
  )
}
