import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'

import {
  CartButton,
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeTypeLabels,
  QuantityButton,
} from './styles'
import { ICoffee } from '../../../../coffees'
import { useEffect, useReducer, useState } from 'react'

interface CoffeeCardProps {
  coffee: ICoffee
}

interface ICoffeeCheckout extends ICoffee {
  quantity: number
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const imgSrc = `src/assets/coffees/${coffee.imgName}.png`

  const [checkoutItems, setCheckoutItems] = useState<ICoffeeCheckout[]>([])

  const [quantity, dispatch] = useReducer((state: any, action: any) => {
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
  function logArr() {
    console.log(checkoutItems)
  }

  function addToCart(coffee: ICoffee, quantity: number) {
    setCheckoutItems(
      checkoutItems.map((item) => {
        if (item.id === coffee.id) {
          return { ...item, quantity: item.quantity + quantity }
        } else {
          return item
        }
      }),
    )
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
          <button onClick={() => addToCart(coffee, quantity)}>
            <ShoppingCartSimple size={20} weight="fill" />
          </button>
        </CartButton>
      </CoffeeCardFooter>
      <button onClick={() => logArr()}>click</button>
    </CoffeeCardContainer>
  )
}
