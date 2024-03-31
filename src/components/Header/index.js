import React, { useState } from 'react';

import { FaList } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import './style.css'


const Header = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    const handleCategoryClick = () => {
      setShowCategories(!showCategories);
    };
  
    const handleCategoryOptionClick = (category) => {
      setSelectedCategory(category);
      setShowCategories(false);
      // Perform any other actions based on the selected category
    };
  
    // Sample data for options
    const categoryOptions = [
      { label: "Recommended", value: "recommended" },
      { label: "Upcoming", value: "upcoming" }
    ];

    // Sample data for options

  const options = ["Live shows", "Streams", "Movies", "Plays", "Events", "Sports", "Activities"];

  return (
    <div>
       <header>
        <div className="logo">
          <h4>BookUsNow</h4>
        </div>
        <div className='search-section'>
          <button className='category-button' type='buttom' onClick={handleCategoryClick}> <FaList /> Categories</button>
          {showCategories && (
            <div className="sub-menu">
              {categoryOptions.map((option, index) => (
                <div key={index} onClick={() => handleCategoryOptionClick(option.value)}>
                  {option.label}
                </div>
              ))}
            </div>
          )}
          <div className="search-bar">
          <input type="text" placeholder="Search..."/>
          <button><CiSearch /></button>
        </div>
        </div>
        <div className='sign-in-section'>
          <a className='favorite' href="#"><IoMdHeart /> Favorites</a>
          <button className='sign-button' type='buttom'>Sign In</button>
        </div>
      </header>
      <main>
        {/* Add your main content here */}
        <div className="location-display">
          <CiLocationOn />
          <span>Mumbai, India {`>`} </span>
        </div>
          <ul className="options">
            {options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
      </main>
    </div>
  );
}

export default Header;
