import { Link } from 'react-router-dom'
import { useEpisodeContext } from '../context/EpisodeContext'
import { Episode } from '../types/types'
import FavoriteButton from '../components/FavoriteButton'
import WatchedButton from '../components/WatchedButton'
import SearchInput from '../components/SearchInput'
import useSearch from '../hooks/useSearch'

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
            <FavoriteButton episodeId={episode.id} />

            <WatchedButton episodeId={episode.id} />

            <Link to={`episode/${episode.id}`}>
              <h2>{episode.name}</h2>
              <p>{episode.air_date}</p>
              <p>{episode.episode}</p>
              <p>{episode.characters.length} characters</p>
            </Link>
          </div>
        ))
      )}
    </div>
  )
}
