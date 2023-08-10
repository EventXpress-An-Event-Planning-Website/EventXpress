import React from "react";
import { GoPersonAdd } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";

function UsersMain() {
  return (
    <div className="mainUsers">
      <div className="userTop">
        <div className="bottomcolom">
          <GoPersonAdd size={45} /> New Requests <br />{" "}
          <span className="bottomNumbers">010</span>
        </div>
        <div className="bottomcolom">
          <FaRegUser size={45} /> Total Users <br />{" "}
          <span className="bottomNumbers">1782</span>{" "}
        </div>
        <div className="bottomcolom">
          <FaRegUser size={45} /> Service Providers <br />{" "}
          <span className="bottomNumbers">534</span>{" "}
        </div>
        <div className="bottomcolom">
          <HiOutlineUserGroup size={45} /> Customers <br />{" "}
          <span className="bottomNumbers">764</span>{" "}
        </div>
      </div>

      <div className="userMiddle">
        <button className="userMiddleButton">New Requests</button>
        <button className="userMiddleButton">Service Providers</button>
        <button className="userMiddleButton">Customers</button>
      </div>

      <div className="userRequestsBox">
        <table className="table">
          <tr className="tableRow">
            <td className="userTableContent">
              <GoPersonAdd size={45} style={{backgroundColor: "F4F1EF",color:"#6D004F"}} />
            </td>
            <td className="userTableContent"></td>
            <td className="userTableContent">
              MR. Naveen Periyasami Rajan , Hotel De Plaza has requested for
              registration
            </td>
            <td>
              <button className="viewButton" >View</button>
              <button className="viewButton">Cancel</button>
            </td>
          </tr>
          <tr className="tableRow">
            <td className="userTableContent">
              <GoPersonAdd size={45} style={{backgroundColor: "F4F1EF",color:"#6D004F"}} />
            </td>
            <td className="userTableContent"></td>
            <td className="userTableContent">
              MR. Naveen Periyasami Rajan , Hotel De Plaza has requested for
              registration
            </td>
            <td>
              <button className="viewButton" >View</button>
              <button className="viewButton">Cancel</button>
            </td>
          </tr>
          <tr className="tableRow">
            <td className="userTableContent">
              <GoPersonAdd size={45} style={{backgroundColor: "F4F1EF",color:"#6D004F"}} />
            </td>
            <td className="userTableContent"></td>
            <td className="userTableContent">
              MR. Naveen Periyasami Rajan , Hotel De Plaza has requested for
              registration
            </td>
            <td>
              <button className="viewButton" >View</button>
              <button className="viewButton">Cancel</button>
            </td>
          </tr>
          <tr className="tableRow">
            <td className="userTableContent">
              <GoPersonAdd size={45} style={{backgroundColor: "F4F1EF",color:"#6D004F"}} />
            </td>
            <td className="userTableContent"></td>
            <td className="userTableContent">
              MR. Naveen Periyasami Rajan , Hotel De Plaza has requested for
              registration
            </td>
            <td>
              <button className="viewButton" >View</button>
              <button className="viewButton">Cancel</button>
            </td>
          </tr>
          <tr className="tableRow">
            <td className="userTableContent">
              <GoPersonAdd size={45} style={{backgroundColor: "F4F1EF",color:"#6D004F"}} />
            </td>
            <td className="userTableContent"></td>
            <td className="userTableContent">
              MR. Naveen Periyasami Rajan , Hotel De Plaza has requested for
              registration
            </td>
            <td>
              <button className="viewButton" >View</button>
              <button className="viewButton">Cancel</button>
            </td>
          </tr>
          <tr className="tableRow">
            <td className="userTableContent">
              <GoPersonAdd size={45} style={{backgroundColor: "F4F1EF",color:"#6D004F"}} />
            </td>
            <td className="userTableContent"></td>
            <td className="userTableContent">
              MR. Naveen Periyasami Rajan , Hotel De Plaza has requested for
              registration
            </td>
            <td>
              <button className="viewButton" >View</button>
              <button className="viewButton">Cancel</button>
            </td>
          </tr>
          <tr className="tableRow">
            <td className="userTableContent">
              <GoPersonAdd size={45} style={{backgroundColor: "F4F1EF",color:"#6D004F"}} />
            </td>
            <td className="userTableContent"></td>
            <td className="userTableContent">
              MR. Naveen Periyasami Rajan , Hotel De Plaza has requested for
              registration
            </td>
            <td>
              <button className="viewButton" >View</button>
              <button className="viewButton">Cancel</button>
            </td>
          </tr>
          <tr className="tableRow">
            <td className="userTableContent">
              <GoPersonAdd size={45} style={{backgroundColor: "F4F1EF",color:"#6D004F"}} />
            </td>
            <td className="userTableContent"></td>
            <td className="userTableContent">
              MR. Naveen Periyasami Rajan , Hotel De Plaza has requested for
              registration
            </td>
            <td>
              <button className="viewButton" >View</button>
              <button className="viewButton">Cancel</button>
            </td>
          </tr>
          <tr className="tableRow">
            <td className="userTableContent">
              <GoPersonAdd size={45} style={{backgroundColor: "F4F1EF",color:"#6D004F"}} />
            </td>
            <td className="userTableContent"></td>
            <td className="userTableContent">
              MR. Naveen Periyasami Rajan , Hotel De Plaza has requested for
              registration
            </td>
            <td>
              <button className="viewButton" >View</button>
              <button className="viewButton">Cancel</button>
            </td>
          </tr>
          
        </table>
      </div>
    </div>
  );
}

export default UsersMain;
