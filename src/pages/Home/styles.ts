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
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1{
    font-family: 'Baloo 2';
    font-size: 3rem;
    line-height: 1.3;
    font-weight: 900;
    color:  ${props => props.theme["base-title"]};
  }

  h2{
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 400;
    color:  ${props => props.theme["base-text"]};
  }
`

export const BannerIconsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 4rem;

  span{
    display: flex;
    align-items: center;
    font-size: 1rem;
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