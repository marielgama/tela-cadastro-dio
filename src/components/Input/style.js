import styled from "styled-components";

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

export const InputContainer = styled.div`
    display:flex;
    width:100%;
    max-width:275px;
    height:30px;
    border-bottom: 1px solid #3B3450;
    align-items:center;
    margin-bottom:20px;


    /* Media Query para Tablet */
    @media ${device.tablet} {  
        max-width:400px;
    }

    /* Media Query para Desktop */
    @media ${device.desktop} {
    }
`

export const IconContainer = styled.div`
    margin-right:10px;
    font-size: 24px;
`

export const InputText = styled.input`
    background-color:transparent;
    font-size: 16px;
    color:#fff;
    border:0;
    height:30px; 
`

export const ErrorText = styled.p`
    color: #E23DD7;
    font-size: 12px;
    margin:12px 0;
`