import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

function AdminSupportViewMain() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const location = useLocation(); // access current location in the browser's url
  const queryParams = new URLSearchParams(location.search);
  const customerId = Number(queryParams.get("customerId"));
  const complain = queryParams.get("complain");
  const complainId = Number(queryParams.get("complainId"));
  const customerName = String(queryParams.get("cusName"));
  const handled = queryParams.get("handled");
  const [customer, setCustomer] = useState([]);
  const navigate = useNavigate();

  console.log(complainId);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`/api/admin/getCustomer?cusId=${customerId}`)
      .then((response) => {
        setCustomer(response.data);
        console.log(complains);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [loading]); // passing an empty dependency array to make it run only once

  const makeAsReadFunc = (complainId) => {
    axios
      .put(`/api/admin/makeAsRead?compalainId=${complainId}`)
      .then((response) => {
        navigate("/TicketSupports");
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div className="main">
      <h3 className="title">From {customer.name}</h3>

      <div
        className="messageDetails"
        style={{ marginLeft: "55%", height: "25%" }}
      >
        <div className="sender">{customerName}</div>
        {complain}
        <br />
        <br />
        <b>
          {" "}
          Contact Number: {customer.contactno}
          <br />
          Contact Email: {customer.email}{" "}
        </b>
      </div>

      <div className="chat-ui">
        {console.log(typeof(handled))}
        {handled === 'false' ? (
          <div className="message-input">
            <Button
              varient="primary"
              onClick={() => makeAsReadFunc(complainId)}
              style={{ backgroundColor: "#6D004F" }}
            >
              Make as Read
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default AdminSupportViewMain;
