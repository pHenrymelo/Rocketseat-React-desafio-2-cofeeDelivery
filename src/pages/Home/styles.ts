import styled from "styled-components";
import background from '../../assets/Background.png'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeBanner = styled.div`
  width: 100%;
  height: 34rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: url(${background}) no-repeat;
  background-size: cover;
  padding-inline: 6rem;
  padding-block: 2rem;
  gap: 2rem;

  aside{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const BannerTextContainer = styled.div`
  max-width: 36.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  h1{
    color:  ${props => props.theme["base-title"]};
    font-family: 'Baloo 2';
    line-height: 1.3;
    font-size: 3rem;
    font-weight: 900;
  }

  h2{
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 400;
    color:  ${props => props.theme["base-text"]};
  }
`

export const BannerIconsContainer = styled.div`
  max-width: 35rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 4rem;

  span{
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    line-height: 1.3;
    gap: 0.5rem;

    .cart{
      background: ${props => props.theme["yellow-dark"]};
    }
    .packege{
      background: ${props => props.theme["base-title"]};
    }
    .timer{
      background: ${props => props.theme["yellow"]};
    }
    .coffee{
      background: ${props => props.theme["purple-dark"]};
    }

  }

  svg {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    padding: 0.4rem;
    color: ${props => props.theme["background"]};
  }

`

export const CoffeeMenuContainer = styled.div`
  flex: 1;
  max-width: 70rem;
  display: flex;
  flex-direction: column;
  padding-inline: 6rem;
  padding-block: 2rem;
  gap: 2rem;

  h2{
    color:  ${props => props.theme["base-title"]};
    font-family: 'Baloo 2';
    line-height: 1.3;
    font-size: 2rem;
  }

`

export const CoffeeMenu = styled.div`
  max-width: 70rem;
  display: grid;
  margin-inline: auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

`