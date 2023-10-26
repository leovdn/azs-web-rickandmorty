import { useQuery } from '@apollo/client'
import { GET_EPISODESLIST } from '../queries/queries'

export const useEpisodes = () => {
  const { data, loading, error } = useQuery(GET_EPISODESLIST)

  return { data, loading, error }
}
