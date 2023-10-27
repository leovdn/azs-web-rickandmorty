import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 4rem;

  background-color: #fff;
  box-shadow: 4px 2px 12px rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid #ddd;
  z-index: 99;

  a {
    text-decoration: none;
    display: contents;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 8px 24px;

  display: flex;
  justify-content: space-between;
`

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  width: 100%;

  font-size: 1.5rem;
  font-weight: bold;

  img {
    object-fit: contain;
    height: 3rem;
  }
`



export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
