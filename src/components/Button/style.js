import styled, { css } from 'styled-components';

// 1. Definindo os endpoints de forma organizada
const breakpoints = {
  tablet: '768px',
  desktop: '1024px',
};

// 2. Criando uma função auxiliar (opcional, mas recomendada)
const device = {
  tablet: `(min-width: ${breakpoints.tablet})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
};

// ........................................................ //


export const ButtonContainer = styled.button`
  font-size: 16px; 
  font-weight: 700;
  width:100%;
  background:#565656;
  border-radius: 22px;
  position:relative;
  color:#fff;
  padding: 2px 12px;
  min-width:100px;
  

  /* Media Query para Tablet */
  @media ${device.tablet} {      
  }

  /* Media Query para Desktop */
  @media ${device.desktop} {
  width:60%;
  }
   

  ${(variant) => variant !== 'primary' && css `
    background: #E4105D;
    min-width: 100px;
    height: 33px;

    &:hover{
      opacity: 0.8;
      cursor:pointer;
    }

    &::after {
      content: '';
      position: absolute;
      border: 1px solid #E4105D;
      top: -5px;
      left: -6px;
      width:calc(100% + 10px);
      height:calc(100% + 10px);
      border-radius: 22px; 
      }
  `}

`
