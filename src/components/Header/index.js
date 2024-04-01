import React, { useState, useEffect } from 'react';
import { FaList } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import './style.css'

const Header = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

    const handleCategoryClick = () => {
        setShowCategories(!showCategories);
    };

    const handleCategoryOptionClick = (category) => {
        setSelectedCategory(category);
        setShowCategories(false);
        // Perform any other actions based on the selected category
    };

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 992);
    };

    // Sample data for options
    const categoryOptions = [
        { label: "Recommended", value: "recommended" },
        { label: "Upcoming", value: "upcoming" }
    ];

    // Sample data for options
    const options = ["Live shows", "Streams", "Movies", "Plays", "Events", "Sports", "Activities"];

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <header>
                <div className="logo">
                    <h4>BookUsNow</h4>
                </div>
                <div className='search-section'>
                    <button className='category-button' type='button' onClick={handleCategoryClick}> <FaList /> Categories</button>
                    {showCategories && (
                        <div className="sub-menu">
                            {categoryOptions.map((option, index) => (
                                <div key={index} onClick={() => handleCategoryOptionClick(option.value)}>
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    )}
                    {isSmallScreen ? (
                        <div className="icon-wrapper">
                            <CiSearch />
                            <IoMdHeart />
                            <IoMdPerson />
                        </div>
                    ) : (
                        <div className="search-bar">
                            <input type="text" placeholder="Search..." />
                            <button><CiSearch /></button>
                        </div>
                    )}
                </div>
                {!isSmallScreen && (
                    <div className='sign-in-section'>
                        <p className='favorite'><IoMdHeart /> Favorites</p>
                        <button type='button' className='sign-button'>Sign In</button>
                    </div>
                )}
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
        </>
    );
}

export default Header;
