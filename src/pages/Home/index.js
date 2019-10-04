import React, { useState, useEffect } from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { formatPrice } from '../../util/format';
import api from '../../services/api';
import { ProductList } from './styles';
import * as CartActions from '../../store/modules/cart/actions';

function Home({ addToCartRequest, amount }) {
  const [products, setProductsState] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line func-names
    (async function() {
      const results = await api.get('products');

      const data = results.data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));
      setProductsState(data);
    })();
  }, []);

  return (
    <ProductList>
      {products.map(prod => (
        <li key={prod.id}>
          <img src={prod.image} alt={prod.title} />
          <strong>{prod.title}</strong>
          <span>{prod.formattedPrice}</span>

          <button type="button" onClick={() => addToCartRequest(prod.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />{' '}
              {amount[prod.id] || 0}
            </div>

            <span>Add to cart</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

Home.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
  amount: PropTypes.objectOf(PropTypes.number).isRequired,
};

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, prod) => {
    amount[prod.id] = prod.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
