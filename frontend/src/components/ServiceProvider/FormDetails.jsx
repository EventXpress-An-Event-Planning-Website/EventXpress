// import React from 'react'
import { useRef, useState } from "react"
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap'
import FormContainer from "../FormContainer"
import upload from '../../assets/images/upload.svg'

const FormDetails = () => {
  const [data, setData] = useState({
    title: "",
    price: "",
    location: "",
    description: ""
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // upload image
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  }

  return (
    <FormContainer>
      <h3 className="packformh3">Package Information</h3>
      <div className="pack_info">
        <Form method="post" onSubmit={handleSubmit} className="form">
          <FormGroup className="input">
            <Form.Label htmlFor="title">Business Name</Form.Label>
            <FormControl
              type="text"
              name="title"
              onChange={handleChange}
              value={data.title}
            />
          </FormGroup>

          <FormGroup className="input">
            <Form.Label htmlFor="location">Area you cover</Form.Label>
            <FormControl
              type="text"
              name="location"
              onChange={handleChange}
              value={data.location}
            />
          </FormGroup>

          <FormGroup className="input">
            <Form.Label htmlFor="address">Business address</Form.Label>
            <FormControl
              type="text"
              name="address"
              onChange={handleChange}
              value={data.address}
            />
          </FormGroup>

          <FormGroup className="input">
            <Form.Label htmlFor="description">Add description about your package</Form.Label>
            <FormControl
              type="text"
              name="description"
              onChange={handleChange}
              value={data.description}
            />
          </FormGroup>

          <Form.Label htmlFor="image">Add Image</Form.Label>
          <div className="image_container">
            <div onClick={handleImageClick} className="image">
              {image ? <img src={URL.createObjectURL(image)} /> : <img src={upload} />}
              <input 
                type="file" 
                ref={inputRef} 
                onChange={handleImageChange} 
                style={{display: "none"}}
              />
            </div>
          </div>

        </Form>
      </div>
      

      <h3 className="packformh3">Options</h3>
      <div className="option">
        <Form method="post" onSubmit={handleSubmit} className="form">
          <FormGroup className="input">
            <Form.Label htmlFor="op_name">Package - Option name</Form.Label>
            <FormControl
              type="text"
              name="op_name"
              onChange={handleChange}
              value={data.op_name}
            />
          </FormGroup>

          <FormGroup className="input">
            <Form.Label htmlFor="op_des">Description</Form.Label>
            <FormControl
              type="text"
              name="op_des"
              onChange={handleChange}
              value={data.op_des}
            />
          </FormGroup>

          <FormGroup className="input">
            <Form.Label htmlFor="op_price">Option Price</Form.Label>
            <FormControl
              type="text"
              name="op_price"
              onChange={handleChange}
              value={data.op_price}
            />
          </FormGroup>

          <Form.Label htmlFor="op_price">Add Images</Form.Label>
          <div className="image_container">
            <div onClick={handleImageClick} className="image">
              {image ? <img src={URL.createObjectURL(image)} /> : <img src={upload} />}
              <input 
                type="file" 
                ref={inputRef} 
                onChange={handleImageChange} 
                style={{display: "none"}}
              />
            </div>

            <div onClick={handleImageClick} className="image">
              {image ? <img src={URL.createObjectURL(image)} /> : <img src={upload} />}
              <input 
                type="file" 
                ref={inputRef} 
                onChange={handleImageChange} 
                style={{display: "none"}}
              />
            </div>

            <div onClick={handleImageClick} className="image">
              {image ? <img src={URL.createObjectURL(image)} /> : <img src={upload} />}
              <input 
                type="file" 
                ref={inputRef} 
                onChange={handleImageChange} 
                style={{display: "none"}}
              />
            </div>
          </div>
          
        </Form>
      </div>
      

      <h3 className="packformh3">More Options</h3>
      <div className="more_option">
        <Button type="submit" className="optionBtn">
          Add another option
        </Button>
      </div>

      <div className="btn_container">
        <Button type="submit" className="submitBtn">
          Submit
        </Button>
      </div>
      

    </FormContainer>
  )
}

export default FormDetails
