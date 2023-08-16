import pic from '../../../assets/images/djfes.jpg';
import { FaSearch, FaPaperPlane } from 'react-icons/fa'; // Import necessary icons
import { BsFillPersonFill } from 'react-icons/bs';
import React from "react";



const ChatDes = () => {
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
          <ul className="k-chat-box">
            {/* Sample chat messages */}
            <li className="">
              <p className='discription'>I want more details about this package. Please can you send me as soon as possible?</p>
         

         

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

export default ChatDes