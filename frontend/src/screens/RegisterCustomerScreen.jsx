import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { toast } from 'react-toastify'
import Loader from '../components/Loader'
import { useRegisterMutation } from '../slices/userApiSlice'
import { useUploadSingleMutation } from '../slices/uploadApiSlice'
import { setCredentials } from '../slices/authSlice'
import Header from '../components/header'

const RegisterCustomerScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nic, setNic] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [nicImage, setNicImage] = useState(null)
  const [profileImage, setProfileImage] = useState(null)
  const [location, setLocation] = useState('')
  const [contactNo, setContactNo] = useState('+94')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { userInfo } = useSelector((state) => state.auth)

  const [register, { isLoading: registerLoading }] = useRegisterMutation()
  const [uploadSingle, { isLoading: uploadSingleLoading }] =
    useUploadSingleMutation()

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      try {
        const res = await register({
          name,
          email,
          nic,
          location,
          contactNo,
          password,
          role: 'customer'
        }).unwrap()
        console.log(res);
        dispatch(setCredentials({ ...res }))

        navigate('/customerHome')
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
  }

  const handleNicImageChange = (e) => {
    const file = e.target.files[0]
    setNicImage(file)
  }

  return (
    <>
      <div className="registration-container">
        <img
          src="../../src/assets/images/auth-form-img.png"
          alt="Image"
          className="registration-image"
        />
        <div className="registration-left-side"></div>
        <div className="registration-right-side">
          <div className="registration-form-wrapper">
            <div className="registration-header-container">
              <h2>Become a customer in EventXpress</h2>
            </div>
            <Form onSubmit={submitHandler}>
              <Row>
                <Col md={6}>
                  <Form.Group className="my-4" controlId="name">
                    <Form.Label>Full Name*</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Enter full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      autoFocus
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group className="my-4" controlId="profileImage">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleNicImageChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-4" controlId="email">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group className="my-4" controlId="nic">
                    <Form.Label>NIC Number*</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter NIC number"
                      value={nic}
                      onChange={(e) => setNic(e.target.value)}
                      required
                    ></Form.Control>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-4" controlId="nicImage">
                    <Form.Label>NIC Image</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleNicImageChange}
                    />
                  </Form.Group>

                  <Form.Group className="my-4" controlId="location">
                    <Form.Label>Location*</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    ></Form.Control>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-4" controlId="contactNo">
                    <Form.Label>Contact No.*</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter contact number"
                      value={contactNo}
                      onChange={(e) => setContactNo(e.target.value)}
                      required
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group className="my-4" controlId="password">
                    <Form.Label>Password*</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    ></Form.Control>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-4" controlId="confirmPassword">
                    <Form.Label>Confirm Password*</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              {/* {isLoading && <Loader />} */}
              <Row className="py-3">
                <Col>
                  <div className="registration-link-container">
                    Yes, I have an account?{' '}
                    <Link to={`/login`} className="authentication-link">
                      Login
                    </Link>
                  </div>
                </Col>
                <Col md={6} className="text-md-end">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100 mt-3"
                  >
                    Register
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterCustomerScreen
