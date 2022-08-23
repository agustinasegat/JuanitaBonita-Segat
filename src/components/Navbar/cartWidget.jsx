import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './cartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} size="3x" color="#F50F6B" padding="20px" />
      <div className="item-numbers">0</div>
    </div>
  );
};

export default CartWidget;