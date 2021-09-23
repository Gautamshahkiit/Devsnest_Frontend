import React from 'react'

const CategoryCard = ({art}) => {
    return (
      <div className="category-card">
        <div className="catCard">
          <img src={art.Image} alt="" />
        </div>
        <h4>{art.Category}</h4>
      </div>
    );
}

export default CategoryCard;
