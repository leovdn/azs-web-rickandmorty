import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  background-color: #fff;
  box-shadow: 4px 2px 12px rgba(0, 0, 0, 0.12);
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
  padding: 16px 24px;

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
    height: 2rem;
  }
`