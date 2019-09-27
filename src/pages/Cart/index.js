import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QTY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static-store.worldticket.com.br/store/images/196/70196_fdioffwrgv.jpg"
                alt="potter pillow"
              />
            </td>
            <td>
              <strong>Awesome potter magic pillow</strong>
              <span>$29,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#9a1c1f" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#9a1c1f" />
                </button>
              </div>
            </td>
            <td>
              <strong>$60,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#9a1c1f" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finish order</button>

        <Total>
          <span>TOTAL</span>
          <strong>$300,50</strong>
        </Total>
      </footer>
    </Container>
  );
}
