// import React from 'react'
import { useState } from "react"
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap'
import { DropdownButton, Dropdown } from "react-bootstrap"
import FormContainer from "../FormContainer"

const FormDetails = () => {
  const [data, setData] = useState({
    title: "",
    price: "",
    location: "",
    description: ""
  })

  const [category, setCategory] = useState("")

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleSelect = (value) => {
    setCategory(value)
  }

  return (
    <FormContainer>
      <Form method="post" onSubmit={handleSubmit}>
        <h1>Enter Your Package Details</h1>
        <FormGroup>
          <Form.Label htmlFor="title">Title</Form.Label>
          <FormControl
            type="text"
            name="title"
            onChange={handleChange}
            value={data.title}
          />
        </FormGroup>

        <FormGroup>
          <Form.Label htmlFor="location">Location</Form.Label>
          <FormControl
            type="text"
            name="location"
            onChange={handleChange}
            value={data.location}
          />
        </FormGroup>

        <FormGroup>
          <Form.Label htmlFor="price">Price</Form.Label>
          <FormControl
            type="text"
            name="price"
            onChange={handleChange}
            value={data.price}
          />
        </FormGroup>

        <FormGroup>
          <Form.Label htmlFor="description">Description</Form.Label>
          <FormControl
            type="text"
            name="description"
            onChange={handleChange}
            value={data.description}
          />
        </FormGroup>

        <FormGroup>
          <Form.Label htmlFor="category">Category</Form.Label>
          <DropdownButton title={category || "Selec the category"} onSelect={handleSelect}>
            <Dropdown.Item eventKey="Venue">Venue</Dropdown.Item>
            <Dropdown.Item eventKey="Photography">Photography</Dropdown.Item>
            <Dropdown.Item eventKey="Cake">Cake</Dropdown.Item>
            <Dropdown.Item eventKey="Sound">Sound</Dropdown.Item>
            <Dropdown.Item eventKey="Decoration">Decoration</Dropdown.Item>
            <Dropdown.Item eventKey="Catering">Catering</Dropdown.Item>
          </DropdownButton>
        </FormGroup>

      </Form>

      <Button type="submit" style={{ marginTop: '10px', width: '100px'}}>
        Submit
      </Button>

    </FormContainer>
  )
}

export default FormDetails
