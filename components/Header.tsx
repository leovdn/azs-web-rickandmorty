import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">AZShip - Rick and Morty</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
    </nav>
  )
}
