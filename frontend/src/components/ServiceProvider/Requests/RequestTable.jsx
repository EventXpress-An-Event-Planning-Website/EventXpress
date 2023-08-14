import pic from '../../../assets/images/djfes.jpg'
import React from "react";


const RequestTable = () => {
    return (
        <>
          <div className="chat-container">
      <div className="chat-sidebar">
        <div className="search-input">
        <span className="search-icon">
            <i className="fas fa-search"></i>
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
              <p className="chat-message">Hello, Are you there?</p>
              <p className="chat-time">Just now</p></div>
            </div>
          </li>

          <li className="chat-item">
          <img src={pic} alt="Avatar"
              className="avatar" /> 
            <div className="chat-content">
              <div className="chat-header">
                <p className="chat-name">Marie Horwitz</p>
                <span className="badge bg">4</span>
              </div>
              <div className="chat-box">
              <p className="chat-message">Hello, Are you there?</p>
              <p className="chat-time">Just now</p>
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
              <p className="chat-message">Hello, Are you there?</p>
              <p className="chat-time">12.30pm</p>
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
              <p className="chat-message">Hello, Are you there?</p>
              <p className="chat-time">10.08.2023</p>
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
              <p className="chat-message">Hello, Are you there?</p>
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
              <p className="chat-message">Hello, Are you there?</p>
              <p className="chat-time">01.08.2023</p>
              </div>
            </div>
          </li>
          
          {/* Add more chat items */}
        </ul>
      </div>
      <div className="chat-main">
        <ul className="chat-messages">
          {/* Sample chat messages */}
          <li className="message outgoing">
            <p>Lorem ipsum dolor sit amet...</p>
            <div className="message-time">12:00 PM | Aug 13</div>
          </li>
          {/* Add more chat messages */}
        </ul>
        <div className="message-input">
          <input
            className="input"
            type="text"
            placeholder="Type message"
          />
          <button className="send-button">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    
    </div>
   
        </> 
    )
  }
  
  export default RequestTable