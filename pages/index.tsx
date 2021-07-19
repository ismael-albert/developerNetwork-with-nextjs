import React from 'react'
import styled from 'styled-components'
import { MainButtonStyled } from '../src/styles/components/MainButton';
import { PageContainerStyle } from '../src/styles/components/Page-container';
import { PageMenuStyle } from '../src/styles/components/page-menu-container';


const Home = () =>{
return (
    <PageContainerStyle>
        <PageMenuStyle>
            <img src={'logo.png'} alt="" />
        </PageMenuStyle>
        <LandingPageBodyStyled>
            <h1>Encontre devs que cruzaram seu caminho</h1>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum enim ullam alias. Modi quisquam neque dolores tenetur velit.</h3>
            <MainButtonStyled>
                ENTRAR
            </MainButtonStyled>
        </LandingPageBodyStyled>
    </PageContainerStyle>
    )
};

export default Home;





export const LandingPageBodyStyled = styled.div`


max-width: 610px;
width: 90%;
height: 70vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  h1, h3{
      color: #eee;
      font-family: sans-serif;
  }

`;
