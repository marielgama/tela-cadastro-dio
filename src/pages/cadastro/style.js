import styled from 'styled-components';

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


export const Container = styled.main`
    display: flex; 
    justify-content: space-between;
    align-items: center; 
    flex-direction:column;
    width: 100%;
    max-width: 80%;
    margin: 120px auto;

    /* Media Query para Tablet */
    @media ${device.tablet} {
        flex-direction:column;
        width: 100%;
        max-width: 100%;
    }

    /* Media Query para Desktop */
    @media ${device.desktop} {
        flex-direction:row;
        justify-content:space-evenly;
        align-items:flex-start;
    }
`

export const Title = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 20px;
    color: #fff;
    width:300px;
    font-size: 34px;
    line-height: 36px;
    text-align: left;


    /* Media Query para Tablet */
    @media ${device.tablet} {
        width:500px;
        line-height: 46px;
    }

    /* Media Query para Desktop */
    @media ${device.desktop} {
        max-width:380px;
        width:100%;
        font-size: 38px;
        line-height: 44px;
    }  
`
   
export const TitleLogin = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    width:300px;
    font-size: 24px;
    line-height: 32px;
    text-align: left;
    margin-bottom: 10px;
    margin-top: 30px;

    /* Media Query para Tablet */
    @media ${device.tablet} {
    }

    /* Media Query para Desktop */
    @media ${device.desktop} {
        font-size: 32px;
        line-height: 16px;
        margin-bottom: 20px; 
        width:100%;
        margin-top: 14px;
    }
`


export const SubTitleLogin = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 35px;
    line-height: 16px;
    font-size: 16px;
    
    /* Media Query para Tablet */
    @media ${device.tablet} { 
    }

    /* Media Query para Desktop */
    @media ${device.desktop} {
       line-height: 25px;
       font-size: 18px;
    }
`

export const EsqueciText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    color: #E5E044;
`

export const CriarText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    color: #E23DD7;
`

export const CriarContaText = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    color: #ffffff;
    font-size: 14px; 
    
    /* Media Query para Tablet */
    @media ${device.tablet} {
    }

    /* Media Query para Desktop */
    @media ${device.desktop} {
       font-size: 12px;
       max-width: 380px;
    }
`

export const LinkFazerLogin = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
    cursor: pointer;
    color: #02d742;
    font-size: 14px; 
      
    /* Media Query para Tablet */
    @media ${device.tablet} {
    }

    /* Media Query para Desktop */
    @media ${device.desktop} {
       font-size: 10px;
    }
`


export const Wrapper = styled.div`
    max-width:360px;

    /* Media Query para Tablet */
    @media ${device.tablet} {  
        max-width:500px;
    }

    /* Media Query para Desktop */
    @media ${device.desktop} {
    }
    
`

export const Column = styled.div`
    display:flex;

    /* Media Query para Tablet */
    @media ${device.tablet} { 
        flex-direction:column;  
    }

    /* Media Query para Desktop */
    @media ${device.desktop} {
    }
`
export const Row = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    margin-top:20px;
`

export const TextContent = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    width:420px;
    margin-bottom: 20px;
    line-height: 22px;
    color: #fff;
`
