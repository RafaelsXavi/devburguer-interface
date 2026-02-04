import styled from 'styled-components';
import Background from '../../assets/background.svg';

export const Container = styled.div`
  display: flex;
    height: 100vh;
    width: 100vw;
`; 


export const LeftContainer = styled.div`
background: url('${Background}');
background-size: cover;
background-position: center;


height: 100%;
width: 100%;

display: flex;
align-items: center;
justify-content: center;
 
img {
    width: 60%;
    height: auto;
}
`;


export const RightContainer = styled.div``;


export const Title = styled.h2``;

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
