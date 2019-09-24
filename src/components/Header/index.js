import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Cart, Container } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="PotterStore" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My Cart</strong>
          <span>3 Itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
