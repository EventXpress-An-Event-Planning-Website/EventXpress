import React from 'react'
import { Button } from 'react-bootstrap'
import { Icons } from 'react-toastify'

const ServiceCard = ({service}) => {
  return (
    <>
        <Card>
            <Card.Header>
                {service.serviceName}
                <Button variant='primary'><i class="fa-solid fa-eye"></i></Button>
            </Card.Header>
            <div>
                <Card.Body>
                <Card.Title>{service.serviceProvider}</Card.Title>
                <Card.Text>
                    
                </Card.Text>
                <Button variant='primary'><i class="fa-solid fa-trash-can"></i></Button>
                <Button variant="primary"><i class="fa-regular fa-pen-to-square"></i></Button>
                </Card.Body>
            </div>
        </Card>
    </>
  )
}

export default ServiceCard
