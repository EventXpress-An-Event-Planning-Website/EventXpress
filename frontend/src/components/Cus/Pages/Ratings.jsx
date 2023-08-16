import React from 'react';
// import './StarRating.css'; // Import your CSS file

const StarRating = ({ initialRating }) => {
    
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <=5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= initialRating ? 'filled' : 'empty'}`}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="star-rating">
      {renderStars()}
      {/* <p>{initialRating} out of 5 stars</p> */}
    </div>
  );
};

export default StarRating;
