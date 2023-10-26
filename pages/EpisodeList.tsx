import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useEpisodeContext } from '../context/EpisodeContext'
import { Episode } from '../types/types'
import FavoriteButton from '../components/FavoriteButton'
import WatchedButton from '../components/WatchedButton'

export default function EpisodeList() {
  const { episodes, loading, error } = useEpisodeContext()

  const [searchQuery, setSearchQuery] = useState('')
  const [filteredEpisodes, setFilteredEpisodes] = useState<Episode[]>([])

  // Update filtered episodes when the search query changes
  useEffect(() => {
    const filtered = episodes.filter((episode) =>
      episode.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredEpisodes(filtered)
  }, [episodes, searchQuery])

  if (loading) return <p>Loading...</p>

  if (error) return <p>Something went wrong</p>

  return (
    <div>
      <input
        type="text"
        placeholder="Search by episode name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {filteredEpisodes.length === 0 ? (
        <p>No episodes found.</p>
      ) : (
        filteredEpisodes.map((episode: Episode) => (
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
