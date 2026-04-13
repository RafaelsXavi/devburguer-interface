import { Container, Banner, Title, Content } from './styles';

import logo from '../../assets/logo.svg';

import { CartItems, CartResume } from '../../components';



export function Cart() {

  return (

    <Container>

      <Banner>
        <img src={logo} alt="Logo do DevBurguer" />
      </Banner>

      <Title>Checkout - Pedido</Title>


      <Content>

        <CartItems />
        <CartResume />

      </Content>

    </Container>
  );
}