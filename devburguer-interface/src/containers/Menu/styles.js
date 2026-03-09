import styled from "styled-components";
import BannerHamburguer from "../../assets/Banner-Menu.svg";

export const Container = styled.div`

width: 100%;
min-height: 100vh;
background-color: #f0f0f0;

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
`

export const CategoryMenu = styled.div``

export const ProductsContainer = styled.div``
