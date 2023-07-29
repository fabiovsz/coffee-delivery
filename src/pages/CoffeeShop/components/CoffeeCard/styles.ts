import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.div`
  margin-top: 3.375rem;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px;
  width: 16rem;
  height: 19.4rem;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: ${({ theme }) => theme.textSizes['title-title-s']};
    font-family: ${({ theme }) => theme.fonts.title};
  }
  p {
    text-align: center;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors['base-label']};
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
    padding: 0 20px;
  }

  img {
    margin-top: -2rem;
  }
`

export const CoffeeTypeLabels = styled.div`
  max-width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;

  span {
    padding: 4px 8px;
    text-align: center;
    border-radius: 16px;
    height: 21px;
    background: ${({ theme }) => theme.colors['brand-yellow-light']};
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    font-size: ${({ theme }) => theme.textSizes['components-button-s']};
    font-weight: 600;
    text-transform: uppercase;
  }
`

export const CoffeeCardFooter = styled.div`
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  margin-top: 2rem;
  display: flex;
  align-items: center;
  span {
    margin-left: 2px;
    color: ${({ theme }) => theme.colors['base-text']};
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.textSizes['title-title-m']};
  }
`

export const QuantityButton = styled.div`
  margin-left: 1.4rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors['base-button']};
  height: 38px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.colors['brand-purple-dark']};
  }
`

export const CartButton = styled.div`
  margin-left: 0.5rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors['brand-purple-dark']};
  border-radius: 6px;
  svg {
    color: ${({ theme }) => theme.colors['base-white']};
  }
`
