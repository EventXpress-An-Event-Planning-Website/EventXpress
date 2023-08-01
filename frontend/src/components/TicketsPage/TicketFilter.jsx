import React, { useState } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'

const TicketFilter = () => {
  const categories = [
    'All',
    'Musical',
    'Drama',
    'Sports',
    'Seminar',
    'Exhibition',
  ]

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className="filter-container">
      <div className="filter">
        <Form.Group controlId="categoryFilter">
          <Form.Control
            as="select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </div>
      <div className="search">
        <Form.Group controlId="searchBar">
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Form.Group>
      </div>
    </div>
  )
}

export default TicketFilter
