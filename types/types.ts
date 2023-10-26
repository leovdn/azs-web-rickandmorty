// types.ts
export interface Episode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
}

export interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
}
