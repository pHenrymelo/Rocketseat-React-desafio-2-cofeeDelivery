import { CoffeeCardActions, CoffeeCardContainer, CoffeeCardInfo, CoffeeCardTags } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { Coffee } from '../../../../dataset/coffeeData'

export function CoffeeCard({id, description, name, picture, tags}:Coffee) {
  return(
    <CoffeeCardContainer key={id}>
      <img src={picture}/>
      <CoffeeCardTags>
        { tags.map((tag) => <span> {tag} </span>) }
      </CoffeeCardTags>
      <CoffeeCardInfo>
        <h3>{name}</h3>
        <p>{description}</p>
      </CoffeeCardInfo>

      <CoffeeCardActions>
        <span>
          R$
          <span>9,90</span>
        </span>
        <input type="number" placeholder="0"/>
        <button>
          <ShoppingCart size={24} weight="fill"/>
        </button>
      </CoffeeCardActions>

    </CoffeeCardContainer>
  )
}