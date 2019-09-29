import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MdShoppingBasket } from 'react-icons/md';
import { Cart, Container } from './styles';
import logo from '../../assets/images/logo.png';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/" className="home-link">
        <img src={logo} alt="PotterStore" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My Cart</strong>
          <span>{cartSize} Itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

Header.propTypes = {
  cartSize: PropTypes.number.isRequired,
};

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
