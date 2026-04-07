import PropTypes from 'prop-types';

import { useCart } from '../../hooks/CartContext';
import { Container } from '../OffersCarousel/styles';
import { CartButton } from '../CartButton';

export function CardProduct({ product }) {
  
const { putCartProducts } = useCart();

  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />

      <div>
        <p>{product.name}</p>
        <strong>{product.currencyValue}</strong>

      </div>

      <CartButton onClick={() => putCartProducts(product)}></CartButton>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};
