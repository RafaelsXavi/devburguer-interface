import { Container } from './styles';
import { Button } from '../Button';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const { cartProducts, clearCart } = useCart();
  const [deliveryTax] = useState(500);

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);
    setFinalPrice(sumAllItems);
  }, [cartProducts]);

  const submitOrder = async () => {
    const products = cartProducts.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
      };
    });

    try {
      const { status } = await api.post(
        '/orders',
        { products },
        {
          validateStatus: () => true,
        },
      );
      if (status === 200 || status === 201) {
        setTimeout(() => {
          
          navigate('/');
        }, 2000);
        clearCart();
        toast.success('Pedido realizado com sucesso!');
      } else if (status === 409) {
        toast.error('Não foi possível realizar o pedido. Tente novamente.');
      } else {
        throw new Error('Unexpected error');
      }
    } catch (error) {
      toast.error('Ocorreu um erro inesperado. Tente novamente mais tarde.');
    }
  };

  return (
    <div>
      <Container>
        <div class="container-top">
          <h2 class="title">Resumo do Pedido</h2>
          <p class="items">Produtos</p>
          <p class="items-price">{formatPrice(finalPrice)}</p>
          <p class="delivery-tax">Taxa de entrega</p>
          <p class="delivery-tax-price">{formatPrice(deliveryTax)}</p>
        </div>
        <div class="container-bottom">
          <p>Total</p>
          <p>{formatPrice(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button Onclick={submitOrder}>Finalizar Pedido</Button>
    </div>
  );
}
