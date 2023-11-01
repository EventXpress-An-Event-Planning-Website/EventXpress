// import React from 'react'
import SPSidebar from "../SPSidebar";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const PrefpreList = () => {
  const [packageName, setPackageName] = useState("");
  const [packageDescription, setPackageDescription] = useState("");
  const [packageType, setPackageType] = useState("");
  const [venuePackage, setVenuePackage] = useState("");
  const [cateringPackage, setCateringPackage] = useState("");
  const [cakePackage, setCakePackage] = useState("");
  const [decorationPackage, setDecorationPackage] = useState("");
  const [photoPackage, setPhotoPackage] = useState("");
  const [soundPackage, setSoundPackage] = useState("");
  const [presentage, setPresentage] = useState(0);
  const [loading,setLoading]=useState(true)
  const [venuePackages,setVenuePackages]=useState([])
  const [cateringPackages,setCateringPackages]=useState([])
  const [cakePackages,setCakePackages]=useState([])
  const [decoPackages,setDecoPackages]=useState([])
  const [photographyPackages,setPhotographyPackages]=useState([])
  const [soundPackages,setSoundPackages]=useState([])
  const user = JSON.parse(localStorage.getItem('userInfo'))
  const user_id=user.id
  const navigate = useNavigate()
  
  
  
  

  

  useEffect(() => {

    axios.get(`/api/serviceProvider/getprePackages?id=${user_id}`)
    .then((response)=>{
      setVenuePackages(response.data.venue);
      setCateringPackages(response.data.catering)
      setCakePackages(response.data.cake)
      setPhotographyPackages(response.data.photography)
      setDecoPackages(response.data.decoration)
      setSoundPackages(response.data.sound)
      console.log((soundPackages));
      setLoading(false)
      
    }).catch((error)=>{

    })
  
  }, [loading])

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // You can handle the form submission logic here, e.g., sending data to the server
    const formData = {
      user_id,
      packageName,
      packageDescription,
      packageType,
      venuePackage,
      cateringPackage,
      cakePackage,
      decorationPackage,
      photoPackage,
      soundPackage,
      presentage,
    };
    try {
      // Send the form data to the server using Axios
      axios.post(`/api/serviceProvider/CreatePredefine`,formData)
      .then((response)=>{
        const result= response.data
        if (result===1) {
            toast.success("Package Created Successfully")
        }else{
            toast.error('Please Add Package again')
        }
        navigate(`/Birthday`)
      })
      .catch((error)=>{

      });
      
      setPackageName('');
      setPackageDescription('');
      setPackageType('')
      setVenuePackage('')
      setCateringPackage('')
      setCakePackage('')
      setDecorationPackage('')
      setPhotoPackage('')
      setSoundPackage('')
      setPresentage(0)
      // Reset other form fields as well
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error('Error sending data:', error);
    }
  };

  return (
    <>
      <div className="predefined_pack_container">
        <div>
          <SPSidebar />
        </div>
        <div className="prefContainer">
          <div className="title_container">
            <h1>CREATE A PREDEFINED PACKAGE</h1>
          </div>
          <div>
            <Form
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3" controlId="package_name">
                <Form.Label>Package Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={packageName}
                  onChange={(e) => setPackageName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="package_description">
                <Form.Label>Package Descripton</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={packageDescription}
                  onChange={(e) => setPackageDescription(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="package_type">
                <Form.Label>Package Type</Form.Label>
                <Form.Control
                  as="select"
                  value={packageType}
                  onChange={(e) => setPackageType(e.target.value)}
                >
                  <option value="" ></option>
                  <option >Birthday</option>
                  <option>Bride To Be</option>
                  <option>Anniversary</option>
                  <option>Social Events</option>
                </Form.Control>
              </Form.Group>
              {venuePackages.length !=0 ?(
              <Form.Group
                className="mb-3"
                controlId={`venuePackage radioButton_q`}
              >
                
                <Form.Label>Venue Package</Form.Label>
                {venuePackages.map((pack) => (
                  <div key={pack.package_id}>
                    <Form.Check
                      type="radio"
                      id={`venuePackage_${pack.package_id}`}
                      name="venuePackage"
                      label={pack.package_op_title}
                      value={pack.package_id}
                      checked={venuePackage === pack.package_id}
                      onChange={() => setVenuePackage(pack.package_id)}
                    />
                  </div>
                ))}
              </Form.Group>
              ):null}

              {cateringPackages.length !=0 ?(
              <Form.Group
                className="mb-3"
                controlId="cateringPackage radioButton_q"
              >
                <Form.Label>Catering Package:</Form.Label>
                {cateringPackages.map((pack) => (
                  <div key={pack.package_id}>
                    <Form.Check
                      type="radio"
                      id={`cateringPackage_${pack.package_id}`}
                      name="cateringPackage"
                      label={pack.package_title}
                      value={pack.package_id}
                      checked={cateringPackage === pack.package_id}
                      onChange={() => setCateringPackage(pack.package_id)}
                    />
                  </div>
                ))}
              </Form.Group>):null}
              {cakePackages.length !=0 ?(
              <Form.Group
                className="mb-3"
                controlId="cakePackage radioButton_q"
              >
                <Form.Label>Cake Package:</Form.Label>
                {cakePackages.map((pack) => (
                  <div key={pack.package_id}>
                    <Form.Check
                      type="radio"
                      id={`cakePackage_${pack.package_id}`}
                      name="cakePackage"
                      label={pack.package_title}
                      value={pack.package_id}
                      checked={cakePackage === pack.package_id}
                      onChange={() => setCakePackage(pack.package_id)}
                    />
                  </div>
                ))}
              </Form.Group>):null}
              {decoPackages.length !=0 ?(
              <Form.Group
                className="mb-3"
                controlId="decoPackage radioButton_q"
              >
                <Form.Label>Decoration Package:</Form.Label>
                {decoPackages.map((pack) => (
                  <div key={pack.package_id}>
                    <Form.Check
                      type="radio"
                      id={`cakePackage_${pack.package_id}`}
                      name="decoPackage"
                      label={pack.package_title}
                      value={pack.package_id}
                      checked={decorationPackage === pack.package_id}
                      onChange={() => setDecorationPackage(pack.package_id)}
                    />
                  </div>
                ))}
              </Form.Group>):null}
              {photographyPackages.length !=0 ?(
              <Form.Group
                className="mb-3"
                controlId="photoPackage radioButton_q"
              >
                <Form.Label>Photography Package:</Form.Label>
                {photographyPackages.map((pack) => (
                  <div key={pack.package_id}>
                    <Form.Check
                      type="radio"
                      id={`photoPackage_${pack.package_id}`}
                      name="photoPackage"
                      label={pack.package_title}
                      value={pack.package_id}
                      checked={photographyPackages === pack.package_id}
                      onChange={() => setPhotoPackage(pack.package_id)}
                    />
                  </div>
                ))}
              </Form.Group>):null}
              {soundPackages.length !=0 ?(
              <Form.Group
                className="mb-3"
                controlId="soundPackage radioButton_q"
              >
                <Form.Label>SoundAndLight Package:</Form.Label>
                {soundPackages.map((pack) => (
                  <div key={pack.package_id}>
                    <Form.Check
                      type="radio"
                      id={`soundPackage_${pack.package_id}`}
                      name="soundPackage"
                      label={pack.package_title}
                      value={pack.package_id}
                      checked={soundPackage === pack.package_id}
                      onChange={() => setSoundPackage(pack.package_id)}
                    />
                  </div>
                ))}
              </Form.Group>):null}
              <Form.Group className="mb-3" controlId="presentage">
                <Form.Label>Discount Presentage</Form.Label>
                <Form.Control
                  type="number"
                  placeholder=""
                  value={presentage}
                  onChange={(e) => setPresentage(e.target.value)}
                  
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrefpreList;
