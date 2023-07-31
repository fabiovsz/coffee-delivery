import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'

import {
  CartButton,
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeTypeLabels,
  QuantityButton,
} from './styles'
import { ICoffee } from '../../../../coffees'
import { useReducer } from 'react'

interface CoffeeCardProps {
  coffee: ICoffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const imgSrc = `src/assets/coffees/${coffee.imgName}.png`

  const [quantity, dispatch] = useReducer((state: any, action: any) => {
    console.log(state)

    if (action.type === 'ADD_COFFEE') {
      return action.payload.quantity + 1
    }

    if (action.type === 'REMOVE_COFFEE') {
      if (state > 0) {
        return action.payload.quantity - 1
      }
    }

    return state
  }, 0)

  function addCoffee() {
    dispatch({ type: 'ADD_COFFEE', payload: { quantity } })
  }

  function removeCoffee() {
    dispatch({ type: 'REMOVE_COFFEE', payload: { quantity } })
  }

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
          <button onClick={removeCoffee}>
            <Minus size={16} />
          </button>
          {quantity}
          <button onClick={addCoffee}>
            <Plus size={16} />
          </button>
        </QuantityButton>
        <CartButton>
          <ShoppingCartSimple size={20} weight="fill" />
        </CartButton>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}
