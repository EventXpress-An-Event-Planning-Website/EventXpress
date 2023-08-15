import React from 'react';
import { FaPlus, FaCalendarAlt, FaListAlt, FaTicketAlt,FaPortrait, FaBars } from 'react-icons/fa';


function Sidebar() {
  return (
    <div className="spsidebar">
      <ul>
        <li>
          <a href="#">
            <FaBars className="sidebar-icon" />
            <div>Dashboard</div>
          </a>
        </li>
        <li>
          <a href="#">
            <FaPlus className="sidebar-icon" />
            <div>Create Package</div>
          </a>
        </li>
        <li>
          <a href="#">
            <FaListAlt className="sidebar-icon" />
            <div>My Package</div>
          </a>
        </li>
        <li>
          <a className="active" href="#">
            <FaCalendarAlt className="sidebar-icon" />
            <div>Calendar</div>
          </a>
        </li>
        <li>
          <a href="#">
            <FaTicketAlt className="sidebar-icon" />
            <div>Buy Tickets</div>
          </a>
        </li>
        <li>
          <a href="#">
            <FaPortrait className="sidebar-icon" />
            <div>Help</div>
          </a>
        </li>
        <br /><br /><br />
        <li>
          <a href="logout.php">
            <i className="fa fa-sign-out"></i>
            <div>Log out</div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
