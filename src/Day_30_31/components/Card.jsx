import React from 'react';

const Card = ({art}) => {
    return (
      <div className="card-component">
        <div className="art-image">
          <img src={art.Image} alt="" />
        </div>
        <div className="card-content">
          <h4>{art.Owner}</h4>
          <h5>{art.Name}</h5>
        </div>
      </div>
    );
}

export default Card;
