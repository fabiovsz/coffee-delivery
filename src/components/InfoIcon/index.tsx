import { ReactNode } from 'react'
import { IconContainer, InfoIconContainer } from './styles'

interface IInfoIconProps {
  icon: ReactNode
  text: string | ReactNode
  iconColor: string
}
export function InfoIcon({ icon, text, iconColor }: IInfoIconProps) {
  return (
    <InfoIconContainer>
      <IconContainer iconColor={iconColor}>{icon}</IconContainer>
      {typeof text === 'string' ? <span>{text}</span> : text}
    </InfoIconContainer>
  )
}
