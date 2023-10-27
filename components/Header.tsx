import { NavLink } from 'react-router-dom'
import { HeaderContainer, HeaderContent, Logo } from '../styles/app'
import logo from '../assets/logo.png'
import { Button, Link } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <Button>
            <NavLink to="/">
              <img src={logo} alt="Rick and Morty logo" />
            </NavLink>
          </Button>

          <Button>
            <NavLink to="/favorites">
              <Link>
                Favorites <FavoriteBorderOutlinedIcon sx={{ marginLeft: 1 }} />
              </Link>
            </NavLink>
          </Button>
        </Logo>
      </HeaderContent>
    </HeaderContainer>
  )
}
