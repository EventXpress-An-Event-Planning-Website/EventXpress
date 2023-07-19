// import React from 'react'
import { Form, FormControl } from 'react-bootstrap'


const Search = () => {
  
  return (
    <Form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <Form.Label htmlFor='search'>Search</Form.Label>
        <FormControl
            id='search'
            type='text'
            role='searchbox'
            placeholder='Search Items'
        />
    </Form>
  )
}

export default Search