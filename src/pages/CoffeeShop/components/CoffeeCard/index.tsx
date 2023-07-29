import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'

import {
  CartButton,
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeTypeLabels,
  QuantityButton,
} from './styles'
import { ICoffee } from '../../../../coffees'

interface CoffeeCardProps {
  coffee: ICoffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const imgSrc = `src/assets/coffees/${coffee.imgName}.png`

  return (
    <CoffeeCardContainer>
      <img alt="coffee-image" src={imgSrc} />
      <CoffeeTypeLabels>
        {coffee.type.map((type, index) => (
          <span key={index}>{type}</span>
        ))}
      </CoffeeTypeLabels>
      <h2>{coffee.name}</h2>
      <p>{coffee.description}</p>
      <CoffeeCardFooter>
        R$ <span> {coffee.price}</span>
        <QuantityButton>
          <Minus size={16} />
          1
          <Plus size={16} />
        </QuantityButton>
        <CartButton>
          <ShoppingCartSimple size={20} weight="fill" />
        </CartButton>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
