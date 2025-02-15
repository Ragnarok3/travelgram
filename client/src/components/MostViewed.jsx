import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MostViewed.scss";

const MostViewed = ({ places }) => {
  const sortedPlaces = [...places].sort((a, b) => b.views - a.views);

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
          slidesToScroll: 1,
          initialSlide: 2
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

  return (
    <div className="most-viewed">
      <h2>Most Viewed Places</h2>
      <Slider {...settings}>
        {sortedPlaces.map((place) => (
          <div className="card" key={place.id}>
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
            <p>{place.description}</p>
            <Link to={`/place/${place.id}`} className="visit-btn">
              Visit
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MostViewed;