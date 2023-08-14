import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a className="active" href="#">
            <i className="fa fa-th-large"></i>
            <div>Dashboard</div>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-plus"></i>
            <div>Create Package</div>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-list-alt"></i>
            <div>My Package</div>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-calendar"></i>
            <div>Calendar</div>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-ticket"></i>
            <div>Buy Tickets</div>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-volume-control-phone"></i>
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
