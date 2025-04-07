import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { BannerIconsContainer, BannerTextContainer, CoffeeMenu, CoffeeMenuContainer, HomeBanner, HomeContainer } from './styles'
import cover from '../../assets/cover.svg'
import data from '../../dataset/data.json'
import { CoffeeCard } from './components/CoffeeCard'
import { z } from 'zod'

const coffeeSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    picture: z.string(),
    tags: z.array(z.string())
  })

export type Coffee = z.infer <typeof coffeeSchema>

export function Home() {
    return(
        <HomeContainer>
            <HomeBanner>
                <BannerTextContainer>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
                    <BannerIconsContainer>
                        <span>
                            <ShoppingCart className='cart' size={24} weight='fill'/>
                            <p>Compra simples e segura</p>
                        </span>
                        <span>
                            <Package size={24} className='packege' weight='fill' />
                            <p>Embalagem mantem o café intacto</p>
                        </span>
                        <span>
                            <Timer size={24} className='timer' weight='fill'/>
                            <p>Entrega rápida e rastreada</p>
                        </span>
                        <span>
                            <Coffee size={24} className='coffee' weight='fill' />
                            <p>O café chega fresquinho até você</p>
                        </span>
                    </BannerIconsContainer>
                </BannerTextContainer>
                <aside>
                    <img src={cover} alt="copo de café ao centro com grãos e po de café em um fundo amarelo" />
                </aside>
            </HomeBanner>
            <CoffeeMenuContainer>
                <h2>Nossos cafés</h2>
                <CoffeeMenu>
                    {data.map((Coffee) => (<CoffeeCard id={Coffee.id} name={Coffee.name} description={Coffee.description} picture={Coffee.picture} tags={Coffee.tags} />))}
                </CoffeeMenu>
            </CoffeeMenuContainer>
        </HomeContainer>
    )
}