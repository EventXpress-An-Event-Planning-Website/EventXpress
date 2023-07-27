import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { toast } from 'react-toastify'
// import Loader from '../components/Loader'
import { useRegisterMutation } from '../slices/userApiSlice'
import { setCredentials } from '../slices/authSlice'
import Header from '../components/header'

const RegisterCustomerScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nic, setNic] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [nicImage, setNicImage] = useState(null)
  const [profileImage, setProfileImage] = useState('')
  const [location, setLocation] = useState('')
  const [facebookLink, setFacebookLink] = useState('')
  const [instagramLink, setInstagramLink] = useState('')
  const [twitterLink, setTwitterLink] = useState('')
  const [contactNo, setContactNo] = useState('+94')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { userInfo } = useSelector((state) => state.auth)

  const [register, { isLoading }] = useRegisterMutation()

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const handleNicImageUpload = (e) => {
    const file = e.target.files[0]
    setNicImage(file)
  }

  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0]
    setProfileImage(file)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      try {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('nic', nic)
        formData.append('nicImage', nicImage)
        formData.append('profileImage', profileImage)
        formData.append('location', location)
        formData.append('contactNo', contactNo)
        formData.append('facebookLink', facebookLink)
        formData.append('instagramLink', instagramLink)
        formData.append('twitterLink', twitterLink)
        formData.append('password', password)
        formData.append('role', 'serviceProvider')

        const res = await register(formData).unwrap()
        dispatch(setCredentials({ ...res }))
        navigate('/')
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
  }

  return (
    <>
    
    <FormContainer>
      <h1>Register as service provider</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="name">
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

        <Form.Group className="my-2" controlId="profileImage">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={handleProfileImageUpload}
          />
        </Form.Group>

        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="nic">
          <Form.Label>NIC Number*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter NIC number"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="nicImage">
          <Form.Label>NIC Image</Form.Label>
          <Form.Control
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={handleNicImageUpload}
          />
        </Form.Group>

        <Form.Group className="my-2" controlId="location">
          <Form.Label>Location*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="contactNo">
          <Form.Label>Contact No.*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter contact number"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="facebookLink">
          <Form.Label>Facebook Link</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter facebook link"
            value={facebookLink}
            onChange={(e) => setFacebookLink(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="instagramLink">
          <Form.Label>Instagram Link</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter instagram link"
            value={instagramLink}
            onChange={(e) => setInstagramLink(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="twitterLink">
          <Form.Label>Twitter Link</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter twitter link"
            value={twitterLink}
            onChange={(e) => setTwitterLink(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password*</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="confirmPassword">
          <Form.Label>Confirm Password*</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>

        {/* {isLoading && <Loader />} */}

        <Button type="submit" variant="primary" className="mt-3">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Already have an account? <Link to={`/login`}>Login</Link>
        </Col>
      </Row>
    </FormContainer>
    </>
  )
}

export default RegisterCustomerScreen
