import { css, styled } from 'styled-components'

export const CoffeeShopDescriptionContainer = styled.div`
  background-image: url('src/assets/background.svg');
  backdrop-filter: blur(5px);
  display: flex;
  gap: 2rem;
  height: 574px;
  padding: 5.75rem auto;
  justify-content: center;
  align-items: center;
  width: 100%;

  span {
    font-size: ${({ theme }) => theme.textSizes['text-regular-l']};
  }
`

export const CoffeeShopDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 36.75rem;

  .description-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`
export const CoffeeShopInfosContainer = styled.div`
  display: grid;
  width: 100%;
  height: 5.25rem;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.2rem;
`
