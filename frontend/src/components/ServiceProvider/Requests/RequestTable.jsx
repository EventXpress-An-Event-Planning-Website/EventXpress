import pic from '../../../assets/images/djfes.jpg';
import { FaSearch, FaPaperPlane } from 'react-icons/fa'; // Import necessary icons
import { BsFillPersonFill } from 'react-icons/bs';
import React from "react";



const RequestTable = () => {
    return (
        <>
          <div className="chat-container">
      <div className="chat-sidebar">
        <div className="search-input">
        <span className="search-icon">
              <FaSearch /> {/* Use the FaSearch icon */}
            </span>
          <input
            className="search"
            placeholder="Search"
            type="search"
          />
        </div>
        <ul className="chat-list">
          {/* Sample chat items */}
          <li className="chat-item">
          <img src={pic} alt="Avatar"
              className="avatar" />          
            <div className="chat-content">
              <div className="chat-header">
                <p className="chat-name">Marie Horwitz</p>
                <span className="badge bg">3</span>
              </div>
              <div className="chat-box">
              <p className="chat-message">Customer request for an appo</p>
              <p className="chat-time">Just now</p></div>
            </div>
          </li>

          <li className="chat-item">
          <img src={pic} alt="Avatar"
              className="avatar" /> 
            <div className="chat-content">
              <div className="chat-header">
                <p className="chat-name">Rajveer Sha</p>
                <span className="badge bg">4</span>
              </div>
              <div className="chat-box">
              <p className="chat-message">Customer request for an appo</p>
              <p className="chat-time">Just now</p>
              </div>
            </div>
          </li>
          <li className="chat-item">
          <img src={pic} alt="Avatar"
              className="avatar" /> 
            <div className="chat-content">
              <div className="chat-header">
                <p className="chat-name">Supun Dilshan</p>
              </div>
              <div className="chat-box">
              <p className="chat-message">Customer request for an appo</p>
              <p className="chat-time">12.30pm</p>
              </div>
            </div>
          </li>
          <li className="chat-item">
          <img src={pic} alt="Avatar"
              className="avatar" /> 
            <div className="chat-content">
              <div className="chat-header">
                <p className="chat-name">Malsha Samadhika</p>
              </div>
              <div className="chat-box">
              <p className="chat-message">Customer request for an appo</p>
              <p className="chat-time">10.08.2023</p>
              </div>
            </div>
          </li>
          <li className="chat-item">
          <img src={pic} alt="Avatar"
              className="avatar" /> 
            <div className="chat-content">
              <div className="chat-header">
                <p className="chat-name">Marie Kom</p>
              </div>
              <div className="chat-box">
              <p className="chat-message">Customer request for an appo</p>
              <p className="chat-time">01.08.2023</p>
              </div>
            </div>
          </li>
          <li className="chat-item">
          <img src={pic} alt="Avatar"
              className="avatar" /> 
            <div className="chat-content">
              <div className="chat-header">
                <p className="chat-name">Marie Horwitz</p>
              </div>
              <div className="chat-box">
              <p className="chat-message">Customer request for an appointment</p>
              <p className="chat-time">01.08.2023</p>
              </div>
            </div>
          </li>
          
          {/* Add more chat items */}
        </ul>
      </div>
      <div className="chat-main">
      <div className="chat-header">
      <img src={pic} alt="Avatar"
              className="avatar" /> 
              <h3>Malsha Samadhika</h3>
              </div>

              <hr></hr>
        <ul className="chat-messages">
          {/* Sample chat messages */}
          <li className="">
            <p className='discription'>Customer request for an appointment with <br></br> 
you ..!<br></br>
</p><p className='cus-details'>
Customer name: Harry Styles<br></br>
Date: 20.12.2023<br></br>
Time : 10.00 a.m.<br></br>
Type: on site<br></br>
contact number: 0711445799<br></br></p>

<p className='othersp'>
Other Service providers : <br></br>
Decorations: Lassana Flora<br></br>
Photography : Iconic View <br></br>
Caters : Katta Sambal  </p>
            <div className="message-time">12:00 PM | Aug 13</div>
          </li>
          {/* Add more chat messages */}
        </ul>
        <div className="message-input">
          <input
            className="input"
            type="text"
            placeholder="Send Confirmation"
          />
          <button className="send-button">
              <FaPaperPlane /> {/* Use the FaPaperPlane icon */}
            </button>
        </div>
      </div>
    
    </div>
   
        </> 
    )
  }
  
  export default RequestTable