import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(prod => ({
      ...prod,
      formattedSubtotal: formatPrice(prod.price * prod.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, prod) => {
        return sumTotal + prod.price * prod.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th> </th>
            <th>PRODUCT</th>
            <th>QTY</th>
            <th>SUBTOTAL</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {cart.map(prod => (
            <tr key={prod.id}>
              <td>
                <img src={prod.image} alt={prod.title} />
              </td>
              <td>
                <strong>{prod.title}</strong>
                <span>{prod.formattedPrice}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(prod)}>
                    <MdRemoveCircleOutline size={20} color="#9a1c1f" />
                  </button>
                  <input type="number" readOnly value={prod.amount} />
                  <button type="button" onClick={() => increment(prod)}>
                    <MdAddCircleOutline size={20} color="#9a1c1f" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{prod.formattedSubtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => dispatch(CartActions.removeFromCart(prod.id))}
                >
                  <MdDelete size={20} color="#9a1c1f" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finish order</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
