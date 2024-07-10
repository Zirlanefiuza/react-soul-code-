import PropTypes from 'prop-types';
import './Card.css';

function Card({ image, title, label, rating, description }) {

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={`ri-star-fill Card-star ${i < rating ? 'filled' : 'empty'}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="Card">
      <div className="Card-image">
        <img src={image} alt={title} />
        <div className="Card-label-container">
          <div className="Card-label">{label}</div>
        </div>
      </div>
      <div className="Card-title">{title}</div>
      <div className="Card-rating">
        {rating.toFixed(1)} {}
        {renderStars()}
      </div>
      <div className="Card-description">{description}</div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Card;
