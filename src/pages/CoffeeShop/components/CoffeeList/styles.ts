import { styled } from 'styled-components'

export const CoffeeListContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
`

export const CoffeeListGridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
`
