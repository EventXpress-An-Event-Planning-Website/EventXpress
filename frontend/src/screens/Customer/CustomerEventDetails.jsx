import React from 'react'
import { CustomerNavbar } from '../../components/Cus/CustomerNavbar'
import CusEventSidebar from '../../components/Cus/CusEventSidebar'
import celebrationImage from '../../assets/images/celebration.jpg';
import TodoList from '../../components/Cus/CusTodoList/TodoList';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { button } from '@material-tailwind/react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const CustomerEventDetails = () => {
    const [event,setEvent]=useState([])
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const event_id= queryParams.get('id')
    const success= queryParams.get('success')
    // console.log(event_id);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate()
  const handleNavigateTickate= () =>{
      navigate('/customer/sellTickets')
  }
  useEffect(() => {
    axios.get(`/api/customer/eventDetails?id=${event_id}`)
      .then(response => {
        setData(response.data);
        setEvent(data)
        setLoading(false);
        
       
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [loading,event_id]);
 
    if (event.length === 0) {
        return <div>Loading...</div>;
    }else{
   console.log(event[0]);
   
  return (
    <>
        

        <div className='eventdeatils-container'>
            <div className='eventProfile-container'>

                <div className='event-image-container'>
                    <img src={`../../src/assets/images/uploads/${event[0].event_img}`} alt=''/>
                </div>

                <div className='event-namedate-container'>
                    <div className='event-name-container'>
                        <label>Name: {event[0].event_name}  </label>
                    </div>
                    <div className='event-name-container'>
                        <label>Date: {moment(event[0].event_date).format('YYYY-MM-DD')}  </label>
                    </div>
                </div>
                <div className='event-description-container'>
                    {event[0].event_description}
                   
                </div>
                
            </div>
            <div className='eventTodo-list-container'>
                <TodoList event={event[0]} success={success} />
                {event[0].event_maintype ==='Public'?
                    <div className='todo-row todo-sell-ticket'   onClick={handleNavigateTickate}>
                        Sell Tickets
                    </div>:null
                }
            </div>
        </div>
       
        
    </>
  )
    }
}

export default CustomerEventDetails
