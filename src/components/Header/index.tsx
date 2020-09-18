import React, { useState } from 'react';

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
import { Link, useHistory } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function Header() {
  const [searchText, setSearchText] = useState('');
  const { cartItemList } = useCart();

  const history = useHistory();
  const searchHandler = () => {
    history.push(`/product/?${searchText}`);
  };

  return (
    <Container>
      <LogoWarpper>
        <Link to="/">
          <LogoIcon />
          <div>
            <p>Compre</p>
            <p>Fácil</p>
          </div>
        </Link>
      </LogoWarpper>

      <SearchWrapper>
        <input
          placeholder="Buscar categorias e prdutos..."
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') searchHandler();
          }}
        />
        <SearchIcon onClick={searchHandler} />
      </SearchWrapper>

      <OfferWarpper>
        <OfferIcon />
        <span>Aprofeite preços incríveis todos os dias</span>
      </OfferWarpper>

      <AddressWarpper>
        <LocationIcon />
        <div>
          <p>Enviar para Nelza</p>
          <strong>Avenida dos pássaros, 28</strong>
        </div>
      </AddressWarpper>

      <NavigationWarpper>
        <Link to="/">Todos</Link>
        <Link to="/roupas">Roupas</Link>
        <Link to="/calcados">Calçados</Link>
        <Link to="/acessorios">Utilitários</Link>
        <Link to="/crud">CRUD</Link>
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
          <Link to="/cart">
            <span>{cartItemList.length}</span>
            <CartIcon />
          </Link>
        </div>
      </ProfileMenuWarpper>
    </Container>
  );
}

export default Header;
