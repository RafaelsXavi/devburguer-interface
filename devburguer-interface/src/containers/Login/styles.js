import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
`; 
export const LeftContainer = styled.div`
  flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`;

export const RightContainer = styled.div`
  flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e0e0e0;
`;
export const Title = styled.h1`
  font-size: 24px;
    margin-bottom: 20px;
`;
export const InputContainer = styled.div`
  display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`;

export const Link = styled.a`
  color: #007bff;
    text-decoration: none;
    margin-top: 10px;

    &:hover {
        text-decoration: underline;
    }
`;
