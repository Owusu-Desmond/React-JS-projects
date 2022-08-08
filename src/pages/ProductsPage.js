import React from 'react';
import PropTypes from 'prop-types';
import '../css/products.css';
import Item from '../components/Product';

function productsPage({ items, onAddToCart }) {
  return (
    <div className="products-container">
      {
        items.map((item) => (
          <div key={item.id} className="product-card">
            <Item item={item}>
              <div className="product-button">
                <button type="button" onClick={() => onAddToCart(item)}>
                  Buy
                </button>
              </div>
            </Item>
          </div>
        ))
      }
    </div>
  );
}

productsPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    house: PropTypes.string,
    popularity: PropTypes.bool,
  })).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default productsPage;
