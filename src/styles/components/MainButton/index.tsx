import styled from 'styled-components'
export const MainButtonStyled = styled.button`
height: 40px;
width: 140px;
transition: 0.2s;
border: none;
border-radius: 20px;
cursor: pointer;
font-size: 15px;
font-family: sans-serif;
color: #aaa;

animation-duration: 3s;
  animation-name: zoom;
  animation-iteration-count: infinite;
&:hover{
    color: #ddd;
    background-color: #0603ca;
}
@keyframes zoom{
  0% {
    background-color: rgb(76, 55, 194);

  }

  50% {
    background-color: #0c0342;
  }
  100%{
    background-color: rgb(76, 55, 194);

  }
}
`;