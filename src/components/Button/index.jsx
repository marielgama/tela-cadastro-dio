import React from 'react'
import { ButtonContainer } from './style'

const Button = ({title, type = "button", variant="primary", onClick, disabled}) => {
  return (
   <ButtonContainer type={type} variant={variant} onClick={onClick} disabled={disabled}>
     {title}
   </ButtonContainer>
  )
}

export { Button }
