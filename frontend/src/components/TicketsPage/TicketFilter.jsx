import React, { useState } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'

const TicketFilter = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const formattedToday = today.toISOString().split('T')[0];
  const formattedTomorrow = tomorrow.toISOString().split('T')[0];

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
    <div className="ticket-filter-container">
      <div className="ticket-filter">
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
      <div className="ticket-search">
        <Form.Group controlId="searchBar">
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Form.Group>
      </div>
      <div className="ticket-sort-by-date">
        <Form.Group controlId="sortByDate">
          <div className="d-flex date-input-container">
            <div className="d-flex">
              <Form.Label>From</Form.Label>
              <Form.Control type="date" className="date-input" min={formattedToday} />
            </div>
            <div className="d-flex">
              <Form.Label>To</Form.Label>
              <Form.Control type="date" className="date-input" min={formattedTomorrow} />
            </div>
          </div>
        </Form.Group>
      </div>
    </div>
  )
}

export default TicketFilter
