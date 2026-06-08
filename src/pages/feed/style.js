import styled from 'styled-components';


export const Container = styled.main`
    display: flex; 
    justify-content: space-between;
    align-items: center; 
    flex-direction:row;
    width: 100%;     
    max-width: 80%;
    margin: 120px auto;
`

export const Title = styled.h2`
    font-family: 'Open Sans', sans-serif; 
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    width:450px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #fff;
`

export const TitleHighLight = styled.h3`
    font-family: 'Open Sans', sans-serif; 
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    width:450px;
    margin-bottom: 24px;
    line-height: 25px;
    color: #ffffff70;
`
export const Column = styled.div` 
    flex:${({flex}) => flex};
    padding-right:24px;
`