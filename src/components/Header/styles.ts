import { css, styled } from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`

interface IHeaderButtonProps {
  variant: 'purple' | 'yellow'
}
export const HeaderButton = styled.button<IHeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px;
  min-width: 2.3rem;
  border: none;
  border-radius: 8px;

  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};
  `}

  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors[`brand-${variant}`]};
      }
    `}
`
