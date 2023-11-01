import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { toast } from 'react-toastify'
// import Loader from '../components/Loader'
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
  const [businessRegImage, setBusinessRegImage] = useState(null)
  const [facebookLink, setFacebookLink] = useState('')
  const [instagramLink, setInstagramLink] = useState('')
  const [twitterLink, setTwitterLink] = useState('')
  const [contactNo, setContactNo] = useState('+94')

  // validation
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nicError, setNicError] = useState('');
  const [contactNoError, setContactNoError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [facebookLinkError, setFacebookLinkError] = useState('');
  const [instagramLinkError, setInstagramLinkError] = useState('');
  const [twitterLinkError, setTwitterLinkError] = useState('');

  const cities = ['Akkaraipattu',
    'Ambalangoda',
    'Ampara',
    'Anuradhapura',
    'Badulla',
    'Balangoda',
    'Bandarawela',
    'Batticaloa',
    'Beruwala',
    'Boralesgamuwa',
    'Chavakachcheri',
    'Chilaw',
    'Colombo',
    'Dambulla',
    'Dehiwala - Mount Lavinia',
    'Embilipitiya',
    'Eravur',
    'Galle',
    'Gampaha',
    'Gampola',
    'Hambantota',
    'Haputale',
    'Hatton - Dickoya',
    'Hikkaduwa',
    'Horana',
    'Ja - Ela',
    'Jaffna',
    'Kadugannawa',
    'Kaduwela',
    'Kalmunai',
    'Kalutara',
    'Kandy',
    'Kattankudy(Kathankudi)',
    'Katunayake(-Seeduwa)',
    'Kegalle',
    'Kesbewa',
    'Kilinochchi',
    'Kinniya',
    'Kolonnawa',
    'Kuliyapitiya',
    'Kurunegala',
    'Maharagama',
    'Mannar',
    'Matale',
    'Matara',
    'Minuwangoda',
    'Moneragala',
    'Moratuwa',
    'Mullaitivu',
    'Nawalapitiya',
    'Negombo',
    'Nuwara Eliya',
    'Panadura',
    'Peliyagoda',
    'Point Pedro',
    'Polonnaruwa',
    'Puttalam',
    'Ratnapura',
    'Seethawakapura(Avissawella)',
    'Sri Jayawardenepura(Kotte)',
    'Tangalle',
    'Thalawakele - Lindula',
    'Trincomalee',
    'Valvettithurai',
    'Vavuniya',
    'Wattala - Mabole',
    'Wattegama',
    'Weligama']

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

  const handleFacebookLinkBlur = () => {
    const facebookLinkRegex = /^(https?:\/\/)?(www\.)?facebook\.com\/[^/]+$/i;
    if (facebookLink.length > 0 && !facebookLinkRegex.test(facebookLink)) {
      setFacebookLinkError('Invalid Facebook link format.');
    } else {
      setFacebookLinkError('');
    }
  }

  const handleInstagramLinkBlur = () => {
    const instagramLinkRegex = /^(https?:\/\/)?(www\.)?instagram\.com\/[^/]+$/i;
    if (instagramLink.length > 0 && !instagramLinkRegex.test(instagramLink)) {
      setInstagramLinkError('Invalid Instagram link format.');
    } else {
      setInstagramLinkError('');
    }
  };

  const handleTwitterLinkBlur = () => {
    const twitterLinkRegex = /^(https?:\/\/)?(www\.)?twitter\.com\/[^/]+$/i;
    if (twitterLink.length > 0 && !twitterLinkRegex.test(twitterLink)) {
      setTwitterLinkError('Invalid Twitter link format.');
    } else {
      setTwitterLinkError('');
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

  const [register, { isLoading }] = useRegisterMutation()
  const [uploadSingle] = useUploadSingleMutation();

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate('/')
  //   }
  // }, [navigate, userInfo])

  const handleNicImageUpload = (e) => {
    const file = e.target.files[0]
    setNicImage(file)
  }

  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0]
    setProfileImage(file)
  }

  const handleBusinessRegImageUpload = (e) => {
    const file = e.target.files[0]
    setBusinessRegImage(file)
  }

  const uploadImage = async (img) => {
    try {
      if (img) {
        const imageFormData = new FormData();
        imageFormData.append('file', img);
        const response = await uploadSingle(imageFormData)
        if (response && response.data.filename) {
          const imageFilename = response.data.filename;
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

      const profileImageFilename = await uploadImage(profileImage);
      const nicImageFilename = await uploadImage(nicImage);
      const businessImageFilename = await uploadImage(businessRegImage);

      const res = await register({
        name,
        email,
        nic,
        location,
        contactNo,
        facebookLink,
        instagramLink,
        twitterLink,
        password,
        role: 'serviceProvider',
        profileImage: profileImageFilename,
        nicImage: nicImageFilename,
        businessRegImage: businessImageFilename
      }).unwrap()
      // dispatch(setCredentials({ ...res }))
      toast.success('Please verify your email to continue');
      navigate(`/checkYourEmail`)
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
              <h2>Become a service provider in EventXpress</h2>
            </div>
            <Form onSubmit={submitHandler}>
              <Row>
                <Col md={6}>
                  <Form.Group className="my-2" controlId="name">
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

                  <Form.Group className="my-2" controlId="profileImage">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleProfileImageUpload}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="email">
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

                  <Form.Group className="my-2" controlId="nic">
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
                  <Form.Group className="my-2" controlId="nicImage">
                    <Form.Label>NIC Image*</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleNicImageUpload}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="my-2" controlId="businessRegImage">
                    <Form.Label>Business Registration Image</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleBusinessRegImageUpload}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="location">
                    <Form.Label>Nearest City*</Form.Label>
                    <Form.Control
                      as="select"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    >
                      <option value="">Select your nearest city</option>
                      {cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="my-2" controlId="contactNo">
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
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="facebookLink">
                    <Form.Label>Facebook Link</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter facebook link"
                      value={facebookLink}
                      onChange={(e) => setFacebookLink(e.target.value)}
                      onBlur={handleFacebookLinkBlur}
                    />
                    {facebookLinkError && <div className="text-danger">{facebookLinkError}</div>}
                  </Form.Group>

                  <Form.Group className="my-2" controlId="instagramLink">
                    <Form.Label>Instagram Link</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter instagram link"
                      value={instagramLink}
                      onChange={(e) => setInstagramLink(e.target.value)}
                      onBlur={handleInstagramLinkBlur}
                    />
                    {instagramLinkError && <div className="text-danger">{instagramLinkError}</div>}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="twitterLink">
                    <Form.Label>Twitter Link</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter twitter link"
                      value={twitterLink}
                      onChange={(e) => setTwitterLink(e.target.value)}
                      onBlur={handleTwitterLinkBlur}
                    />
                    {twitterLinkError && <div className="text-danger">{twitterLinkError}</div>}
                  </Form.Group>

                  <Form.Group className="my-2" controlId="password">
                    <Form.Label>Password*</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={handlePasswordBlur}
                      required
                    />
                    {passwordError && <div className="text-danger">{passwordError}</div>}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="confirmPassword">
                    <Form.Label>Confirm Password*</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
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

import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { toast } from 'react-toastify'
// import Loader from '../components/Loader'
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
  const [businessRegImage, setBusinessRegImage] = useState(null)
  const [facebookLink, setFacebookLink] = useState('')
  const [instagramLink, setInstagramLink] = useState('')
  const [twitterLink, setTwitterLink] = useState('')
  const [contactNo, setContactNo] = useState('+94')

  // validation
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nicError, setNicError] = useState('');
  const [contactNoError, setContactNoError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [facebookLinkError, setFacebookLinkError] = useState('');
  const [instagramLinkError, setInstagramLinkError] = useState('');
  const [twitterLinkError, setTwitterLinkError] = useState('');

  const cities = ['Akkaraipattu',
    'Ambalangoda',
    'Ampara',
    'Anuradhapura',
    'Badulla',
    'Balangoda',
    'Bandarawela',
    'Batticaloa',
    'Beruwala',
    'Boralesgamuwa',
    'Chavakachcheri',
    'Chilaw',
    'Colombo',
    'Dambulla',
    'Dehiwala - Mount Lavinia',
    'Embilipitiya',
    'Eravur',
    'Galle',
    'Gampaha',
    'Gampola',
    'Hambantota',
    'Haputale',
    'Hatton - Dickoya',
    'Hikkaduwa',
    'Horana',
    'Ja - Ela',
    'Jaffna',
    'Kadugannawa',
    'Kaduwela',
    'Kalmunai',
    'Kalutara',
    'Kandy',
    'Kattankudy(Kathankudi)',
    'Katunayake(-Seeduwa)',
    'Kegalle',
    'Kesbewa',
    'Kilinochchi',
    'Kinniya',
    'Kolonnawa',
    'Kuliyapitiya',
    'Kurunegala',
    'Maharagama',
    'Mannar',
    'Matale',
    'Matara',
    'Minuwangoda',
    'Moneragala',
    'Moratuwa',
    'Mullaitivu',
    'Nawalapitiya',
    'Negombo',
    'Nuwara Eliya',
    'Panadura',
    'Peliyagoda',
    'Point Pedro',
    'Polonnaruwa',
    'Puttalam',
    'Ratnapura',
    'Seethawakapura(Avissawella)',
    'Sri Jayawardenepura(Kotte)',
    'Tangalle',
    'Thalawakele - Lindula',
    'Trincomalee',
    'Valvettithurai',
    'Vavuniya',
    'Wattala - Mabole',
    'Wattegama',
    'Weligama']

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

  const handleFacebookLinkBlur = () => {
    const facebookLinkRegex = /^(https?:\/\/)?(www\.)?facebook\.com\/[^/]+$/i;
    if (facebookLink.length > 0 && !facebookLinkRegex.test(facebookLink)) {
      setFacebookLinkError('Invalid Facebook link format.');
    } else {
      setFacebookLinkError('');
    }
  }

  const handleInstagramLinkBlur = () => {
    const instagramLinkRegex = /^(https?:\/\/)?(www\.)?instagram\.com\/[^/]+$/i;
    if (instagramLink.length > 0 && !instagramLinkRegex.test(instagramLink)) {
      setInstagramLinkError('Invalid Instagram link format.');
    } else {
      setInstagramLinkError('');
    }
  };

  const handleTwitterLinkBlur = () => {
    const twitterLinkRegex = /^(https?:\/\/)?(www\.)?twitter\.com\/[^/]+$/i;
    if (twitterLink.length > 0 && !twitterLinkRegex.test(twitterLink)) {
      setTwitterLinkError('Invalid Twitter link format.');
    } else {
      setTwitterLinkError('');
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

  const [register, { isLoading }] = useRegisterMutation()
  const [uploadSingle] = useUploadSingleMutation();

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate('/')
  //   }
  // }, [navigate, userInfo])

  const handleNicImageUpload = (e) => {
    const file = e.target.files[0]
    setNicImage(file)
  }

  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0]
    setProfileImage(file)
  }

  const handleBusinessRegImageUpload = (e) => {
    const file = e.target.files[0]
    setBusinessRegImage(file)
  }

  const uploadImage = async (img) => {
    try {
      if (img) {
        const imageFormData = new FormData();
        imageFormData.append('file', img);
        const response = await uploadSingle(imageFormData)
        if (response && response.data.filename) {
          const imageFilename = response.data.filename;
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

      const profileImageFilename = await uploadImage(profileImage);
      const nicImageFilename = await uploadImage(nicImage);
      const businessImageFilename = await uploadImage(businessRegImage);

      const res = await register({
        name,
        email,
        nic,
        location,
        contactNo,
        facebookLink,
        instagramLink,
        twitterLink,
        password,
        role: 'serviceProvider',
        profileImage: profileImageFilename,
        nicImage: nicImageFilename,
        businessRegImage: businessImageFilename
      }).unwrap()
      // dispatch(setCredentials({ ...res }))
      toast.success('Please verify your email to continue');
      navigate(`/checkYourEmail`)
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
              <h2>Become a service provider in EventXpress</h2>
            </div>
            <Form onSubmit={submitHandler}>
              <Row>
                <Col md={6}>
                  <Form.Group className="my-2" controlId="name">
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

                  <Form.Group className="my-2" controlId="profileImage">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleProfileImageUpload}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="email">
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

                  <Form.Group className="my-2" controlId="nic">
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
                  <Form.Group className="my-2" controlId="nicImage">
                    <Form.Label>NIC Image*</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleNicImageUpload}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="my-2" controlId="businessRegImage">
                    <Form.Label>Business Registration Image</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleBusinessRegImageUpload}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="location">
                    <Form.Label>Nearest City*</Form.Label>
                    <Form.Control
                      as="select"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    >
                      <option value="">Select your nearest city</option>
                      {cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="my-2" controlId="contactNo">
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
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="facebookLink">
                    <Form.Label>Facebook Link</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter facebook link"
                      value={facebookLink}
                      onChange={(e) => setFacebookLink(e.target.value)}
                      onBlur={handleFacebookLinkBlur}
                    />
                    {facebookLinkError && <div className="text-danger">{facebookLinkError}</div>}
                  </Form.Group>

                  <Form.Group className="my-2" controlId="instagramLink">
                    <Form.Label>Instagram Link</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter instagram link"
                      value={instagramLink}
                      onChange={(e) => setInstagramLink(e.target.value)}
                      onBlur={handleInstagramLinkBlur}
                    />
                    {instagramLinkError && <div className="text-danger">{instagramLinkError}</div>}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="twitterLink">
                    <Form.Label>Twitter Link</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter twitter link"
                      value={twitterLink}
                      onChange={(e) => setTwitterLink(e.target.value)}
                      onBlur={handleTwitterLinkBlur}
                    />
                    {twitterLinkError && <div className="text-danger">{twitterLinkError}</div>}
                  </Form.Group>

                  <Form.Group className="my-2" controlId="password">
                    <Form.Label>Password*</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={handlePasswordBlur}
                      required
                    />
                    {passwordError && <div className="text-danger">{passwordError}</div>}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="confirmPassword">
                    <Form.Label>Confirm Password*</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
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

import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { toast } from 'react-toastify'
// import Loader from '../components/Loader'
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
  const [businessRegImage, setBusinessRegImage] = useState(null)
  const [facebookLink, setFacebookLink] = useState('')
  const [instagramLink, setInstagramLink] = useState('')
  const [twitterLink, setTwitterLink] = useState('')
  const [contactNo, setContactNo] = useState('+94')

  // validation
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nicError, setNicError] = useState('');
  const [contactNoError, setContactNoError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [facebookLinkError, setFacebookLinkError] = useState('');
  const [instagramLinkError, setInstagramLinkError] = useState('');
  const [twitterLinkError, setTwitterLinkError] = useState('');

  const cities = ['Akkaraipattu',
    'Ambalangoda',
    'Ampara',
    'Anuradhapura',
    'Badulla',
    'Balangoda',
    'Bandarawela',
    'Batticaloa',
    'Beruwala',
    'Boralesgamuwa',
    'Chavakachcheri',
    'Chilaw',
    'Colombo',
    'Dambulla',
    'Dehiwala - Mount Lavinia',
    'Embilipitiya',
    'Eravur',
    'Galle',
    'Gampaha',
    'Gampola',
    'Hambantota',
    'Haputale',
    'Hatton - Dickoya',
    'Hikkaduwa',
    'Horana',
    'Ja - Ela',
    'Jaffna',
    'Kadugannawa',
    'Kaduwela',
    'Kalmunai',
    'Kalutara',
    'Kandy',
    'Kattankudy(Kathankudi)',
    'Katunayake(-Seeduwa)',
    'Kegalle',
    'Kesbewa',
    'Kilinochchi',
    'Kinniya',
    'Kolonnawa',
    'Kuliyapitiya',
    'Kurunegala',
    'Maharagama',
    'Mannar',
    'Matale',
    'Matara',
    'Minuwangoda',
    'Moneragala',
    'Moratuwa',
    'Mullaitivu',
    'Nawalapitiya',
    'Negombo',
    'Nuwara Eliya',
    'Panadura',
    'Peliyagoda',
    'Point Pedro',
    'Polonnaruwa',
    'Puttalam',
    'Ratnapura',
    'Seethawakapura(Avissawella)',
    'Sri Jayawardenepura(Kotte)',
    'Tangalle',
    'Thalawakele - Lindula',
    'Trincomalee',
    'Valvettithurai',
    'Vavuniya',
    'Wattala - Mabole',
    'Wattegama',
    'Weligama']

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

  const handleFacebookLinkBlur = () => {
    const facebookLinkRegex = /^(https?:\/\/)?(www\.)?facebook\.com\/[^/]+$/i;
    if (facebookLink.length > 0 && !facebookLinkRegex.test(facebookLink)) {
      setFacebookLinkError('Invalid Facebook link format.');
    } else {
      setFacebookLinkError('');
    }
  }

  const handleInstagramLinkBlur = () => {
    const instagramLinkRegex = /^(https?:\/\/)?(www\.)?instagram\.com\/[^/]+$/i;
    if (instagramLink.length > 0 && !instagramLinkRegex.test(instagramLink)) {
      setInstagramLinkError('Invalid Instagram link format.');
    } else {
      setInstagramLinkError('');
    }
  };

  const handleTwitterLinkBlur = () => {
    const twitterLinkRegex = /^(https?:\/\/)?(www\.)?twitter\.com\/[^/]+$/i;
    if (twitterLink.length > 0 && !twitterLinkRegex.test(twitterLink)) {
      setTwitterLinkError('Invalid Twitter link format.');
    } else {
      setTwitterLinkError('');
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

  const [register, { isLoading }] = useRegisterMutation()
  const [uploadSingle] = useUploadSingleMutation();

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate('/')
  //   }
  // }, [navigate, userInfo])

  const handleNicImageUpload = (e) => {
    const file = e.target.files[0]
    setNicImage(file)
  }

  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0]
    setProfileImage(file)
  }

  const handleBusinessRegImageUpload = (e) => {
    const file = e.target.files[0]
    setBusinessRegImage(file)
  }

  const uploadImage = async (img) => {
    try {
      if (img) {
        const imageFormData = new FormData();
        imageFormData.append('file', img);
        const response = await uploadSingle(imageFormData)
        if (response && response.data.filename) {
          const imageFilename = response.data.filename;
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

      const profileImageFilename = await uploadImage(profileImage);
      const nicImageFilename = await uploadImage(nicImage);
      const businessImageFilename = await uploadImage(businessRegImage);

      const res = await register({
        name,
        email,
        nic,
        location,
        contactNo,
        facebookLink,
        instagramLink,
        twitterLink,
        password,
        role: 'serviceProvider',
        profileImage: profileImageFilename,
        nicImage: nicImageFilename,
        businessRegImage: businessImageFilename
      }).unwrap()
      // dispatch(setCredentials({ ...res }))
      toast.success('Please verify your email to continue');
      navigate(`/checkYourEmail`)
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
              <h2>Become a service provider in EventXpress</h2>
            </div>
            <Form onSubmit={submitHandler}>
              <Row>
                <Col md={6}>
                  <Form.Group className="my-2" controlId="name">
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

                  <Form.Group className="my-2" controlId="profileImage">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleProfileImageUpload}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="email">
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

                  <Form.Group className="my-2" controlId="nic">
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
                  <Form.Group className="my-2" controlId="nicImage">
                    <Form.Label>NIC Image*</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleNicImageUpload}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="my-2" controlId="businessRegImage">
                    <Form.Label>Business Registration Image</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleBusinessRegImageUpload}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="location">
                    <Form.Label>Nearest City*</Form.Label>
                    <Form.Control
                      as="select"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    >
                      <option value="">Select your nearest city</option>
                      {cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="my-2" controlId="contactNo">
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
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="facebookLink">
                    <Form.Label>Facebook Link</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter facebook link"
                      value={facebookLink}
                      onChange={(e) => setFacebookLink(e.target.value)}
                      onBlur={handleFacebookLinkBlur}
                    />
                    {facebookLinkError && <div className="text-danger">{facebookLinkError}</div>}
                  </Form.Group>

                  <Form.Group className="my-2" controlId="instagramLink">
                    <Form.Label>Instagram Link</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter instagram link"
                      value={instagramLink}
                      onChange={(e) => setInstagramLink(e.target.value)}
                      onBlur={handleInstagramLinkBlur}
                    />
                    {instagramLinkError && <div className="text-danger">{instagramLinkError}</div>}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="twitterLink">
                    <Form.Label>Twitter Link</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter twitter link"
                      value={twitterLink}
                      onChange={(e) => setTwitterLink(e.target.value)}
                      onBlur={handleTwitterLinkBlur}
                    />
                    {twitterLinkError && <div className="text-danger">{twitterLinkError}</div>}
                  </Form.Group>

                  <Form.Group className="my-2" controlId="password">
                    <Form.Label>Password*</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={handlePasswordBlur}
                      required
                    />
                    {passwordError && <div className="text-danger">{passwordError}</div>}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="confirmPassword">
                    <Form.Label>Confirm Password*</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
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

import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { toast } from 'react-toastify'
// import Loader from '../components/Loader'
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
  const [businessRegImage, setBusinessRegImage] = useState(null)
  const [facebookLink, setFacebookLink] = useState('')
  const [instagramLink, setInstagramLink] = useState('')
  const [twitterLink, setTwitterLink] = useState('')
  const [contactNo, setContactNo] = useState('+94')

  // validation
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nicError, setNicError] = useState('');
  const [contactNoError, setContactNoError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [facebookLinkError, setFacebookLinkError] = useState('');
  const [instagramLinkError, setInstagramLinkError] = useState('');
  const [twitterLinkError, setTwitterLinkError] = useState('');

  const cities = ['Akkaraipattu',
    'Ambalangoda',
    'Ampara',
    'Anuradhapura',
    'Badulla',
    'Balangoda',
    'Bandarawela',
    'Batticaloa',
    'Beruwala',
    'Boralesgamuwa',
    'Chavakachcheri',
    'Chilaw',
    'Colombo',
    'Dambulla',
    'Dehiwala - Mount Lavinia',
    'Embilipitiya',
    'Eravur',
    'Galle',
    'Gampaha',
    'Gampola',
    'Hambantota',
    'Haputale',
    'Hatton - Dickoya',
    'Hikkaduwa',
    'Horana',
    'Ja - Ela',
    'Jaffna',
    'Kadugannawa',
    'Kaduwela',
    'Kalmunai',
    'Kalutara',
    'Kandy',
    'Kattankudy(Kathankudi)',
    'Katunayake(-Seeduwa)',
    'Kegalle',
    'Kesbewa',
    'Kilinochchi',
    'Kinniya',
    'Kolonnawa',
    'Kuliyapitiya',
    'Kurunegala',
    'Maharagama',
    'Mannar',
    'Matale',
    'Matara',
    'Minuwangoda',
    'Moneragala',
    'Moratuwa',
    'Mullaitivu',
    'Nawalapitiya',
    'Negombo',
    'Nuwara Eliya',
    'Panadura',
    'Peliyagoda',
    'Point Pedro',
    'Polonnaruwa',
    'Puttalam',
    'Ratnapura',
    'Seethawakapura(Avissawella)',
    'Sri Jayawardenepura(Kotte)',
    'Tangalle',
    'Thalawakele - Lindula',
    'Trincomalee',
    'Valvettithurai',
    'Vavuniya',
    'Wattala - Mabole',
    'Wattegama',
    'Weligama']

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

  const handleFacebookLinkBlur = () => {
    const facebookLinkRegex = /^(https?:\/\/)?(www\.)?facebook\.com\/[^/]+$/i;
    if (facebookLink.length > 0 && !facebookLinkRegex.test(facebookLink)) {
      setFacebookLinkError('Invalid Facebook link format.');
    } else {
      setFacebookLinkError('');
    }
  }

  const handleInstagramLinkBlur = () => {
    const instagramLinkRegex = /^(https?:\/\/)?(www\.)?instagram\.com\/[^/]+$/i;
    if (instagramLink.length > 0 && !instagramLinkRegex.test(instagramLink)) {
      setInstagramLinkError('Invalid Instagram link format.');
    } else {
      setInstagramLinkError('');
    }
  };

  const handleTwitterLinkBlur = () => {
    const twitterLinkRegex = /^(https?:\/\/)?(www\.)?twitter\.com\/[^/]+$/i;
    if (twitterLink.length > 0 && !twitterLinkRegex.test(twitterLink)) {
      setTwitterLinkError('Invalid Twitter link format.');
    } else {
      setTwitterLinkError('');
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

  const [register, { isLoading }] = useRegisterMutation()
  const [uploadSingle] = useUploadSingleMutation();

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate('/')
  //   }
  // }, [navigate, userInfo])

  const handleNicImageUpload = (e) => {
    const file = e.target.files[0]
    setNicImage(file)
  }

  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0]
    setProfileImage(file)
  }

  const handleBusinessRegImageUpload = (e) => {
    const file = e.target.files[0]
    setBusinessRegImage(file)
  }

  const uploadImage = async (img) => {
    try {
      if (img) {
        const imageFormData = new FormData();
        imageFormData.append('file', img);
        const response = await uploadSingle(imageFormData)
        if (response && response.data.filename) {
          const imageFilename = response.data.filename;
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

      const profileImageFilename = await uploadImage(profileImage);
      const nicImageFilename = await uploadImage(nicImage);
      const businessImageFilename = await uploadImage(businessRegImage);

      const res = await register({
        name,
        email,
        nic,
        location,
        contactNo,
        facebookLink,
        instagramLink,
        twitterLink,
        password,
        role: 'serviceProvider',
        profileImage: profileImageFilename,
        nicImage: nicImageFilename,
        businessRegImage: businessImageFilename
      }).unwrap()
      // dispatch(setCredentials({ ...res }))
      toast.success('Please verify your email to continue');
      navigate(`/checkYourEmail`)
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
              <h2>Become a service provider in EventXpress</h2>
            </div>
            <Form onSubmit={submitHandler}>
              <Row>
                <Col md={6}>
                  <Form.Group className="my-2" controlId="name">
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

                  <Form.Group className="my-2" controlId="profileImage">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleProfileImageUpload}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="email">
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

                  <Form.Group className="my-2" controlId="nic">
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
                  <Form.Group className="my-2" controlId="nicImage">
                    <Form.Label>NIC Image*</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleNicImageUpload}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="my-2" controlId="businessRegImage">
                    <Form.Label>Business Registration Image</Form.Label>
                    <Form.Control
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleBusinessRegImageUpload}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="location">
                    <Form.Label>Nearest City*</Form.Label>
                    <Form.Control
                      as="select"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    >
                      <option value="">Select your nearest city</option>
                      {cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="my-2" controlId="contactNo">
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
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="facebookLink">
                    <Form.Label>Facebook Link</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter facebook link"
                      value={facebookLink}
                      onChange={(e) => setFacebookLink(e.target.value)}
                      onBlur={handleFacebookLinkBlur}
                    />
                    {facebookLinkError && <div className="text-danger">{facebookLinkError}</div>}
                  </Form.Group>

                  <Form.Group className="my-2" controlId="instagramLink">
                    <Form.Label>Instagram Link</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter instagram link"
                      value={instagramLink}
                      onChange={(e) => setInstagramLink(e.target.value)}
                      onBlur={handleInstagramLinkBlur}
                    />
                    {instagramLinkError && <div className="text-danger">{instagramLinkError}</div>}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="twitterLink">
                    <Form.Label>Twitter Link</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter twitter link"
                      value={twitterLink}
                      onChange={(e) => setTwitterLink(e.target.value)}
                      onBlur={handleTwitterLinkBlur}
                    />
                    {twitterLinkError && <div className="text-danger">{twitterLinkError}</div>}
                  </Form.Group>

                  <Form.Group className="my-2" controlId="password">
                    <Form.Label>Password*</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={handlePasswordBlur}
                      required
                    />
                    {passwordError && <div className="text-danger">{passwordError}</div>}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="my-2" controlId="confirmPassword">
                    <Form.Label>Confirm Password*</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
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
