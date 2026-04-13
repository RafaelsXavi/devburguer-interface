import { Table } from '../index';

import { useCart } from '../../hooks/CartContext';
import TrashIcon from '../../assets/trash.svg';
import { ButtonGroup, EmptyCart, ProductImage } from './styles';
import { formatPrice } from '../../utils/formatPrice';



export function CartItems() {

    const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } = useCart();

    return (

        <Table.Root>

            <Table.Header>

                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Valor Unitário</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>

            </Table.Header>

            <Table.Body>

                {cartProducts?.length ?

                    (cartProducts.map(product => (
                        <Table.Tr key={product.id}>
                            <Table.Td>
                                <ProductImage src={product.url} alt={product.name} />
                            </Table.Td>
                            <Table.Td>{product.name}</Table.Td>
                            <Table.Td>{product.currencyValue}</Table.Td>
                            <Table.Td>
                                <button onClick={() => decreaseProduct(product.id)}>-</button>
                                <ButtonGroup>{product.quantity}</ButtonGroup>
                                <button onClick={() => increaseProduct(product.id)}>+</button>
                            </Table.Td>
                            <Table.Td>{formatPrice(product.quantity * product.price)}</Table.Td>
                            <Table.Td>
                                <TrashIcon
                                    src={TrashIcon}
                                    alt="Lixeira"
                                    onClick={() =>
                                        deleteProduct(product.id)
                                    } />
                            </Table.Td>
                        </Table.Tr>
                    ))
                    ) : <EmptyCart>Carrinho Vazio</EmptyCart>}

            </Table.Body>

        </Table.Root>

    )
}