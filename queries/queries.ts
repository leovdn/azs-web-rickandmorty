import { gql } from '@apollo/client';

export const GET_EPISODESLIST = gql`
  query GetEpisodes {
    episodes {
      results {
        id
        name
        air_date
        episode
        characters {
          id
          name
          image
          species
          status
        }
      }
      info {
        count
        pages
        prev
        next
      }
  }
  }
`;
