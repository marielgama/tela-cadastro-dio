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

export const ImgMobile = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 20px;

    /* Media Query para Tablet */
    @media ${device.tablet} {  
        
    }

    /* Media Query para Desktop */
    @media ${device.desktop} {
       display:none;
    }
`

export const ImgDesktop = styled.div`
    display:none;  

    /* Media Query para Tablet */
    @media ${device.tablet} {
        
    }

    /* Media Query para Desktop */
    @media ${device.desktop} {
       display:flex;
    }
`

export const Container = styled.main`
        flex-direction:column;
        justify-content:center;
        display: flex; 
        align-items: center; 
        width: 100%;
        margin: 120px auto;

    /* Media Query para Tablet */
    @media ${device.tablet} {
        flex-direction:column;
        width: 100%;
    }

    /* Media Query para Desktop */
    @media ${device.desktop} {
        flex-direction:row;
        justify-content:space-around;
        align-items:flex-start;
    }
`

export const Title = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    width:320px;
    line-height: 44px;
    color: #fff;
    margin-bottom:20px;
    margin-top:20px;


    /* Media Query para Tablet */
    @media ${device.tablet} {
        flex-direction:column;
        width: 100%;
        width:320px;
    }

    /* Media Query para Desktop */
    
    @media ${device.desktop} {
        max-width:380px;
        width:100%;
        font-size: 40px;
        line-height: 44px;
    }
`

export const TitleHighLight = styled.span`
    font-size: 34px;
    color: #E4105D;

    /* Media Query para Tablet */
    @media ${device.tablet} {  
    }

    /* Media Query para Desktop */
    @media ${device.desktop} {
        font-size: 40px;
    }
`

export const TextContent = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    width:320px;
    margin: 20px auto;
    line-height: 22px;
    color: #fff;
    text-align: left;
    

    /* Media Query para Tablet */
    @media ${device.tablet} {
    }

    /* Media Query para Desktop */
    @media ${device.desktop} {
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        width:380px;
        margin-bottom: 20px;
        line-height: 24px;
        color: #fff;
    }
`


