import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ place }) => {
  return (
    <div className="card">
      <img src={place.img} alt={place.name} />
      <h3>{place.name}</h3>
      <p>{place.desc}</p>
      <Link to={`/place/${place.id}`} className="visit-btn">
        Visit
      </Link>
    </div>
  );
};

export default Card;
