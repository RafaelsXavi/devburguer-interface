import {logo} from '../../assets';
import { Container, Banner,Title,Content } from './styles';



export function Cart() {

  return (

    <Container>

      <Banner>
        <img src={logo} alt="Logo do DevBurguer" />
      </Banner>

      <Title>Checkout - Pedido</Title>


      <Content>


        {/* <CartItems/>
        <CartResume/> */}

      </Content>

    </Container>
  );
}