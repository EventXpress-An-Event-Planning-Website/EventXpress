// import React from 'react'
// import { Button } from "react-bootstrap"
// import { Link } from "react-router-dom"
import pic from '../../../assets/images/djfes.jpg'

const HomePicture = () => {
  return (
    <section className="home_pic">
      <img className='picture' src={pic} />

      {/* <Link to={`/ServiceProvider/packageForm`}>
          <Button className="create_btn">Create Package</Button> 
      </Link> */}
    </section>
    
  )
}

export default HomePicture