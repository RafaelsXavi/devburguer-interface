import {
  Container,
  HeaderLink,
  LinkContainer,
  Navigation,
  Options,
  Profile,
  Content,
} from './styles';

import { UserCircleIcon, ShoppingCartIcon } from '@phosphor-icons/react';

import {useNavigate, useResolvePath} from 'react-router-dom';

import {} =


export function Header() {

const navigate = useNavigate();

const {pathname} = useResolvePath();

function logoutUser (){


navigate('/login');
}

  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink to="/" $isActive={pathname === '/'}>Home</HeaderLink>
            <hr></hr>
            <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>Cardápio</HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserCircleIcon color="#fff" size={24} />
            <div>
              <p>
                Olá,<span>Rafinha</span>
              </p>
              <Logout onClick={logoutUser}>Sair</Logout>
            </div>
          </Profile>
          <LinkContainer>
            <ShoppingCartIcon color="#fff" size={24} />
            <HeaderLink>Carrinho</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
}
