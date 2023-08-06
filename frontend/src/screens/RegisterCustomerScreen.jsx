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

  // validation
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nicError, setNicError] = useState('');
  const [contactNoError, setContactNoError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleNameBlur = () => {
    if (!/^[a-zA-Z\s]*$/.test(name)) {
      setNameError('Invalid name format. Only alphabetic characters are allowed.');
    } else {
      setNameError('');
    }
  };

  const handleEmailBlur = () => {
    if (email.length > 0 && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setEmailError('Invalid email format.');
    } else {
      setEmailError('');
    }
  };

  const handleNicBlur = () => {
    if (nic.length > 0 && !/^\d{12}$|^\d{9}[vV]$/.test(nic)) {
      setNicError('NIC must be 12 digits or 9 digits followed by "V".');
    } else {
      setNicError('');
    }
  };

  const handleContactNoBlur = () => {
    if (contactNo.length > 3 && !/^\+94[0-9]{9}$/.test(contactNo)) {
      setContactNoError('Invalid contact number format.');
    } else {
      setContactNoError('');
    }
  };

  const handlePasswordBlur = () => {
    if (password.length > 0 && !/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
      setPasswordError('Password must contain at least 8 characters with 1 uppercase letter and 1 number.');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordBlur = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { userInfo } = useSelector((state) => state.auth)

  const [register, { isLoading: registerLoading }] = useRegisterMutation()
  const [uploadSingle] = useUploadSingleMutation();

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const handleNicImageChange = (e) => {
    const file = e.target.files[0]
    setNicImage(file)
  }
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0]
    setProfileImage(file)
  }

  const uploadImage = async (img) => {
    try {
      if (img) {
        const imageFormData = new FormData();
        imageFormData.append('file', img);
        const response = await uploadSingle(imageFormData)
        console.log('response is: ', response);
        // Check if the response has the expected structure and contains the filename
        if (response && response.filename) {
          const imageFilename = response.filename;
          return imageFilename;
        } else {
          throw new Error('Error uploading image: Invalid response format');
        }
      }
      return ''; // If no image is provided, return an empty string
    } catch (error) {
      console.error('Error uploading image:', error);
      return ''; // Return an empty string if there is an error during upload
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      if (
        nameError ||
        emailError ||
        nicError ||
        contactNoError ||
        passwordError ||
        confirmPasswordError
      ) {
        toast.error('Please fix the errors in the form before submitting.');
        return;
      }

      // const profileImageFilename = await uploadImage(profileImage);
      // const nicImageFilename = await uploadImage(nicImage);
      const res = await register({
        name,
        email,
        nic,
        location,
        contactNo,
        password,
        role: 'customer',
        // profileImage: profileImageFilename,
        // nicImage: nicImageFilename,
      }).unwrap()
      dispatch(setCredentials({ ...res }))
      navigate('/customerHome')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }

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
                      onBlur={handleNameBlur}
                      required
                      autoFocus
                    />
                    {nameError && <div className="text-danger">{nameError}</div>}
                  </Form.Group>

                  <Form.Group className="my-4" controlId="profileImage">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleProfileImageChange}
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
                      onBlur={handleEmailBlur}
                      required
                    />
                    {emailError && <div className="text-danger">{emailError}</div>}
                  </Form.Group>

                  <Form.Group className="my-4" controlId="nic">
                    <Form.Label>NIC Number*</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter NIC number"
                      value={nic}
                      onChange={(e) => setNic(e.target.value)}
                      onBlur={handleNicBlur}
                      required
                    />
                    {nicError && <div className="text-danger">{nicError}</div>}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-4" controlId="nicImage">
                    <Form.Label>NIC Image*</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleNicImageChange}
                      required
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
                      onBlur={handleContactNoBlur}
                      required
                    />
                    {contactNoError && <div className="text-danger">{contactNoError}</div>}
                  </Form.Group>

                  <Form.Group className="my-4" controlId="password">
                    <Form.Label>Password*</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="8 characters + uppercase + number"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={handlePasswordBlur}
                      required
                    />
                    {passwordError && <div className="text-danger">{passwordError}</div>}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-4" controlId="confirmPassword">
                    <Form.Label>Confirm Password*</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="same as password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onBlur={handleConfirmPasswordBlur}
                      required
                    />
                    {confirmPasswordError && <div className="text-danger">{confirmPasswordError}</div>}
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
      </div >
    </>
  )
}

export default RegisterCustomerScreen
