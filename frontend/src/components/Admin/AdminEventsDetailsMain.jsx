import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";

function AdminEventsDetailsMain() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div className="main">
      <div className="EvDetailsBox">
        <div className="EvDetailsBoxTop">
          <div className="EvDetailsBoxLeft">
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              A Night at the Opera Tour
            </p>
            <p style={{ fontSize: "15px" }}></p>`
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ fontSize: "15px" }}>
                  About
                </Accordion.Header>
                <Accordion.Body>
                  Queen are a British rock band formed in London in 1970. Their
                  They began their first tour of Japan in April 1975, where
                  thousands of fans met them at Haneda Airport and they played
                  two sold out shows at the Nippon Budokan, Tokyo. After a
                  nine-month dispute, Queen were finally free of Trident and
                  signed directly with EMI Records in the UK and Elektra Records
                  in North America.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Organizer</Accordion.Header>
                <Accordion.Body>
                  By Fazal Events <br />
                  LuqmanFazal@gmail.com <br />
                  90172890197v <br />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Bank Details</Accordion.Header>
                <Accordion.Body>
                  Bank name <br />
                  Branch Name <br />
                  Account Number <br />
                  Account holders name <br />
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
              Total Number of Tickets: 450
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
                <tr>
                  <td>Silver</td>
                  <td>1000</td>
                  <td>250</td>
                  <td>189</td>
                  <td>189000</td>
                </tr>
                <tr>
                  <td>Gold</td>
                  <td>2000</td>
                  <td>150</td>
                  <td>70</td>
                  <td>14000</td>
                </tr>
                <tr>
                  <td>Platinum</td>
                  <td>3000</td>
                  <td>50</td>
                  <td>30</td>
                  <td>90000</td>
                </tr>
              </table>

              <table className="tkDetailTableBottom" border={1}>
                <tr>
                  <td colSpan={2}>Expected Income : LKR 5000000 </td>
                  <td colSpan={2}>Current Income</td>
                </tr>
                <tr>
                  <td colSpan={2}>Expected Profit : LKR 45000 </td>
                  <td colSpan={2}>Current Profit</td>
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
          <table className="table" style={{ width: "95%", marginLeft: "10px" }}>
            <tr>
              <th className="eventTableTh">Full Name</th>
              <th className="eventTableTh">NIC</th>
              <th className="eventTableTh">Email</th>
              <th className="eventTableTh">No. Of Tickets</th>
              <th className="eventTableTh">Price</th>
              <th className="eventTableTh">Date</th>
              <th></th>
            </tr>
            <tr className="tableRow">
              <td className="userTableContentTicket">Kavindu Kalhara</td>
              <td className="userTableContentTicket"> 9826171389v </td>
              <td className="userTableContentTicket">kavi.123@gmail.com</td>
              <td className="userTableContentTicket">3</td>
              <td className="userTableContentTicket">3000</td>
              <td className="userTableContentTicket">05.08.2023</td>
              
            </tr>
          </table>


        </div>
      </div>
    </div>
  );
}

export default AdminEventsDetailsMain;
