import PropTypes from 'prop-types';
import './ProductCard.css';

function ProductCard({ name, unitPrice, discount }) {
    const discountedPrice = unitPrice - (unitPrice * (discount / 100));
  
    return (
      <div className="product-card">
        <h2 className="product-name">{name}</h2>
        {discount > 0 ? (
          <>
            <p className="original-price">R$ {unitPrice.toFixed(2)}</p>
            <p className="discounted-price">R$ {discountedPrice.toFixed(2)}</p>
            <p className="discount-percentage">{discount}% OFF</p>
          </>
        ) : (
          <p className="unit-price">R$ {unitPrice.toFixed(2)}</p>
        )}
      </div>
    );
  }
  
  ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
  };
  
  export default ProductCard;