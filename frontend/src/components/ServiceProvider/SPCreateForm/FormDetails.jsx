//import React from 'react'
import { useState } from "react";
// import { useRef } from "react"
import { Form, FormControl, FormGroup, Button } from "react-bootstrap";
import FormContainer from "../../FormContainer";
// import upload from '../../../assets/images/upload.svg'
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux"
import { useCreatePackageMutation } from "../../../slices/packageSlice";
import { useUploadSingleMutation } from "../../../slices/uploadApiSlice";

const FormDetails = () => {
  const [packageBusName, setpackageBusName] = useState("");
  const [packageTitle, setpackageTitle] = useState("");
  const [packageAddress, setpackageAddress] = useState("");
  const [packageDescription, setpackageDescription] = useState("");
  const [packagePrice, setpackagePrice] = useState("");
  const [packageType, setpackageType] = useState("");
  const [packageImage, setpackageImage] = useState(null);

  const [packageOpTitle, setpackageOpTitle] = useState("");
  const [packageOpDescription, setpackageOpDescription] = useState("");
  const [packageOpMaxCount, setpackageOpMaxCount] = useState("");
  const [packageOparea, setpackageOparea] = useState("");
  const [packageOpType, setpackageOpType] = useState("");

  const [uploadSingle] = useUploadSingleMutation();

  const [createPackage, { isLoading: packageLoading }] =
    useCreatePackageMutation();
  const navigate = useNavigate();

  const userInfo = localStorage.getItem("userInfo");
  const parsedUserInfo = JSON.parse(userInfo);
  const userId = parsedUserInfo.id;

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const spImageFilename = await uploadImage(packageImage);
      console.log("uploadimagesp", spImageFilename);

      if (packageType === "Venue") {
        const optionResponse = await createPackage({
          userId,
          packageBusName,
          packageTitle,
          packageAddress,
          packageDescription,
          packagePrice,
          packageOpTitle,
          packageOpDescription,
          packageOpMaxCount,
          packageOparea,
          packageOpType,
          packageImage: spImageFilename,
          packageType,
        }).unwrap();
      } else {
        const res = await createPackage({
          userId,
          packageBusName,
          packageTitle,
          packageAddress,
          packageDescription,
          packagePrice,
          packageImage: spImageFilename,
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
  const handleSPImageChange = (e) => {
    const file = e.target.files[0];
    setpackageImage(file);
  };

  return (
    <div className="SPPackageForm">
      <FormContainer>
        <h3 className="packformh3">Package Information</h3>
        <div className="pack_info">
          <Form method="post" onSubmit={handleSubmit} className="form">

            <FormGroup className="input">
              <Form.Label htmlFor="location">Business Name</Form.Label>
              <FormControl
                type="text"
                name="packageLocation"
                placeholder="Enter your business name"
                onChange={(e) => setpackageBusName(e.target.value)}
                value={packageBusName}
                required
              />
            </FormGroup>

            <FormGroup className="input">
              <Form.Label htmlFor="title">Package Name</Form.Label>
              <FormControl
                type="text"
                name="packageTitle"
                placeholder="Enter your package name"
                onChange={(e) => setpackageTitle(e.target.value)}
                value={packageTitle}
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
                <option>LightsANDSounds</option>
              </Form.Select>
            </FormGroup>

            <Form.Group className="my-4" controlId="spImage">
              <Form.Label>Add Image</Form.Label>
              <Form.Control
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={handleSPImageChange}
                required
              />
            </Form.Group>

            {/* {packageType !== "Venue" && (
              <React.Fragment>
                <Form.Group className="my-4" controlId="additionalImage1">
                  <Form.Label>Add Additional Image 1</Form.Label>
                  <Form.Control
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    
                    required
                  />
                </Form.Group>
                
                <Form.Group className="my-4" controlId="additionalImage2">
                  <Form.Label>Add Additional Image 2</Form.Label>
                  <Form.Control
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    
                    required
                  />
                </Form.Group>
                
                <Form.Group className="my-4" controlId="additionalImage3">
                  <Form.Label>Add Additional Image 3</Form.Label>
                  <Form.Control
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    
                    required
                  />
                </Form.Group>
              </React.Fragment>
            )} */}

            {/* option part for venue type */}
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

                  <FormGroup className="input">
                    <Form.Label htmlFor="op_des">Maximum Count</Form.Label>
                    <FormControl
                      type="text"
                      name="op_maxcount"
                      placeholder="Enter hall maximum count"
                      onChange={(e) => setpackageOpMaxCount(e.target.value)}
                      value={packageOpMaxCount}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="input">
                    <Form.Label htmlFor="op_des">Hall area</Form.Label>
                    <FormControl
                      type="text"
                      name="op_maxcount"
                      placeholder="Enter hall area(sqrt)"
                      onChange={(e) => setpackageOparea(e.target.value)}
                      value={packageOparea}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="input">
                    <Form.Label htmlFor="op_des">Hall Type</Form.Label>
                    <Form.Select
                      size=""
                      value={packageOpType}
                      onChange={(e) => setpackageOpType(e.target.value)}
                      required
                    >
                      <option></option>
                      <option>Indoor - AC</option>
                      <option>Indoor - Non-AC</option>
                      <option>Outdoor</option>
                    </Form.Select>
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
