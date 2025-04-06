import { CoffeeCardActions, CoffeeCardContainer, CoffeeCardInfo, CoffeeCardTags } from "./styles";
import coffeeImg from '../../../../assets/Type=Americano.svg'
import { ShoppingCart } from "phosphor-react";

export function CoffeeCard() {
  return(
    <CoffeeCardContainer>
      <img src={coffeeImg}/>
      <CoffeeCardTags>
        <span>TRADICIONAL</span>
        <span>COM LEITE</span>
      </CoffeeCardTags>
      <CoffeeCardInfo>
        <h3>Nome do Café</h3>
        <p>Descrição das caracteristicas e preparo do café</p>
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