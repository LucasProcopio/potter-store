import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static-store.worldticket.com.br/store/images/196/70196_fdioffwrgv.jpg"
          alt="gryffindor"
        />
        <strong>Griffindor magic pillow</strong>
        <span>$29,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 2
          </div>

          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img
          src="https://static-store.worldticket.com.br/store/images/196/70196_fdioffwrgv.jpg"
          alt="gryffindor"
        />
        <strong>Griffindor magic pillow</strong>
        <span>$29,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 2
          </div>

          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img
          src="https://static-store.worldticket.com.br/store/images/196/70196_fdioffwrgv.jpg"
          alt="gryffindor"
        />
        <strong>Griffindor magic pillow</strong>
        <span>$29,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 2
          </div>

          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img
          src="https://static-store.worldticket.com.br/store/images/196/70196_fdioffwrgv.jpg"
          alt="gryffindor"
        />
        <strong>Griffindor magic pillow</strong>
        <span>$29,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 2
          </div>

          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img
          src="https://static-store.worldticket.com.br/store/images/196/70196_fdioffwrgv.jpg"
          alt="gryffindor"
        />
        <strong>Griffindor magic pillow</strong>
        <span>$29,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 2
          </div>

          <span>Add to cart</span>
        </button>
      </li>
    </ProductList>
  );
}
