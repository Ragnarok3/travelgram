import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MostViewed from "../components/MostViewed";
import "./Home.scss";

const placesData = [
  { id: 1, name: "Beautiful Beach", image: "https://picsum.photos/id/1015/300/200", description: "A beautiful beach to relax.", activities: ["Swimming", "Sunbathing", "Beach Volleyball"], views: 120 },
  { id: 2, name: "Mountain View", image: "https://picsum.photos/id/1016/300/200", description: "A scenic mountain view.", activities: ["Hiking", "Photography", "Bird Watching"], views: 95 },
  { id: 3, name: "City Skyline", image: "https://picsum.photos/id/1018/300/200", description: "A stunning city skyline.", activities: ["Sightseeing", "Dining", "Shopping"], views: 150 },
  { id: 4, name: "Forest Path", image: "https://picsum.photos/id/1020/300/200", description: "A peaceful forest path.", activities: ["Hiking", "Nature Walks", "Wildlife Watching"], views: 80 },
  { id: 5, name: "Desert Dunes", image: "https://picsum.photos/id/1021/300/200", description: "Majestic desert dunes.", activities: ["Sandboarding", "Camel Riding", "Stargazing"], views: 110 },
  { id: 6, name: "Snowy Mountains", image: "https://picsum.photos/id/1031/300/200", description: "Snow-covered mountains.", activities: ["Skiing", "Snowboarding", "Snowshoeing"], views: 130 },
  { id: 7, name: "Sunny Beach", image: "https://picsum.photos/id/1041/300/200", description: "A sunny beach with clear water.", activities: ["Swimming", "Snorkeling", "Beach Volleyball"], views: 140 },
  { id: 8, name: "City Park", image: "https://picsum.photos/id/1051/300/200", description: "A beautiful city park.", activities: ["Jogging", "Picnicking", "Bird Watching"], views: 90 },
  { id: 9, name: "Countryside", image: "https://picsum.photos/id/1061/300/200", description: "A peaceful countryside.", activities: ["Cycling", "Horse Riding", "Photography"], views: 100 },
  { id: 10, name: "Lake View", image: "https://picsum.photos/id/1071/300/200", description: "A serene lake view.", activities: ["Boating", "Fishing", "Swimming"], views: 125 },
  // Add more places as needed
];

const generatePlaces = (startId, count) => {
  const generatedPlaces = [];
  for (let i = startId; i < startId + count; i++) {
    const place = placesData[(i - 1) % placesData.length];
    generatedPlaces.push({
      id: i,
      name: place.name,
      image: place.image,
      description: place.description,
    });
  }
  return generatedPlaces;
};

const Home = () => {
  const [places, setPlaces] = useState(generatePlaces(1, 8));
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchMoreData = () => {
    if (!hasMore || loading) return;
    setLoading(true);

    setTimeout(() => {
      const newPlaces = generatePlaces(places.length + 1, 20);
      setPlaces((prevPlaces) => [...prevPlaces, ...newPlaces]);

      if (places.length + newPlaces.length >= 150) { // Adjust the limit to 150
        setHasMore(false);
      }
      setLoading(false);
    }, 1500);
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

  return (
    <div className="home">
      <MostViewed places={placesData} />
      <div className="grid">
        {places.map((place) => (
          <div className="card" key={place.id}>
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
            <p>{place.description}</p>
            <Link to={`/place/${place.id}`} className="visit-btn">
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
