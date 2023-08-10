// import React from 'react'
import { Row,Col, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import profile from '../../assets/images/default_profile.webp'
import hot1 from '../../assets/images/hot1.jpg'
import hot2 from '../../assets/images/hot2.webp'
import hot3 from '../../assets/images/hot3.jpg'
import hot4 from '../../assets/images/hot4.jpg'
import SPSidebar from "../ServiceProvider/SPSidebar";
import { useSelector } from 'react-redux'

const SPprofile = () => {
  const { userInfo } = useSelector((state) => state.auth)

  return (
    <div style={{ "display": "flex" }}>
        <div><SPSidebar /></div>
        <div className="profile_container">
          <tr className='profile_heading'>
            <td className='profimg_containe'>
              <img className='profile_img' src={profile}/>
            </td>

            <td className='main_details'>
              <h2>Hello {userInfo.name}</h2>
              <p>{userInfo.email}</p>
            </td>

            <td className='blockLink'>
              <Link to={`/ServiceProvider/blockList`}><Button className='spblockpreference_btn'>Preference List / Block List</Button></Link>
            </td>
            
          </tr>

          <Row className='profile_body'>
            <Col className='left_column'>
              <h3>Personal Details</h3>
              <div className='personal'>
                <p>Full Name: <span>{userInfo.name}</span></p>
                <p>Email: <span>{userInfo.email}</span></p>
                <p>NIC: <span>{userInfo.nic}</span></p>
                <p>Contact No: <span>{userInfo.contctNo}</span></p>
              </div>

              <h3>Business Details</h3>

              <div className='business'>
                <p>Business name: <span></span></p>
                <p>Business email: <span></span></p>
                <p>Business registration number: <span></span></p>
                <p>Business type: <span></span></p>
                <p>Business address: <span></span></p>
              </div>
              
              <Button className='profedit_btn'>Edit</Button>
              
            </Col>
            
            <Col className='right_column'>
              <div className="vertical"></div>
              
              <h3>My Work</h3>
              <p>Engagement covered by Nime photos</p>

              <Row className='right_images'>
                  <Col><img className='optionimg' src={hot1}/></Col>
                  <Col><img className='optionimg' src={hot2}/></Col>
              </Row>
              <br></br>
              <Row className='right_images'>
                  <Col><img className='optionimg' src={hot3}/></Col>
                  <Col><img className='optionimg' src={hot4}/></Col>
              </Row>

              <Button className='addmore_btn'>Add more</Button>
            </Col>

          </Row>

        </div>
    </div>
    
  )
}

export default SPprofile