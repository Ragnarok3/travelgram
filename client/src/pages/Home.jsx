import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MostViewed from "../components/MostViewed";
import "./Home.scss";

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/places?start=0&limit=20`);
        setPlaces(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPlaces();
  }, []);

  const fetchMoreData = async () => {
    if (!hasMore || loading) return;
    setLoading(true);

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/places?start=${places.length}&limit=20`);
      const newPlaces = response.data;

      setPlaces((prevPlaces) => [...prevPlaces, ...newPlaces]);

      if (newPlaces.length < 20) {
        setHasMore(false);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
      fetchMoreData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [places]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="home">
      <MostViewed places={places} />
      <div className="grid">
        {places.map((place) => (
          <div className="card" key={place._id}>
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
            <p>{place.description}</p>
            <Link to={`/place/${place._id}`} className="visit-btn">
              Visit
            </Link>
          </div>
        ))}
      </div>
      {loading && (
        <div className="loader">
          <div className="spinner"></div>
          <h4>Discovering new exciting places for you...</h4>
        </div>
      )}
    </div>
  );
};

export default Home;
