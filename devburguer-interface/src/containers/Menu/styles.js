import styled from "styled-components";
import BannerHamburguer from "../../assets/Banner-Menu.svg";
import Background from '../../assets/background.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`

width: 100%;
min-height: 100vh;
background-color: #f0f0f0;


background: linear-gradient(
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.8)
),
url('${Background}');
height: auto;
`

export const CategoryButton = styled(Link)`

text-decoration:none;
cursor: pointer;
background: none;
color: ${props => props.$isActiveCategory ? '#9758a6' : '#696969'};
font-size: 24px;
font-weight: 500;
padding-bottom: 5px;
line-height: 20px;
border: none;
border-bottom: ${(props) => props.$isActiveCategory && '4px solid #9758a6'};

`

export const Banner = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
position: relative;

background: url('${BannerHamburguer}') no-repeat;
background-color: #1f1f1f;
background-size: cover;
background-position: center;
height: 300px;

h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 48px;
    line-height: 60px;
    position: absolute;
    right: 20%;
    top: 30%;
    color: #fff;
}
span {
    display: block;
    color: #fff;
    font-size: 24px;
    
}
`;

export const CategoryMenu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 30px;

`;

export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
padding: 40px;
justify-content: center;
max-width: 1280px;
gap: 60px;
margin: 50px auto 0;

`;
