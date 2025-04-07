import americano from '../assets/Type=Americano.svg'
import arabe from '../assets/Type=Árabe.svg'
import cafeComLeite from '../assets/Type=Café-com-Leite.svg'
import cafeGelado from '../assets/Type=Café-Gelado.svg'
import capuccino from '../assets/Type=Capuccino.svg'
import chocolateQuente from '../assets/Type=Chocolate-Quente.svg'
import cubano from '../assets/Type=Cubano.svg'
import expresso from '../assets/Type=Expresso.svg'
import expressoCremoso from '../assets/Type=Expresso-Cremoso.svg'
import havaiano from '../assets/Type=Havaiano.svg'
import irlandes from '../assets/Type=Irlandês.svg'
import latte from '../assets/Type=Latte.svg'
import macchiato from '../assets/Type=Macchiato.svg'
import mochaccino from '../assets/Type=Mochaccino.svg'

export interface Coffee {
  id: number
  name: string
  description: string
  picture: string
  tags: string[]
}

export const data:Coffee[] = [
  {
    "id": 1,
    "name": "Expresso Tradicional",
    "description": "O tradicional café feito com água quente e grãos moídos",
    "picture": expresso,
    "tags": ["TRADICIONAL"]
},
{
    "id": 2,
    "name": "Expresso Americano",
    "description": "Expresso diluído, menos intenso que o tradicional",
    "picture": americano,
    "tags": ["TRADICIONAL"]
},
{
    "id": 3,
    "name": "Expresso Cremoso",
    "description": "Café expresso tradicional com espuma cremosa",
    "picture": expressoCremoso,
    "tags": ["TRADICIONAL"]
},
{
    "id": 4,
    "name": "Expresso Gelado",
    "description": "Bebida preparada com café expresso e cubos de gelo",
    "picture": cafeGelado,
    "tags": ["TRADICIONAL", "GELADO"]
},
{
    "id": 5,
    "name": "Café com Leite",
    "description": "Meio a meio de expresso tradicional com leite vaporizado",
    "picture": cafeComLeite,
    "tags": ["TRADICIONAL", "COM LEITE"]
},
{
    "id": 6,
    "name": "Latte",
    "description": "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    "picture": latte,
    "tags": ["TRADICIONAL", "COM LEITE"]
},
{
    "id": 7,
    "name": "Capuccino",
    "description": "Bebida com canela feita de doses iguais de café, leite e espuma",
    "picture": capuccino,
    "tags": ["TRADICIONAL", "COM LEITE"]
},
{
    "id": 8,
    "name": "Macchiato",
    "description": "Café expresso misturado com um pouco de leite quente e espuma",
    "picture": macchiato,
    "tags": ["TRADICIONAL", "COM LEITE"]
},
{
    "id": 9,
    "name": "Mocaccino",
    "description": "Café expresso com calda de chocolate, pouco leite e espuma",
    "picture": mochaccino,
    "tags": ["TRADICIONAL", "COM LEITE"]
},
{
    "id": 10,
    "name": "Chocolate Quente",
    "description": "Bebida feita com chocolate dissolvido no leite quente e café",
    "picture": chocolateQuente,
    "tags": ["ESPECIAL", "COM LEITE"]
},
{
    "id": 11,
    "name": "Cubano",
    "description": "Drink gelado de café expresso com rum, creme de leite e hortelã",
    "picture": cubano,
    "tags": ["ESPECIAL", "ALCOÓLICO", "GELADO"]
},
{
    "id": 12,
    "name": "Havaiano",
    "description": "Bebida adocicada preparada com café e leite de coco",
    "picture": havaiano,
    "tags": ["ESPECIAL"]
},
{
    "id": 13,
    "name": "Árabe",
    "description": "Bebida preparada com grãos de café árabe e especiarias",
    "picture": arabe,
    "tags": ["ESPECIAL"]
},
{
    "id": 14,
    "name": "Irlandês",
    "description": "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    "picture": irlandes,
    "tags": ["ESPECIAL", "ALCOÓLICO"]
}
]