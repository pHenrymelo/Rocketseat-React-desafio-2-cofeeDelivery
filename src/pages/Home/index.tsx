import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import cover from '../../assets/cover.svg'

export function Home() {
    return(
        <div>
            <div>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    <div>
                        <span>
                            <ShoppingCart size={24} weight='fill'/>
                            <p>Compra simples e segura</p>
                        </span>
                        <span>
                            <Package size={24} weight='fill' />
                            <p>Embalagem mantem o café intacto</p>
                        </span>
                        <span>
                            <Timer size={24} weight='fill'/>
                            <p>Entrega rápida e rastreada</p>
                        </span>
                        <span>
                            <Coffee size={24} weight='fill' />
                            <p>O café chega fresquinho até você</p>
                        </span>
                    </div>
                </div>
                <aside>
                    <img src={cover} alt="copo de café ao centro com grãos e po de café em um fundo amarelo" />
                </aside>
            </div>
            <main>
                CAFES
            </main>
        </div>
    )
}