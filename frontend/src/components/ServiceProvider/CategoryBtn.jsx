// import React from 'react'
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'

const CategoryBtn = () => {
    return (
        <>
            <Button style={{background: "#8E24AA", border: "white"}}>Venue</Button>{' '}
            <Button style={{background: "#8E24AA", border: "white"}}>Photography</Button>{' '}
            <Button style={{background: "#8E24AA", border: "white"}}>Cake</Button>{' '}
            <Button style={{background: "#8E24AA", border: "white"}}>Decoration</Button>{' '}
            <Button style={{background: "#8E24AA", border: "white"}}>Sound</Button>{' '}
            <Button style={{background: "#8E24AA", border: "white"}}>Catering</Button>{' '}
        
            
            <Link to={`/ServiceProvider/packageForm`}>
                <Button style={{background: "black",marginLeft: "40%"}}>Create My Package</Button>
            </Link>

      </>

    )
}

export default CategoryBtn