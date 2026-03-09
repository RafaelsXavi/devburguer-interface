import styled from "styled-components";
import BannerHome from "../../assets/banner-home.svg";
import Background from '../../assets/background.svg';

export const Banner = styled.div`
    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 300px;



    h1 {
    font-family: Road Rage, sans-serif;
    font-size: 48px;
    color: #fff;
    position: absolute;
    right: 20%;

}

`;

export const Content = styled.div`

`;

export const Container = styled.section`
background: linear-gradient(
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.8)
),
url('${Background}');
height: auto;
`;
