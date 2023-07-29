import { css, styled } from 'styled-components'

export const InfoIconContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  span {
    font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
  }
`

interface IInfoIconProps {
  iconColor: 'brand-yellow-dark' | 'base-text' | 'brand-yellow' | 'brand-purple'
}
export const IconContainer = styled.div<IInfoIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 25px;
  ${({ iconColor, theme }) => css`
    background: ${theme.colors[`${iconColor}`]};
    color: ${theme.colors['base-white']};
  `}
`
