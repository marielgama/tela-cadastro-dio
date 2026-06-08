import React from 'react'
import { InputContainer, IconContainer, InputText, ErrorText } from './style';
import { Controller } from "react-hook-form"

const Input = ({leftIcon, name, control, errorMessage, ...rest}) => {   // ...rest-> é o restante das
    // propiedades que forem necessárias para o componente, ou seja, não precisa ser obrigatória.
  return (
    <>
      <InputContainer>
          {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
          <Controller
            name={name}
            control={control}
            render={({ field }) => <InputText {...field} {...rest} />} 
          />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
    
  )
}

export { Input };
