import React from 'react'
import { CustomerNavbar } from '../../components/Cus/CustomerNavbar'
import CusEventSidebar from '../../components/Cus/CusEventSidebar'
import celebrationImage from '../../assets/images/celebration.jpg';
import TodoList from '../../components/Cus/CusTodoList/TodoList';
import CusPendingEvent from '../../components/Cus/CusPendingEvent';
import CusOngoingEvent from '../../components/Cus/CusOngoingEvent';
import CusPreviousEvent from '../../components/Cus/CusPreviousEvent';
import CreateEvent from './createEvent';
import { useGetEventQuery } from '../../slices/eventSlice';
import { useEffect } from 'react';


const CustomerProfile = () => {


  const storedUserInfo = localStorage.getItem('userInfo'); // Retrieve the stored user info as JSON string
  const userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;
  console.log(userInfo);
  const { data: eventData, error, isLoading } = useGetEventQuery();
    useEffect(() => {
        if (error) {
          console.error('Error fetching events:', error);
        }

    }, [error]);

    useEffect(()=>{
        if(!isLoading) {
            // console.log(eventData);
        }
    }, [isLoading])
    const event = {id:1,name:'Birthday', date:'2023-07-23', description:"A birthday is a special and joyous annual celebration that marks the day a person was born. It is a time when friends and family come together to honor and express their love, appreciation, and well-wishes for the individual whose birthday it is. People often celebrate with gifts, parties, cakes, and other festivities.", img:"birthday8.jpg"};
  return (
    <>
        
        
        
        <div className='eventdeatils-container'>
            <div className='customerProfile-container'>

                <div className='customer-image-container'>
                    <img src={`../../src/assets/images/${event.img}`} alt=''/>
                </div>

                <div className='customer-namedate-container'>
                    <div className='customer-name-container'>
                        <label> {userInfo.name}</label>
                    </div>
                    <div className='customer-name-container'>
                        <label>Email:   {userInfo.email}</label>
                    </div>
                </div>
                <div className='customer-description-container-scrollable'>
                  <div className='customer-description-container'>
                    {event.description}
                  </div>
                </div>
                
            </div>
            
            <div className='customer-Todo-list-scrollable'>
              <div className='customer-Todo-list-container'>
                <div>
                  Hello {userInfo.name} !!
                </div>
              <CusPendingEvent 
              eventData={eventData}
              />
              <CusOngoingEvent
              eventData={eventData} />
              <CusPreviousEvent
              eventData={eventData} />
          </div>
        </div>
            
        </div>
        
    </>
  )
}

export default CustomerProfile
