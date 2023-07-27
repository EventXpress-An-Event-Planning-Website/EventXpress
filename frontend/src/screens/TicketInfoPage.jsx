import React from 'react'
import { useLocation } from 'react-router-dom'

const TicketInfoPage = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const id = queryParams.get('id')
  const src = queryParams.get('src')
  const title = queryParams.get('title')
  const date = queryParams.get('date')
  const time = queryParams.get('time')

  console.log(id)

  return (
    <div>
      <h1>Ticket Information</h1>
      <p>ID: {id}</p>
      <p>SRC: {src}</p>
      <p>TITLE: {title}</p>
      <p>DATE: {date}</p>
      {/* Display other ticket details */}
      {/* ... */}
    </div>
  )
}

export default TicketInfoPage
