import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import moment from "moment/moment";

function AdminEventsDetailsMain() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [eventData, setEventData] = useState([]);
  
  const location = useLocation(); // access current location in the browser's url
  const queryParams = new URLSearchParams(location.search);
  const ticketId = Number(queryParams.get("ticketId"));

  // console.log(ticketId);

  useEffect(() => {
    axios
      .get(`/api/admin/getEventDetail?ticketId=${ticketId}`)
      .then((response) => {
        // console.log(response.data.eventFullDetails.eventDetails.eventdescription);

        setEventData(response.data.eventFullDetails);

       
        
      })
      .catch((error) => {
        // console.log(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  // useEffect(()=> {
  //   console.log(eventData.eventOrganizerDetails?.id);
  // }, [eventData])

  return (
    <div className="main">
      <div className="EvDetailsBox">
        <div className="EvDetailsBoxTop">
          <div className="EvDetailsBoxLeft">
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            {eventData.eventDetails?.eventtitle}
            </p>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0"> 
                <Accordion.Header style={{ fontSize: "15px" }}>
                  About
                </Accordion.Header>
                <Accordion.Body>
                  <span style={{ fontSize: "12px" }}>
                    {eventData.eventDetails?.eventdescription}
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Organizer</Accordion.Header>
                <Accordion.Body>
                  <span style={{ fontSize: "12px" }}>
                    <b>Name   :</b> {eventData.eventOrganizerDetails?.name}<br />
                    <b>NIC    :</b>{eventData.eventOrganizerDetails?.email} <br />
                    <b>Email  :</b>{eventData.eventOrganizerDetails?.nic} <br />
                    <b>Location  :</b>{eventData.eventOrganizerDetails?.location} <br />
                    <b>Contact No  :</b>{eventData.eventOrganizerDetails?.contactno} <br />
                  </span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Bank Details</Accordion.Header>
                <Accordion.Body>
                  <span style={{ fontSize: "12px" }}>
                    {eventData.eventDetails?.accountholdername} <br />
                    {eventData.eventDetails?.bankname} <br /> 
                    {eventData.eventDetails?.branchname} <br />
                    {eventData.eventDetails?.accountnumber} <br />
                   
                  </span>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className="EvDetailsBoxRight">
            <div
              style={{
                backgroundColor: "rgba(180, 130, 159, 0.60)",
                width: "300px",
              }}
            >
              Total Number of Tickets: {eventData.TotalTicketsQuantity}
            </div>
            <div>
              <table className="tkDetailTable">
                <tr>
                  <th>Ticket Type</th>
                  <th>Price(one Ticket)</th>
                  <th>No of Tickets</th>
                  <th>Sold</th>
                  <th>Income</th>
                </tr>

                {eventData?.eventTicketDetails?.combinedEventTicketDetails.map((ticket) => (
                <tr>
                  <td>{ticket.ticketType}</td>
                  <td>{ticket.priceOfOne}</td>
                  <td>{ticket.totalTypeOfTickets}</td>
                  <td>{ticket.soldTicket}</td>
                  <td>{ticket.currentIncomeInTicketType}</td>
                </tr>
                ))}

              </table>

              <table className="tkDetailTableBottom" border={1}>
                <tr>
                  <td colSpan={2}>Expected Income : LKR {eventData?.eventTicketDetails?.newIncomeAndProfit?.expectedTotalIncome} </td>
                  <td colSpan={2}>Current Income  : LKR  {eventData?.eventTicketDetails?.newIncomeAndProfit?.currentTotalIncome} </td>
                </tr>
                <tr>
                  <td colSpan={2}>Expected Profit : LKR {eventData?.eventTicketDetails?.newIncomeAndProfit?.expectedTotalProfit} </td>
                  <td colSpan={2}>Current Profit  : LKR {eventData?.eventTicketDetails?.newIncomeAndProfit?.currentTotalProfit} </td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ color: "green" }}>
                    Status: Money on hold
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="EvDetailsBoxBottom">
          <table
            className="admin-table"
            style={{ width: "95%", marginLeft: "10px" }}
          >
            <tr>
              <th className="eventTableTh">Full Name</th>
              <th className="eventTableTh">NIC</th>
              <th className="eventTableTh">Email</th>
              <th className="eventTableTh">No. Of Tickets</th>
              <th className="eventTableTh">Price</th>
              <th className="eventTableTh">Date</th>
              <th></th>
            </tr>
            {eventData?.buyerDetails?.map((buyer) => (
            <tr className="tableRow">
              <td className="userTableContentTicket">{buyer.buyerName}</td>
              <td className="userTableContentTicket"> {buyer.buyerNIC} </td>
              <td className="userTableContentTicket">{buyer.buyerEmail}</td>
              <td className="userTableContentTicket">{buyer.noOfTickets}</td>
              <td className="userTableContentTicket">{buyer.Price}</td>
              <td className="userTableContentTicket">{moment(buyer.Date).format('YYYY-MM-DD')}</td>
            </tr>
            ))}

          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminEventsDetailsMain;
