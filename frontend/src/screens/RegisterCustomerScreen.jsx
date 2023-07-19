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
          role: 'customer',
        }).unwrap()
        dispatch(setCredentials({ ...res }))

        // Upload the images separately
        const formData = new FormData()
        // Append the nicImage file to the formData
        formData.append('file', nicImage)

        // Make a separate request to upload the image
        const uploadResponse = await uploadSingle(formData)
        // Handle the upload response as needed
        console.log(uploadResponse)

        navigate('/')
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
    <FormContainer>
      <h1>Register as customer</h1>
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
            onChange={handleNicImageChange}
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
            onChange={handleNicImageChange}
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
  )
}

export default RegisterCustomerScreen
