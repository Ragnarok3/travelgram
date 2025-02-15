import React from "react";
import { useParams } from "react-router-dom";
import "./Activities.scss";

const generateActivities = (placeId) => {
  return [
    { id: 1, name: "Activity 1", description: "Description for Activity 1" },
    { id: 2, name: "Activity 2", description: "Description for Activity 2" },
    { id: 3, name: "Activity 3", description: "Description for Activity 3" },
    { id: 4, name: "Activity 4", description: "Description for Activity 4" },
    { id: 5, name: "Activity 5", description: "Description for Activity 5" }
  ];
};

const Activities = () => {
  const { id } = useParams();
  const activities = generateActivities(id);

  return (
    <div className="activities">
      <h1>Activities for Place {id}</h1>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
            <button className="book-btn">Book Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;