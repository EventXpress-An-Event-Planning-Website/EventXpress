import React from "react";
import Certification from "../../assets/images/cetificate.png";
import Button from 'react-bootstrap/Button';

function UsersMain() {
  return (
    <div className="mainUsers ">
      

      <div className="DetailsBox">
        <span
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: "40px",
            marginLeft: "45px",
          }}
        >
          {" "}
          Mr. Naveen Rajan{" "}
        </span>

        <div className="DetailsInfo">
          <div className="DetailsLeft">
            <div className="DetailsLeftIcon">
              <h3>Personal Details</h3>
              Full Name: Naveen Rajan
              <br />
              Email: naveen@gmail.com
              <br />
              NIC:991029102v
              <br />
              Contact Number: +94771234567
            </div>
            <div className="DetailsLeftIcon">
              <h3>Business Details</h3>
              Business Name: Navis Photography
              <br />
              Business Email:photography.navi@gmail.com
              <br />
              Business registration number:2002/South/123
              <br />
              Business Type: Photography
              <br />
              Business Address: No. 123, Galle Road, Colombo 03
            </div>
          </div>
          <div className="DetailsRight">
            <img src={Certification} style={{ marginLeft: "100px" }} />
            <Button variant="primary" 
              style={{ position: "absolute", bottom: "10px", right: "330px"}}
            >
                Accept
            </Button>
            <Button variant="primary" 
              style={{ position: "absolute", bottom: "10px" , right: "200px"}}
            >
                Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersMain;
