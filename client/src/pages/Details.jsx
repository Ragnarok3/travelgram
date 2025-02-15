import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Details.scss";

const Details = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/places/${id}`);
        setPlace(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlace();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!place) {
    return <div>Place not found</div>;
  }

  return (
    <div className="details">
      <div className="details-card">
        <h1>{place.name}</h1>
        <img src={place.image} alt={place.name} />
        <p>{place.description}</p>
        <h3>Activities to do:</h3>
        <ul>
          {place.activities && place.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
