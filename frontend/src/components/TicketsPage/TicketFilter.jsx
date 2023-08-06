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
          <Form.Label className='ticket-sort-label'>Sort by Date</Form.Label>
          <Form.Group controlId="sortByDate">
          {/* <Form.Label>Sort by Date</Form.Label> */}
          <Form.Control as="select">
            <option value="All">All</option>
            <option value="today">Today</option>
            <option value="this-week">This Week</option>
            <option value="next-two-weeks">Next Two Weeks</option>
          </Form.Control>
        </Form.Group>
      </div>
    </div>
  )
}

export default TicketFilter
