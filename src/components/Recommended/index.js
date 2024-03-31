import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
import { CiLocationOn } from "react-icons/ci";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css'; // Import CSS for styling

const Recommended = () => {
  const [recommendedShows, setRecommendedShows] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setRecommendedShows(data.events))
      .catch(error => console.error('Error fetching recommended shows:', error));
  }, []);

  const imageUrls = [
    '../recommended/Rectangle2.svg',
    '../recommended/Rectangle41.svg',
    '../recommended/Rectangle4-1.svg',
    '../recommended/Rectangle4.svg',
    '../recommended/Rectangle5-1.svg',
    '../recommended/Rectangle5-2.svg',
    '../recommended/Rectangle53.svg',
    '../recommended/Rectangle34.svg'
  ];

  return (
    <div className="recommended-section">
      <h3>Recommended Shows <span>&#8594;</span></h3>
      <div className="horizontal-slider">
        {recommendedShows.map((show, index) => (
          <div className='recommended-event' key={index}>
            <div className="image-background" style={{ backgroundImage: `url(${imageUrls[index]})`  }}>
              <div className="show-details">
                <div>
                <h4>{show.eventName}</h4>
                <p>{new Date(show.date).toDateString()}</p>
                </div>
                <div>
                <p><CiLocationOn/> {show.cityName}</p>
                <p>{show.weather} | {Math.floor(show.distanceKm)} km</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommended;
