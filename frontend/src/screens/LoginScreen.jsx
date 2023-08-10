import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '../slices/userApiSlice'
import { setCredentials } from '../slices/authSlice'
import { toast } from 'react-toastify'
import Loader from '../components/Loader'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()

  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    console.log(userInfo)
    if (userInfo && userInfo.role === 'customer') {
      navigate('/customerHome')
    } else if (userInfo && userInfo.role === 'serviceProvider') {
      navigate('/ServiceProvider/home')
    } else if (userInfo && userInfo.role === 'admin') {
      navigate('/adminDashboard')
    }
  }, [navigate, userInfo])

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await login({ email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      navigate('/customerHome')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <>
      <div className="authentication-container">
        <img
          src="../../src/assets/images/auth-img.png"
          alt="Image"
          className="authentication-image"
        />
        <div className="authentication-left-side">
          <div className="authentication-logo-container">
            <Link to="/">
              <img
                src="../../src/assets/images/EventXpressLogo.png"
                alt="Logo"
                className="authentication-logo"
              />
            </Link>
          </div>
          <div className="authentication-form-wrapper">
            <div className="authentication-header-container">
              <h2>Welcome Back</h2>
            </div>
            <Form onSubmit={submitHandler}>
              <Form.Group className="my-4" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  required
                  autoFocus
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group className="my-4" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {isLoading && <Loader />}

              <Button type="submit" variant="primary" className="mt-3 w-100">
                Sign In
              </Button>
            </Form>

            <Row className="py-3">
              <Col>
                Don't have an account?{' '}
                <Link to={`/register`} className="authentication-link">
                  Register
                </Link>
              </Col>
            </Row>
          </div>
        </div>
        <div className="authentication-right-side"></div>
      </div>
    </>
  )
}

export default LoginScreen
