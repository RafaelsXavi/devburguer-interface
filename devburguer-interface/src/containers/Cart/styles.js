import styled from "styled-components";

import texture from "../../assets/texture.svg";
import Background from '../../assets/background.svg';

export const Container = styled.div`
width: 100%;
background: linear-gradient(
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.8)
);
background: url("${Background}");
min-height: 100vh;


`;
export const Banner = styled.div`
background: url('${texture}');
display: flex;
justify-content: center;
align-items: center;
height: 180px;
background-size: cover;
background-position: center;
background-color: #1f1f1f;

img{
  width: 160px;
}


`;

export const Title = styled.h1`
font-weight: 800;
padding-bottom: 12px;
margin-top: 20px;
font-size: 24px;
color: #61a120;
text-align: center;
position: relative;

&::after{
  content: '';
  position: absolute;
  width: 50px;
    height: 2px;
    background-color: #61a120;
    bottom: 0px;
    left: calc(50% - 25px);
}
`;

export const Content = styled.div`
display: grid ;
grid-template-columns: 1fr 30%;
width: 100%;
max-width: 1200px;
padding: 20px;
margin: 0 auto;
gap: 20px;

`;


