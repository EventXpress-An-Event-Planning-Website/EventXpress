import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { useLogoutMutation } from '../../slices/userApiSlice'
import { removeCredentials } from '../../slices/authSlice' 
import Logo from '../../assets/images/EventXpressLogo.png'

const CustomerNavbar = () => {

  
  const { userInfo } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApiCall] = useLogoutMutation()

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(removeCredentials())
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <header>
      <Navbar  variant="dark" expand="lg" collapseOnSelect className='cusnavcontainer'>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand><img src={Logo} alt='EventXPress' /></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
              {userInfo ? (
                <>
                  <LinkContainer to="/customerHome">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/packages">
                    <Nav.Link>Packages</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/customer/myEvents">
                    <Nav.Link>My Events</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/customer/buyTickets">
                    <Nav.Link>Buy Tickets</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/customer/sellTickets">
                    <Nav.Link>Sell Tickets</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/customer/notification">
                    <Navbar.Brand></Navbar.Brand>
                  </LinkContainer>
                  <NavDropdown title={userInfo.name} id="username">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/logout">
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <FaSignInAlt /> Sign In
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>
                      <FaSignOutAlt /> Sign Up
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/packages">
                    <Nav.Link>
                      <FaSignOutAlt /> Packages
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export {CustomerNavbar}
