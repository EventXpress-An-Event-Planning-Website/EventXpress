import React from 'react'
import { CustomerNavbar } from '../../components/Cus/CustomerNavbar'
import CusEventSidebar from '../../components/Cus/CusEventSidebar'
import celebrationImage from '../../assets/images/celebration.jpg';
import TodoList from '../../components/Cus/CusTodoList/TodoList';

const CustomerEventDetails = () => {



    const event = {id:1,name:'Birthday', date:'2023-07-23', description:"A birthday is a special and joyous annual celebration that marks the day a person was born. It is a time when friends and family come together to honor and express their love, appreciation, and well-wishes for the individual whose birthday it is. People often celebrate with gifts, parties, cakes, and other festivities, making it a memorable occasion filled with happiness and good wishes for the year ahead.", img:"birthday8.jpg"};
  return (
    <>
        
        
        
        <div className='eventdeatils-container'>
            <div className='eventProfile-container'>

                <div className='event-image-container'>
                    <img src={`../../src/assets/images/${event.img}`} alt=''/>
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
                <TodoList />
            </div>
        </div>
        
    </>
  )
}

export default CustomerEventDetails
