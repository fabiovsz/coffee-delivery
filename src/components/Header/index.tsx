import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import {
  HeaderButtonsContainer,
  HeaderContainer,
  HeaderButton,
  HeaderNav,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderNav>
        <img src="src/assets/logo.svg" alt="app-logo" />
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </HeaderButtonsContainer>
      </HeaderNav>
    </HeaderContainer>
  )
}
