import styled from 'styled-components';

export const Root = styled.table`
width: 100%;
border-collapse: collapse;
color: #fff;
background-color: #484848;
border-radius: 14px;
&:last-child {
    
    border-bottom-right-radius: 14px;
}
&:first-child {
    border-top-left-radius: 14px;
   
}
`

export const Header = styled.thead``

export const Tr = styled.tr``

export const Th = styled.th`
padding: 16px;
text-align: left;
color: #484848;
border-bottom: 1px solid #e5e5e5;

`

export const Td = styled.td`
padding: 16px;
color: #484848;
font-weight: 500;
line-height: 115%;
`

export const Body = styled.tbody``