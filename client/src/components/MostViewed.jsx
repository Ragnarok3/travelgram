import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./MostViewed.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MostViewed = ({ places }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  };

  return (
    <div className="most-viewed">
      <h2>Most Viewed Places</h2>
      <Slider {...settings}>
        {places.slice(0, 8).map((place) => (
          <div className="card" key={place._id}>
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
            <p>{truncateText(place.description, 50)}</p>
            <Link to={`/place/${place._id}`} className="visit-btn">
              Visit
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MostViewed;