import React from 'react';

import {
  Container,
  LogoWarpper,
  LogoIcon,
  SearchWrapper,
  SearchIcon,
  OfferWarpper,
  OfferIcon,
  AddressWarpper,
  LocationIcon,
  NavigationWarpper,
  ProfileMenuWarpper,
  ProfileIcon,
  NotificationIcon,
  CartIcon,
} from './styles';

function Header() {
  return (
    <Container>
      <LogoWarpper>
        <LogoIcon />
        <div>
          <p>Compre</p>
          <p>Fácil</p>
        </div>
      </LogoWarpper>

      <SearchWrapper>
        <input placeholder="Buscar categorias e prdutos..." />
        <SearchIcon />
      </SearchWrapper>

      <OfferWarpper>
        <OfferIcon />
        <span>Aprofeite preços incríveis todos os dias</span>
      </OfferWarpper>

      <AddressWarpper>
        <LocationIcon />
        <div>
          <p>Enviar para Nelza</p>
          <strong>Avenida do porto, 280</strong>
        </div>
      </AddressWarpper>

      <NavigationWarpper>
        <span>Roupas</span>
        <span>Calçados</span>
        <span>Utilitários</span>
      </NavigationWarpper>

      <ProfileMenuWarpper>
        <div>
          <ProfileIcon />
          <span className="more">Usuário</span>
        </div>
        <div>
          <span>Compras</span>
        </div>
        <div>
          <span className="more">Favoritos</span>
        </div>
        <div>
          <NotificationIcon />
        </div>
        <div>
          <CartIcon />
        </div>
      </ProfileMenuWarpper>
    </Container>
  );
}

export default Header;
