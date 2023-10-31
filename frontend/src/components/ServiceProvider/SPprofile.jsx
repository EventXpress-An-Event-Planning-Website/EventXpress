import {useState, useEffect} from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import profile from '../../assets/images/default_profile.webp'
import SPSidebar from "../ServiceProvider/SPSidebar";
import { useUploadSingleMutation } from "../../slices/uploadApiSlice";
// import { useSelector } from 'react-redux'
import axios from 'axios';
import { toast } from 'react-toastify';

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


  //edit profile
  const [updateProfile, setUpdateProfile] = useState(-1);
  const [spfacebook, setspfacebook] = useState("");
  const [spinstagram, setspinstagram] = useState("");
  const [sptwitter, setsptwitter] = useState("");

  const [uploadSingle] = useUploadSingleMutation();

  //upload images
  const uploadImage = async (img) => {
    try {
      if (img) {
        const imageFormData = new FormData();
        imageFormData.append("file", img);
        const response = await uploadSingle(imageFormData);
        if (response && response.data.filename) {
          const imageFilename = response.data.filename;
          return imageFilename;
        } else {
          throw new Error("Error uploading image: Invalid response format");
        }
      }
      return ""; // If no image is provided, return an empty string
    } catch (error) {
      console.error("Error uploading image:", error);
      return ""; // Return an empty string if there is an error during upload
    }
  };
  

  const handleEdit = () => {
    setUpdateProfile(1)
  }

  const handleSave = async (e) => {
    e.preventDefault();
    spfacebook,
    spinstagram,
    sptwitter
    
    toast.success("Update Successfully")
    // } catch (err) {
    //   toast.error(err?.data?.message || err.error);
    // }
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
              {updateProfile === -1 ? (
                <td className='profimg_containe'>
                  <img className='profile_img' src={profileImageSrc} alt="Profile Image"/>
                </td>
              ) : (
                <td className='profimg_containe'>
                  <img className='profile_img' src={profileImageSrc} alt="Profile Image"/>
                  <input type="file" />
                </td>
              )}

              <td className='main_details'>
                <h2>Hello {userData.data.name}!</h2>
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
                {updateProfile === -1 ? (
                  <>
                    <h3>Social Media Details</h3>

                    <div className='business'>
                      <p>Facebook Link: <span>{userData.data.facebooklink}</span></p>
                      <p>Instagram Link: <span>{userData.data.instagramlink}</span></p>
                      <p>Twitter Link: <span>{userData.data.twitterlink}</span></p>
                    </div>
                  
                    <Button className='profedit_btn' onClick={handleEdit}>Edit</Button>
                  </>
                ) : (
                  <>
                    <h3>Edit Social Media Details</h3>
                    <Form method="post" onSubmit={handleSave}>
                      <Form.Group>
                        <Form.Label>Facebook Link</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => setspfacebook(e.target.value)}
                          value={spfacebook}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Instagram Link</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => setspinstagram(e.target.value)}
                          value={spinstagram}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Twitter Link</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => setsptwitter(e.target.value)}
                          value={sptwitter}
                        />
                      </Form.Group>
                    </Form>

                    <Button className="profedit_btn">
                      Save
                    </Button>
                  </>
                )}
              </Col>

            </Row>

          </div>
      </div>

    )
  }
}

export default SPprofile