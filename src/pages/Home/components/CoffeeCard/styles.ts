import styled from "styled-components";

export const CoffeeCardContainer = styled.div`

  max-width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  background-color: ${props => props.theme["base-card"]};
  margin-top: 3rem;

  img{
    width: 7.5rem;
    height: 7.5rem;
    margin-top: calc(0px - 1.5rem - 6px); 
  }
`

export const CoffeeCardTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 1rem;
  gap: 0.5rem;

  span {
    color: ${props => props.theme["yellow-dark"]};
    font-size: 0.725rem;
    font-weight: bold;
    background: ${props => props.theme["yellow-light"]};
    border-radius: 9999px;
    padding: 0.2rem 0.5rem;
  }
`

export const CoffeeCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-block: 1rem;

  h3{
    color:  ${props => props.theme["base-title"]};
    font-family: 'Baloo 2';
    line-height: 1.3;
    font-size: 1.25rem;
  }

  p{
    color:  ${props => props.theme["base-label"]};
    line-height: 1.3;
  }

`

export const CoffeeCardActions = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  span{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    font-size: 0.875rem;


    span{
      color:  ${props => props.theme["base-title"]};
      font-family: 'Baloo 2';
      line-height: 1.3;
      font-weight: 900;
      font-size: 1.5rem;
    }
  }

  input{
    border: none;
    background: ${props => props.theme["base-input"]};
    max-width: 5rem;
    height: 2rem;
    padding: 0.5rem;
    font-size: 1rem;
  }

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 8px;
    color: ${props => props.theme["background"]};
    background: ${props => props.theme["purple-dark"]};
    padding: 0.5rem;
    border: none;
    cursor: pointer;
  }

`