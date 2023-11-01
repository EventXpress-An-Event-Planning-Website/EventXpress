import React from "react";
import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useLogoutMutation } from "../slices/userApiSlice";
import { removeCredentials } from "../slices/authSlice";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(removeCredentials());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const isLoggedIn = !!userInfo;
  return (
    <header>
      <Navbar
        variant="dark"
        expand="lg"
        collapseOnSelect
        className={
          isLoggedIn ? "cusnavcontainer" : "cusnavcontainer-otherclass"
        }
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img className="navlogo" src={Logo} alt="EventXPress" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {userInfo ? (
                userInfo.role === "customer" ? (
                  <>
                    <LinkContainer to="/customerHome">
                      <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Venue">
                      <Nav.Link>Packages</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/customer/myEvents">
                      <Nav.Link>My Events</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/customer/buyTickets">
                      <Nav.Link>Buy Tickets</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/customer/notification">
                      <Navbar.Brand></Navbar.Brand>
                    </LinkContainer>
                    <NavDropdown title={userInfo.name} id="username">
                      <LinkContainer to="/customer/profile">
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/logout">
                        <NavDropdown.Item onClick={logoutHandler}>
                          Logout
                        </NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  </>
                ) : userInfo.role === "serviceProvider" ? (
                  <>
                    <LinkContainer to="/ServiceProvider/home">
                      <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="Create Packages">
                      <LinkContainer to="/ServiceProvider/packageForm">
                        <NavDropdown.Item>Normal Package</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/ServiceProvider/preferences">
                        <NavDropdown.Item>Predefined Package</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                    <NavDropdown title="My Packages">
                      <LinkContainer to="/ServiceProvider/packagesView">
                        <NavDropdown.Item>Normal Package</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/Birthday">
                        <NavDropdown.Item>Predefined Package</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                    {/* <LinkContainer to="/customer/buyTickets">
                      <Nav.Link>Buy Tickets</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/ServiceProvider/Requests">
                      <Nav.Link>Requests</Nav.Link>
                    </LinkContainer> */}
                    <LinkContainer to="/customer/notification">
                      <Navbar.Brand></Navbar.Brand>
                    </LinkContainer>
                    <NavDropdown title={userInfo.name} id="username">
                      <LinkContainer to="/ServiceProvider/profile">
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/logout">
                        <NavDropdown.Item onClick={logoutHandler}>
                          Logout
                        </NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  </>
                ) : userInfo.role === "admin" ? (
                  <>
                    <LinkContainer to="/adminDashboard">
                      <Nav.Link> Home &nbsp;</Nav.Link>
                    </LinkContainer>
                    {/* <LinkContainer to="/">
                      <NavDropdown
                        title="Notification &nbsp;"
                        id="navbarScrollingDropdown"
                      >
                        <NavDropdown.Item href="#action3">
                          Notification details are here the company has sent...
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Notification details are here the company has sent...
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                          Notification details are here the company has sent...
                        </NavDropdown.Item>
                      </NavDropdown>
                    </LinkContainer> */}
                    <LinkContainer to="/customerHome">
                      <Nav.Link>View as Customer &nbsp;</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/ServiceProvider/home">
                      <Nav.Link>View as ServiceProvider &nbsp;</Nav.Link>
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
                ) : null
              ) : (
                <>
                  <LinkContainer to="/packages">
                    <Nav.Link>Packages</Nav.Link>
                  </LinkContainer>
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
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
