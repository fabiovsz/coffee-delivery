import { coffees } from '../../../../coffees'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer, CoffeeListGridContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h1>Nossos Cafés</h1>
      <CoffeeListGridContainer>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeListGridContainer>
    </CoffeeListContainer>
  )
}
