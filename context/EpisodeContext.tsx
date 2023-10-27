import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { ReactNode } from 'react'

import { Episode } from '../types/types'
import { useEpisodes } from '../hooks/useEpisodes'
import { ApolloError } from '@apollo/client'

interface EpisodeContextType {
  episodes: Episode[]
  loading: boolean
  error: ApolloError | undefined
}

const EpisodeContext = createContext<EpisodeContextType | undefined>(
  {} as EpisodeContextType
)

const EpisodeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const { data, loading, error } = useEpisodes()

  useEffect(() => {
    if (data) {
      setEpisodes(data.episodes.results)
    }
  }, [data])

  const contextValue = useMemo(
    () => ({ episodes, loading, error }),
    [episodes, loading, error]
  )

  if (loading) {
    setTimeout(() => {
      if (loading) {
        return <div>Loading...</div>
      }
    }, 1000)
  }

  if (error) {
    return <div>Something went wrong: {error.message}</div>
  }

  return (
    <EpisodeContext.Provider value={contextValue}>
      {children}
    </EpisodeContext.Provider>
  )
}

// Custom hook to access the context
const useEpisodeContext = () => {
  const context = useContext(EpisodeContext)
  if (context === undefined) {
    throw new Error('useEpisodeContext must be used within an EpisodeProvider')
  }
  return context
}

export { EpisodeProvider, useEpisodeContext }
