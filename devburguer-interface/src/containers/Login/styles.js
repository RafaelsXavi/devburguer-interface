import styled from 'styled-components';
import Background from '../../assets/background.svg';
import logo from '../../assets/Logo.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;


export const LeftContainer = styled.div`
background: url('${logo}');
background-size: cover;
background-position: center;


height: 100%;
width: 50%;

display: flex;
align-items: center;
justify-content: center;
 
img {
    width: 100%;
    height: auto;
}
`;


export const RightContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

height: 100%;
width: 50%;

background: url('${Background}');
background-color: #1e1e1e;
p {
  color: #fff;
font-size: 16px;
font-weight: 500;
}

`;


export const Title = styled.h2`
font-family: 'Road Rage', sans-serif;
font-size: 40px;
color: #fff;

span {
    color: #9758a6;
    font-family: 'Road Rage', sans-serif;
}


`;

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
width: 100%;
max-width: 400px;
align-items: center;
justify-content: center;

`;

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
width: 100%;

input {
  width: 100%;
  border: none;
  height: 52px;
  border-radius: 8px;
  padding: 0 15px;

}

label {
  font-size: 18px;
  font-weight: 500;
  color: #fff;
}

`;

export const Button = styled.button`


`;

export const Link = styled.a`
  color: #007bff;
    text-decoration: none;
    margin-top: 10px;

    &:hover {
        text-decoration: underline;
    }
`;
