import React from 'react'
import { CustomerNavbar } from '../../components/Cus/CustomerNavbar'
import CusEventSidebar from '../../components/Cus/CusEventSidebar'
import celebrationImage from '../../assets/images/celebration.jpg';
import TodoList from '../../components/Cus/CusTodoList/TodoList';

const CustomerEventDetails = () => {



    const event = {id:1,name:"Little Angel", date:'2023-07-23',description:"An event description is a text or copy that tells audiences all the essential details about your event. These details should come together so that it compels potential attendees to register. But more than driving up attendance, a good event description can pique the interest of non-members and even the press."};
  return (
    <>
        
        
        
        <div className='eventdeatils-container'>
            <div className='eventProfile-container'>

                <div className='event-image-container'>
                    <img src={celebrationImage} alt=''/>
                </div>

                <div className='event-namedate-container'>
                    <div className='event-name-container'>
                        <label>Name:   {event.name}</label>
                    </div>
                    <div className='event-name-container'>
                        <label>Date:   {event.date}</label>
                    </div>
                </div>
                <div className='event-description-container'>
                    {event.description}
                </div>
            </div>
            <div className='eventTodo-list-container'>
                <TodoList event={event} />
            </div>
        </div>
        
    </>
  )
}

export default CustomerEventDetails
