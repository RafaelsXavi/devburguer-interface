import { useContext, createContext, useEffect, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const putCartProducts = (product) => {

    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

    let newProductsIncart = [];

    if (cartIndex >= 0) {
      newProductsIncart = cartProducts;

      newProductsIncart[cartIndex].quantity += 1;

      setCartProducts(newProductsIncart);
    } else {
      product.quantity = 1;

      newProductsIncart = [...cartProducts, product];
      setCartProducts(newProductsIncart);
    }

    updateLocalStorage(newProductsIncart);
  };



  const clearCartProducts = () => {
    setCartProducts([]);
    updateLocalStorage([]);
  };

  const increaseProduct = (productId) => {
    const updatedCart = cartProducts.map((prd) => {
      return prd.id === productId
        ? { ...prd, quantity: prd.quantity + 1 } : prd;
    });
    setCartProducts(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const deleteProduct = (productId) => {
    const updatedCart = cartProducts.filter(
      (product) => product.id !== productId,
    );
    setCartProducts(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const decreaseProduct = (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const updatedCart = cartProducts.map((prd) => {
        return prd.id === productId
          ? { ...prd, quantity: prd.quantity - 1 } : prd;

      });
      setCartProducts(updatedCart);
      updateLocalStorage(updatedCart);

    } else {
      deleteProduct(productId);
    }
  };

  const updateLocalStorage = (Products) => {
    localStorage.setItem('devburguer:cartProducts', JSON.stringify(Products));
  };

  useEffect(() => {
    const storedCartProducts = localStorage.getItem('devburguer:cartProducts');
    if (storedCartProducts) {
      setCartProducts(JSON.parse(storedCartProducts));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        increaseProduct,
        putCartProducts,
        clearCartProducts,
        deleteProduct,
        decreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

