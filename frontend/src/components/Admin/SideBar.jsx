import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { BiMessageAlt } from "react-icons/bi";
import { BiDollar } from "react-icons/bi";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiPackage } from "react-icons/bi";
import { GoStack } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

function SideBar(props) {
  const a = props.value;
  const b = parseInt(a);  //convert string to int

  switch (b) {
    case 1:
      return (
        <div>
          <div class="sidebar">
            <Link to="/adminDashboard" className="active">
              <span className="iconSize">
                <BsFillGridFill size={25} />
              </span>
              Dashboard
            </Link>
            <Link to="/Users">
                <span className="iconSize">
                  <HiOutlineUsers size={25} />
                </span>
                Users
            </Link>
            <a href="#contact">
              <span className="iconSize">
                <BiMessageAlt size={25} />
              </span>
              Notifications
              </a>
              <Link to="/TicketSupports">
              <span className="iconSize">
                <GoStack size={25} />
              </span>
              Complains & Supports
            </Link>
            <a href="#contact">
              <span className="iconSize">
                <BiDollar size={25} />
              </span>
              Revenue
            </a>
            <a href="#contact">
              <span className="iconSize">
                <BiHomeAlt2 size={25} />
              </span>
              Events
            </a>
            <a href="#contact">
              <span className="iconSize">
                <BiPackage size={25} />
              </span>
              Package Request
            </a>
            <div className="logOut">
              <a href="#contact">
                <span className="iconSize">
                  <IoIosLogOut size={25} />
                </span>
                Log out
              </a>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div>
          
        </div>
      );
  }
}

export default SideBar;
