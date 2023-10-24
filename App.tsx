import { gql, useQuery } from '@apollo/client'

export interface CharacterProps {
  __typename: string
  id: string
}
export interface EpisodesProps {
  __typename: string
  id: string
  name: string
  air_date: string
  characters: CharacterProps[]
}

const GET_EPISODES = gql`
  query {
    episodes {
      results {
        id
        name
        air_date
        characters {
          id
        }
      }
    }
  }
`

function App() {
  const { data, loading, error } = useQuery(GET_EPISODES)

  console.log({ data, loading, error })

  if (loading) return <p>Loading...</p>

  if (error) return <p>Something went wrong</p>

  return (
    <div>
      <h1>AZShip - Rick and Morty</h1>

      {data.episodes.results.map((episode: EpisodesProps) => (
        <div key={episode.id}>
          <h2>{episode.name}</h2>
          <p>{episode.air_date}</p>
          <p>{episode.characters.length} characters</p>
        </div>
      ))}
    </div>
  )
}

export default App
