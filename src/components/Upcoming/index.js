import React, { useState, useEffect } from 'react';
import { CiLocationOn } from "react-icons/ci";
import './style.css'

const UpcomingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming')
      .then(response => response.json())
      .then(data => {
        // Check if API response is not empty and has events
        if (data.events && data.events.length > 0) {
          // Set upcoming events from API response
          setUpcomingEvents(data.events);
        } else {
          // Log an error if no events are found in API response
          console.error('No upcoming events found in API response');
        }
      })
      .catch(error => {
        // Log an error if there is any issue fetching data from the API
        console.error('Error fetching upcoming events:', error);
      });
  }, []);

  // Manually define an array of image URLs
  const imageUrls = [
    '../upcoming/Rectangle7.svg',
    '../upcoming/Rectangle9.svg',
    '../upcoming/Rectangle11.svg',
    '../upcoming/Rectangle15.svg',
    '../upcoming/Rectangle16.svg',
    '../upcoming/Rectangle17.svg',
    '../upcoming/Rectangle21.svg',
    '../upcoming/Rectangle22.svg',
    '../upcoming/Rectangle23.svg',
    '../upcoming/Rectangle37.svg',
    
  ];

  return (
    <div className="upcoming-section">
      <h3>Upcoming Events <span>&#8594;</span></h3>
      <div className="cards-container">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="card">
            {/* Render the image using the manually defined image URL */}
            <div className="upcoming-background" style={{ backgroundImage: `url(${imageUrls[index]})`  }}>
            <p>{new Date(event.date).toDateString()}</p>
            </div>
            <div className="card-details">
              <h4>{event.eventName}</h4>
              <div className='distance'>
              <p><CiLocationOn/> {event.cityName}</p>
              <p>{event.weather} | {Math.floor(event.distanceKm)} km</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;
