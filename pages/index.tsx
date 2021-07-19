import React from 'react'
import styled from 'styled-components'
import { MainButtonStyled } from '../src/styles/components/MainButton';
import LandingPage from './LandingPage/index';


const Home = () =>{
return (
    <PageContainerStyle>
        <LandingPageMenuStyle>
            <img src={'logo.png'} alt="" />
        </LandingPageMenuStyle>
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

export const PageContainerStyle = styled.div`

background-image: url('background.jpg');
background-repeat: no-repeat;
background-position: center;
background-size: cover;
min-height: 100vh;

display: flex;
flex-direction: column;

align-items: center;

`;

export const LandingPageMenuStyle = styled.div`


max-width: 610px;
width: 100%;

align-items: center;
img {
    width: 64px
    
  }
`;

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
