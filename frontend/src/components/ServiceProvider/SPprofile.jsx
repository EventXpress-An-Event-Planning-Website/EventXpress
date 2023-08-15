import {useState, useEffect} from 'react'
import { Row,Col, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import profile from '../../assets/images/default_profile.webp'
// import hot1 from '../../assets/images/hot1.jpg'
// import hot2 from '../../assets/images/hot2.webp'
// import hot3 from '../../assets/images/hot3.jpg'
// import hot4 from '../../assets/images/hot4.jpg'
import SPSidebar from "../ServiceProvider/SPSidebar";
import { useSelector } from 'react-redux'
import axios from 'axios';

const SPprofile = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const [userData, setUserData] = useState(null);

  const userId = localStorage.getItem('userInfo')
  const user = JSON.parse(userId);
  const id = user.id

  console.log(id);

  useEffect(() => {
    if (userId) {
      axios.post(`http://localhost:5000/api/serviceProvider/profile`, {
        body: { userId: id }
      })
      .then(response => {
        // Assuming the response data contains the user profile information
        setUserData(response.data);
      })
      .catch(error => {
        // Handle error here
        console.error('Error fetching user profile:', error);
      });
    }
  }, []);

  console.log(userData);
 

  return (
    <div style={{ "display": "flex" }}>
        <div><SPSidebar /></div>
        <div className="profile_container">
          <tr className='profile_heading'>
            <td className='profimg_containe'>
              <img className='profile_img' src={profile}/>
            </td>

            <td className='main_details'>
              <h2>Hello {userInfo.name} !</h2>
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
                <p>NIC: <span>996142586V</span></p>
                <p>Contact No: <span>+94773345284{userInfo.contctNo}</span></p>
              </div>
              
            </Col>

            <Col className='right_column'>
              <h3>Business Details</h3>

              <div className='business'>
                <p>Package names: <span>Araliya Beach hotel</span></p>
                <p>Business email: <span>{userInfo.email}</span></p>
                <p>Business types: <span>Venue, Cake</span></p>
                <p>Business address: <span>43/B, Galaha road, Peradeniya</span></p>
              </div>
              
              <Button className='profedit_btn'>Edit</Button>
              
            </Col>

          </Row>

        </div>
    </div>
    
  )
}

export default SPprofile