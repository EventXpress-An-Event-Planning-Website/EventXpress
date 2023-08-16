import { useState } from "react";
import { FaPlus, FaCalendarAlt, FaListAlt, FaTicketAlt,FaPortrait, FaBars, FaBell } from 'react-icons/fa';
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
            path: "/serviceProvider/availability",
            name: "Calendar",
            icon: <FaCalendarAlt />
        },
        {
            path: "/ServiceProvider/profile",
            name: "Profile",
            icon: <FaPortrait />
        },
        {
            path: "/ServiceProvider/Requests",
            name: "Request",
            icon: <FaBell />
        }
    ]

    return (
        <div className="spSidebar-Container" style={{marginRight: isOpen ? "4%" : "0"}}>
            <div style={{width: isOpen ? "100%" : "100%", marginTop: isOpen? "-12%":"10px"}} className="spSidebar-sidebar">
                <div className="spSidebar-top-section">
                    <h1 style={{display: isOpen ? "block" : "none" }} className="spSidebar-logo"></h1>
                    <div style={{marginLeft: isOpen ? "175px" : "13px", marginTop: isOpen ? "-70px" : "10px" }} className="spSidebar-bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="spSidebar-link" activeclassName="spSidebar-active">
                            <div className="spSidebar-icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="spSidebar-link-text">{item.name}</div>
                        
                        </NavLink>
                    ))
                }
            </div>
            <main className="spSidebar-main">{children}</main>
        </div>
    );
};

export default Sidebar;