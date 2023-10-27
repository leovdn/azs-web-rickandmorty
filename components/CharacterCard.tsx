import { Character } from '../types/types'

type CharacterCardProps = {
  character: Character
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <li style={{ border: '2px solid' }}>
      <img src={character.image} alt={character.name} />
      <p>Name: {character.name}</p>
      <p>Species: {character.species}</p>
      <p>Status: {character.status}</p>
    </li>
  )
}
