import {useState, useEffect} from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import profile from '../../assets/images/default_profile.webp'
import SPSidebar from "../ServiceProvider/SPSidebar";
// import { useSelector } from 'react-redux'
import axios from 'axios';

const SPprofile = () => {
  // const { userInfo } = useSelector((state) => state.auth)
  const [userData, setUserData] = useState(null);
  const userId = localStorage.getItem('userInfo')
  const user = JSON.parse(userId);
  const id = user.id

  console.log(id);

  useEffect(() => {
    if (userId) {
      axios.get(`/api/serviceProvider/profile?id=${id}`)
      .then(response => {
        // Assuming the response data contains the user profile information
        setUserData(response.data);
      })
      .catch(error => {
        // Handle error here
        console.error('Error fetching user profile:', error);
      });
    }

  },[]);

  console.log(userData);
 
  const navigate = useNavigate()
  const handleBtnClick = (id) => {
    navigate(`/ServiceProvider/blockList?id=${id}`);
  }

  if (userData===null) {
    return null
  }else{
    const profileImageSrc = userData.data.profileimage
      ? `../src/assets/images/uploads/${userData.data.profileimage}`
      : profile;
    return (
      <div style={{ "display": "flex" }}>
          <div><SPSidebar /></div>
          <div className="profile_container">
            <tr className='profile_heading'>
              <td className='profimg_containe'>
                <img className='profile_img' src={profileImageSrc}/>
              </td>

              <td className='main_details'>
                <h2>Hello {userData.data.name} !</h2>
                <p>{userData.data.email}</p>
              </td>

              <td className='blockLink'>
                <Button onClick={()=>handleBtnClick(userData.data.id)} className='spblockpreference_btn'>Preference List / Block List</Button>
              </td>
              
            </tr>

            <Row className='profile_body'>
              <Col className='left_column'>
                <h3>Personal Details</h3>
                <div className='personal'>
                  <p>Full Name: <span>{userData.data.name}</span></p>
                  <p>Email: <span>{userData.data.email}</span></p>
                  <p>NIC: <span>{userData.data.nic}</span></p>
                  <p>Contact No: <span>{userData.data.contactno}</span></p>
                </div>
                
              </Col>

              <Col className='right_column'>
                <h3>Business Details</h3>

                <div className='business'>
                  <p>Business name: <span></span></p>
                  <p>Business email: <span>{userData.data.email}</span></p>
                  <p>Business types: <span></span></p>
                  <p>Business address: <span></span></p>
                </div>
                
                <Button className='profedit_btn'>Edit</Button>
                
              </Col>

            </Row>

          </div>
      </div>
      
    )
  }
}

export default SPprofile