import React, { children, useState } from "react";
import { FaBars, FaBirthdayCake, FaCamera, FaDrum, FaHotel, FaLightbulb, FaMusic, FaPizzaSlice, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/Venue",
            name: "Venue",
            icon: <FaHotel />
        },
        {
            path: "/Decoration",
            name: "Decoration",
            icon: <FaUserAlt />
        },
        {
            path: "/Catering",
            name: "Catering",
            icon: <FaPizzaSlice />
        },
        {
            path: "/Cake",
            name: "Cake",
            icon: <FaBirthdayCake />
        },
        {
            path: "/SoundAndLight",
            name: "SoundAndLight",
            icon: <FaLightbulb />
        },
        {
            path: "/Photography",
            name: "Photography",
            icon: <FaCamera />
        },
        ,
        // {
        //     path:"/Entertainment",
        //     name:"Entertainment",
        //     icon:<FaMusic/>
        // },
        {
            path: "/StageRental",
            name: "StageRental",
            icon: <FaDrum />
        }
    ]

    return (
        <div className="cusSidebar-Container" style={{ marginRight: isOpen ? "50px" : "100px" }}>
            <div style={{ marginTop: isOpen ? "-31.4px" : "0", width: isOpen ? "250px" : "50px" }} className="cusSidebar-sidebar">
                <div className="cusSidebar-top-section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="cusSidebar-logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "175px" : "13px", marginTop: isOpen ? "-70px" : "0px" }} className="cusSidebar-bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="cusSidebar-link" activeclassName="cusSidebar-active">
                            <div className="cusSidebar-icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="cusSidebar-link-text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main className="cusSidebar-main">{children}</main>
        </div>
    );
};

export default Sidebar;