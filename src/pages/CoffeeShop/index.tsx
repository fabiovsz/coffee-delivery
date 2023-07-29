import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  CoffeeShopDescriptionContainer,
  CoffeeShopDescription,
  CoffeeShopInfosContainer,
} from './styles'
import { InfoIcon } from '../../components/InfoIcon'
import { CoffeeList } from './components/CoffeeList'

export function CoffeeShop() {
  return (
    <>
      <CoffeeShopDescriptionContainer>
        <CoffeeShopDescription>
          <div className="description-container">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </div>
          <CoffeeShopInfosContainer>
            <InfoIcon
              text="Compra simples e segura"
              iconColor="brand-yellow-dark"
              icon={<ShoppingCart size={20} weight="fill" />}
            ></InfoIcon>
            <InfoIcon
              text="Embalagem mantém o café intacto"
              iconColor="base-text"
              icon={<Package size={20} weight="fill" />}
            ></InfoIcon>
            <InfoIcon
              text="Entrega rápida e rastreada"
              iconColor="brand-yellow"
              icon={<Timer size={20} weight="fill" />}
            ></InfoIcon>
            <InfoIcon
              text="O café chega fresquinho até você"
              iconColor="brand-purple"
              icon={<Coffee size={20} weight="fill" />}
            ></InfoIcon>
          </CoffeeShopInfosContainer>
        </CoffeeShopDescription>
        <img src="src/assets/coffee-image.svg" alt="coffee-image" />
      </CoffeeShopDescriptionContainer>
      <CoffeeList />
    </>
  )
}
