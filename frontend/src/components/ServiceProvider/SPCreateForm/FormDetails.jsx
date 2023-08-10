// import React from 'react'
import { useState } from "react";
// import { useRef } from "react"
import { Form, FormControl, FormGroup, Button } from "react-bootstrap";
import FormContainer from "../../FormContainer";
// import upload from '../../../assets/images/upload.svg'
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux"
import { useCreatePackageMutation } from "../../../slices/packageSlice";
import { useUploadSingleMutation } from "../../../slices/uploadApiSlice";
// import FormOption from "../../ServiceProvider/SPCreateForm/FormOption"

const FormDetails = () => {
  const [packageTitle, setpackageTitle] = useState("");
  const [packageLocation, setpackageLocation] = useState("");
  const [packageAddress, setpackageAddress] = useState("");
  const [packageDescription, setpackageDescription] = useState("");
  const [packagePrice, setpackagePrice] = useState("");
  const [packageType, setpackageType] = useState("");
  const [packageImage, setpackageImage] = useState(null);

  const [packageOpTitle, setpackageOpTitle] = useState("");
  const [packageOpDescription, setpackageOpDescription] = useState("");

  const [uploadSingle, { isLoading: uploadSingleLoading }] =
  useUploadSingleMutation()

  const [createPackage, { isLoading: packageLoading }] =
  useCreatePackageMutation();
  const navigate = useNavigate();

  const userInfo = localStorage.getItem("userInfo");
  const parsedUserInfo = JSON.parse(userInfo);
  const userId = parsedUserInfo.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const res = await createPackage({
    //     userId,
    //     packageTitle,
    //     packageLocation,
    //     packageAddress,
    //     packageDescription,
    //     packagePrice,
    //     packageType,
    //     // packageOpTitle,
    //     // packageOpDescription

    //   }).unwrap()

    //   if (packageType === "Venue"){
    //     const optionResponse = await createPackage({
    //       userId,
    //       packageOpTitle,
    //       packageOpDescription,
    //       packageType
    //     }).unwrap();

    //   }
    //   navigate('/ServiceProvider/packagesView')
    // } catch (err) {
    //   toast.error(err?.data?.message || err.error)
    // }

    try {
      if (packageType === "Venue") {
        const optionResponse = await createPackage({
          userId,
          packageTitle,
          packageLocation,
          packageAddress,
          packageDescription,
          packagePrice,
          packageOpTitle,
          packageOpDescription,
          packageImage,
          packageType,
        }).unwrap();
      } else {
        const res = await createPackage({
          userId,
          packageTitle,
          packageLocation,
          packageAddress,
          packageDescription,
          packagePrice,
          packageImage,
          packageType,
          // packageOpTitle,
          // packageOpDescription
        }).unwrap();
      }
      navigate("/ServiceProvider/packagesView");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  //upload image
  const handleNicImageChange = (e) => {
    const file = e.target.files[0]
    setpackageImage(file)
  }

  return (
    <div>
      <FormContainer className="SPPackageForm">
        <h3 className="packformh3">Package Information</h3>
        <div className="pack_info">
          <Form method="post" onSubmit={handleSubmit} className="form">
            <FormGroup className="input">
              <Form.Label htmlFor="title">Business Name</Form.Label>
              <FormControl
                type="text"
                name="packageTitle"
                placeholder="Enter your business name"
                onChange={(e) => setpackageTitle(e.target.value)}
                value={packageTitle}
                required
              />
            </FormGroup>

            <FormGroup className="input">
              <Form.Label htmlFor="location">Area cover</Form.Label>
              <FormControl
                type="text"
                name="packageLocation"
                placeholder="Enter area you cover"
                onChange={(e) => setpackageLocation(e.target.value)}
                value={packageLocation}
                required
              />
            </FormGroup>

            <FormGroup className="input">
              <Form.Label htmlFor="address">Business address</Form.Label>
              <FormControl
                type="text"
                name="packageAddress"
                placeholder="Enter your business address"
                onChange={(e) => setpackageAddress(e.target.value)}
                value={packageAddress}
                required
              />
            </FormGroup>

            <FormGroup className="input">
              <Form.Label htmlFor="description">
                Description about package
              </Form.Label>
              <FormControl
                type="text"
                name="packageDescription"
                placeholder="Enter business description"
                onChange={(e) => setpackageDescription(e.target.value)}
                value={packageDescription}
                required
              />
            </FormGroup>

            <FormGroup className="input">
              <Form.Label htmlFor="price">Price</Form.Label>
              <FormControl
                type="text"
                name="packagePrice"
                placeholder="Enter price"
                onChange={(e) => setpackagePrice(e.target.value)}
                value={packagePrice}
                required
              />
            </FormGroup>

            <FormGroup className="input">
              <Form.Label htmlFor="type">Package Type</Form.Label>
              <Form.Select
                size=""
                value={packageType}
                onChange={(e) => setpackageType(e.target.value)}
                required
              >
                <option></option>
                <option>Venue</option>
                <option>Photography</option>
                <option>Decoration</option>
                <option>Catering</option>
                <option>Cake</option>
                <option>Lights and Sounds</option>
              </Form.Select>
            </FormGroup>

            <Form.Group className="my-4" controlId="spImage">
              <Form.Label>Add Image</Form.Label>
              <Form.Control
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={handleNicImageChange}
              />
            </Form.Group>

            {packageType === "Venue" && (
              <FormContainer className="SPPackageForm">
                <h3 className="packformh3">Options</h3>
                <div className="option">
                  <FormGroup className="input">
                    <Form.Label htmlFor="op_title">
                      Package - Option Title
                    </Form.Label>
                    <FormControl
                      type="text"
                      name="op_title"
                      placeholder="Enter hall name"
                      onChange={(e) => setpackageOpTitle(e.target.value)}
                      value={packageOpTitle}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="input">
                    <Form.Label htmlFor="op_des">Description</Form.Label>
                    <FormControl
                      type="text"
                      name="op_des"
                      placeholder="Enter hall description"
                      onChange={(e) => setpackageOpDescription(e.target.value)}
                      value={packageOpDescription}
                      required
                    />
                  </FormGroup>
                </div>
              </FormContainer>
            )}

            <div className="btn_container">
              <Button type="submit" className="submitBtn">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </FormContainer>
    </div>
  );
};

export default FormDetails;
