import React from "react";
import { useParams } from "react-router-dom";
import "./Details.scss";

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

const Details = () => {
  const { id } = useParams();
  const place = placesData.find((place) => place.id === parseInt(id));

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
