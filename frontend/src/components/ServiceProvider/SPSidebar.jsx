import { children, useState } from "react";
// import { FaBars, FaBirthdayCake, FaCamera, FaDrum, FaHotel, FaLightbulb, FaPizzaSlice, FaUserAlt } from "react-icons/fa";
import { FaPlus, FaCalendarAlt, FaListAlt, FaTicketAlt,FaPortrait, FaBars } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/ServiceProvider/packageForm",
            name: "Create Package",
            icon: <FaPlus />
        },
        {
            path: "/ServiceProvider/packagesView",
            name: "My Packages",
            icon: <FaListAlt />
        },
        {
            path: "/customer/buyTickets",
            name: "Buy Tickets",
            icon: <FaTicketAlt />
        },
        {
            path: "/ServiceProvider/calendar",
            name: "Calendar",
            icon: <FaCalendarAlt />
        },
        {
            path: "/ServiceProvider/profile",
            name: "profile",
            icon: <FaPortrait />
        }
    ]

    return (
        <div className="cusSidebar-Container" style={{marginRight: isOpen ? "50px" : "100px"}}>
            <div style={{width: isOpen ? "250px" : "50px", marginTop: isOpen? "-31.5px":"0px"}} className="cusSidebar-sidebar">
                <div className="cusSidebar-top-section">
                    <h1 style={{display: isOpen ? "block" : "none" }} className="cusSidebar-logo"></h1>
                    <div style={{marginLeft: isOpen ? "175px" : "13px", marginTop: isOpen ? "-70px" : "0px" }} className="cusSidebar-bars">
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