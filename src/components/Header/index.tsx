import React from 'react';

import {
  Container,
  Warpper,
  Column,
  Row,
  Logo,
  SearchBar,
  SearchIcon,
  ProfileData,
  ProfileIcon,
  CartIcon,
} from './styles';

function Header() {
  return (
    <Container>
      <Warpper>
        <Column>
          <Row>
            <Logo>Compre Fácil</Logo>
            <SearchBar>
              <input placeholder="Buscar categorias e prdutos..." />
              <SearchIcon />
            </SearchBar>
            <ProfileData>
              <ProfileIcon />
              <div>
                <span>Entre ou cadastre-se</span>
                <span>Meus Pedidos</span>
              </div>
              <CartIcon />
            </ProfileData>
          </Row>
        </Column>
      </Warpper>
    </Container>
  );
}

export default Header;
