import styled from 'styled-components';

export const EmptyCart = styled.p`
    padding: 20px;
    text-align: center;
    color: #666;
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    button {
       display: flex;
       aling-items:center;
       justify-content:center;
       width: 20px;
       height: 20px;
       border-radius: 50%;
       border: none;
       background-color: #9758a6;
       color: #fff;
       cursor: pointer;
       transition: background-color 0.2s ease-in-out;
       &:hover {
        background-color: #6f257c;
       }
    }
`;

export const ProductImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 5px;
`;

export const TrashIcon = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: #6f257c;
    }
`;
