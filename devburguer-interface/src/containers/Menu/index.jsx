
import { Banner, Container, CategoryMenu, ProductsContainer } from './styles';


export function Menu() {
    
  return (

    <Container>

      <Banner>
        <h1>
            
          O MELHOR
          <br />
          HAMBURGUER
          <br />
          DO MUNDO !

          <span>O melhor hamburguer voce encontra aqui</span>
        </h1>
        
      </Banner>

      <CategoryMenu></CategoryMenu>

      <ProductsContainer></ProductsContainer>

    </Container>
  );
}
