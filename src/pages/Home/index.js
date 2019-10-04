import React, { useState, useEffect } from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import { formatPrice } from '../../util/format';
import api from '../../services/api';
import { ProductList } from './styles';
import { addToCartRequest } from '../../store/modules/cart/actions';

export default function Home() {
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, prod) => {
      sumAmount[prod.id] = prod.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

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

          <button
            type="button"
            onClick={() => dispatch(addToCartRequest(prod.id))}
          >
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
