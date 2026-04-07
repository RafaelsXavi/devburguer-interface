import { createBrowserRouter } from 'react-router-dom';

import { Cart, Home, Login,Menu,Register } from '../containers';


export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cardapio',
    element: <Menu />,
  },
  {
    path: '/carrinho',
    element: <Cart />,
  },
]);
