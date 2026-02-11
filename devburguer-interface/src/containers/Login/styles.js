import styled from 'styled-components';
import BackgroundLogo from '../../assets/background-logo.svg';
import Background from '../../assets/background.svg';

export const Container = styled.div`
  display: flex;
    height: 100vh;
    width: 100vw;
`; 


export const LeftContainer = styled.div`
background: url('${BackgroundLogo}');
background-size: cover;
background-position: center;


height: 100%;
width: 100%;
max-width: 50%;

display: flex;
align-items: center;
justify-content: center;
 
img {
    width: 80%;
    height: auto;
}
`;


export const RightContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

height: 100%;
width: 100%;
max-width: 50%;

background: url('${Background}');
`;


export const Title = styled.h2`

`;

export const Form = styled.form``;

export const InputContainer = styled.div``;

export const Button = styled.button``;

export const Link = styled.a`
  color: #007bff;
    text-decoration: none;
    margin-top: 10px;

    &:hover {
        text-decoration: underline;
    }
`;
