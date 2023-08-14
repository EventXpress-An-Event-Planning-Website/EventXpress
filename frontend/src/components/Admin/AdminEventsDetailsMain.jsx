import React from "react";
import Accordion from "react-bootstrap/Accordion";

function AdminEventsDetailsMain() {
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
          <div style={{backgroundColor:"rgba(180, 130, 159, 0.60)",width:'300px'}}>Total Number of Tickets: 450</div>
          <div>
            <table className="tkDetailTable">
                <tr><th>Ticket Type</th><th>Price</th><th>No of Tickets</th><th>Sold</th><th>Income</th></tr>
            </table>
          </div>
          </div>
        
        
        </div>
        <div className="EvDetailsBoxBottom">hello bottom</div>
      </div>
    </div>
  );
}

export default AdminEventsDetailsMain;
