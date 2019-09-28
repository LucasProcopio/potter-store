import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { formatPrice } from '../../util/format';
import api from '../../services/api';
import { ProductList } from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const results = await api.get('products');

    const data = results.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(prod => (
          <li key={prod.id}>
            <img src={prod.image} alt={prod.title} />
            <strong>{prod.title}</strong>
            <span>{prod.formattedPrice}</span>

            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#FFF" /> 2
              </div>

              <span>Add to cart</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

export default Home;
