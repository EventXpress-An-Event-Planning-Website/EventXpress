import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Cus_Home = () => {
  return (
    <div>
      <>

        <Link to='/createEvent'>
            <Button >Create Event</Button>
        </Link>
      </>
    </div>
  )
}

export default Cus_Home
