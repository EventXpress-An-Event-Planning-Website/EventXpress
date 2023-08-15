import React from "react";
import Sidebar from "../Sidebar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useViewPackageQuery } from "../../../slices/viewPackageSlice";
import { useLocation } from "react-router-dom";
import { Form, FormControl } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';

const FilterPackages = () => {

const cities = ["Select Location", "Colombo", "Galle", "Gampaha", "Kandy", "Matara"]; 

const [selectedCity, setSelectedCity] = useState("Select Location");

const handleCitySelect = (city) => {
    setSelectedCity(city);
};

//selecting according to ratings
const ratings = [1, 2, 3, 4, 5]; 

const [selectedRating, setSelectedRating] = useState("Select Rating No");

const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
};

//selecting according to price range
const priceRanges = [
    "Select price range",
    "LKR 10000 - LKR 40000",
    "LKR 40000 - LKR 50000",
    "LKR 50000 - LKR 70000",
    "LKR 70000 - LKR 80000",
    "LKR 80000 - LKR 100000"
]; // List of available price ranges

const [selectedPriceRange, setSelectedPriceRange] = useState("Select Price Range");

const handlePriceRangeSelect = (priceRange) => {
    setSelectedPriceRange(priceRange);
};

return (
<div style={{ "display": "flex" }}>
                            <span className="input-group-text all-text">All</span>

                            <Form className="pckg-search-bar">
                                <FormControl
                                    type="text"
                                    placeholder="Search for venues..."
                                // value={searchQuery}
                                // onChange={handleSearchChange}
                                />
                            </Form>

                            <Dropdown>

                                <Dropdown.Toggle className="location-dropdown">{selectedCity}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {cities.map(city => (
                                        <Dropdown.Item key={city} onClick={() => handleCitySelect(city)}>{city}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle className="location-dropdown">{selectedRating}</Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {ratings.map(rating => (
                                        <Dropdown.Item key={rating} onClick={() => handleRatingSelect(rating)}>
                                            {rating}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle className="location-dropdown">{selectedPriceRange}</Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {priceRanges.map(priceRange => (
                                        <Dropdown.Item key={priceRange} onClick={() => handlePriceRangeSelect(priceRange)}>
                                            {priceRange}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

    
)
};

export default FilterPackages;

