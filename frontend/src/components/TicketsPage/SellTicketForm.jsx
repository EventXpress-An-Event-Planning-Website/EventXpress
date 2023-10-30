import React, { useState } from 'react'
import FormContainer from '../FormContainer'
import { Form, Button, Modal } from 'react-bootstrap'
import { useUploadSingleMutation } from '../../slices/uploadApiSlice'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
const categories = ['Musical', 'Drama', 'Sports', 'Seminar', 'Exhibition']

const SellTicketForm = () => {
  const [eventTitle, setEventTitle] = useState('')
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventVenue, setEventVenue] = useState('');
  const [eventDescription, setEventDescription] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Musical')
  const [eventPoster, setEventPoster] = useState(null)
  const [ticketItems, setTicketItems] = useState([
    { type: '', price: '', quantity: '' },
  ])
  const [accountHolderName, setAccountHolderName] = useState('')
  const [bankName, setBankName] = useState('')
  const [branchName, setBranchName] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [bankPassbookImage, setBankPassbookImage] = useState(null);
  const [agreedToPolicy, setAgreedToPolicy] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const [uploadSingle] = useUploadSingleMutation();

  const navigate = useNavigate()

  const today = new Date().toISOString().split('T')[0];

  const userInfo = localStorage.getItem("userInfo");
  const parsedUserInfo = JSON.parse(userInfo);
  const userId = parsedUserInfo.id;

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
    const bankPassbookImageFilename = await uploadImage(bankPassbookImage);
    const eventPosterFilename = await uploadImage(eventPoster);

    const formData = {
      selectedCategory,
      eventTitle,
      eventDate,
      eventTime,
      eventVenue,
      eventDescription,
      eventPoster: eventPosterFilename,
      ticketItems,
      accountHolderName,
      bankName,
      branchName,
      accountNumber,
      bankPassbookImage: bankPassbookImageFilename,
      userId,
    };
    axios
      .post('/api/tickets/addTicket', formData)
      .then((response) => {
        console.log('Form submitted successfully');
        toast.success('Ticket added successfully!')
        navigate('/customer/buyTickets')
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setEventPoster(file)
  }

  const handleTicketItemChange = (index, key, value) => {
    const updatedTicketItems = [...ticketItems]
    updatedTicketItems[index][key] = value
    setTicketItems(updatedTicketItems)
  }

  const handleAddTicketItem = () => {
    setTicketItems([...ticketItems, { type: '', price: '', quantity: '' }])
  }

  const handleBankPassbookImageChange = (e) => {
    const file = e.target.files[0];
    setBankPassbookImage(file);
  };

  const handleAgreeCheckboxChange = (e) => {
    setAgreedToPolicy(e.target.checked)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const randomText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nullam a felis vel tellus ullamcorper scelerisque ac ac mi. 
    Fusce convallis dui in convallis volutpat. Donec ac aliquam libero. 
    Suspendisse non mauris in dui ullamcorper tincidunt. Donec eu sem 
    ut neque commodo faucibus. Etiam vitae metus id nunc tristique tempus. 
    Nam malesuada eros a bibendum ultrices.`

  return (
    <>
      <div className="sell-ticket-container">
        <div className="sell-ticket-left-side"></div>
        <div className="sell-ticket-right-side"> </div>
        <div className="sell-ticket-form-wrapper">

          <Form onSubmit={submitHandler}>

            <div className="sell-ticket-header-container">
              <h2>Fill the form to sell your tickets</h2>
            </div>
            <h3>Enter event details</h3>

            <Form.Group className="my-2" controlId="eventCategory">
              <Form.Label>Event category</Form.Label>
              <Form.Control
                as="select"
                value={selectedCategory}
                autoFocus
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group className="my-2" controlId="eventTitle">
              <Form.Label>Event title*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name of the event"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2" controlId="eventDate">
              <Form.Label>Event date*</Form.Label>
              <Form.Control
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                min={today}
                required
              />
            </Form.Group>

            <Form.Group className="my-2" controlId="eventTime">
              <Form.Label>Event time*</Form.Label>
              <Form.Control
                type="time"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="my-2" controlId="eventVenue">
              <Form.Label>Event venue*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event venue"
                value={eventVenue}
                onChange={(e) => setEventVenue(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="my-2" controlId="eventDescription">
              <Form.Label>Event description*</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Describe your event"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="my-2" controlId="eventPoster">
              <Form.Label>Event poster*</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </Form.Group>

            <div className="ticket-items-container">
              <div className="ticket-items-section">
                <h3>Enter ticket details</h3>
                {ticketItems.map((item, index) => (
                  <div key={index} className="d-flex align-items-center">
                    <Form.Group
                      className="my-2 me-2"
                      controlId={`ticketType${index}`}
                    >
                      <Form.Control
                        type="text"
                        placeholder="Ticket Type"
                        value={item.type}
                        onChange={(e) =>
                          handleTicketItemChange(
                            index,
                            'type',
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                    <Form.Group
                      className="my-2 me-2"
                      controlId={`ticketPrice${index}`}
                    >
                      <Form.Control
                        type="number"
                        placeholder="Price in Rs."
                        value={item.price}
                        onChange={(e) =>
                          handleTicketItemChange(
                            index,
                            'price',
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                    <Form.Group
                      className="my-2 me-2"
                      controlId={`ticketQuantity${index}`}
                    >
                      <Form.Control
                        type="number"
                        placeholder="Quantity"
                        value={item.quantity}
                        onChange={(e) =>
                          handleTicketItemChange(
                            index,
                            'quantity',
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </div>
                ))}
              </div>

              <Button
                type="button"
                variant="primary"
                className="add-new-ticket-details"
                onClick={handleAddTicketItem}
              >
                +
              </Button>
            </div>

            <div className="ticket-owner-bank-details">
              <h3>Enter Bank details</h3>
              <Form.Group className="my-2" controlId="accountHolderName">
                <Form.Label>Account Holder's Name*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter account holder's name"
                  value={accountHolderName}
                  onChange={(e) => setAccountHolderName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="my-2" controlId="bankName">
                <Form.Label>Bank Name*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter bank name"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="my-2" controlId="branchName">
                <Form.Label>Branch Name*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter branch name"
                  value={branchName}
                  onChange={(e) => setBranchName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="my-2" controlId="accountNumber">
                <Form.Label>Account Number*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter account number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="my-2" controlId="bankPassbookImage">
                <Form.Label>Bank Passbook Image*</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleBankPassbookImageChange}
                  required
                />
              </Form.Group>
            </div>

            <Form.Group controlId="agreedToPolicy" className="my-2">
              <Form.Check
                type="checkbox"
                label={
                  <div className="form-label-container">
                    <span>I agree to the EventXpree policy </span>
                    <span className="read-policy-link" onClick={openModal}>
                      Read the policy
                    </span>
                  </div>
                }
                checked={agreedToPolicy}
                onChange={handleAgreeCheckboxChange}
                required
              />
            </Form.Group>

            <Modal show={showModal} onHide={closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>EventXpree Policy</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{randomText}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            <div className="d-flex justify-content-between">
              <Button type="button" variant="secondary" className="mt-3">
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="mt-3"
                disabled={!agreedToPolicy}
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default SellTicketForm
