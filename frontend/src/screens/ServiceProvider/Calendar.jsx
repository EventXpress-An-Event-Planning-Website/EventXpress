// import React from 'react'
import SPCalendar from "../../components/ServiceProvider/SPCalendar"
import {useState} from 'react';


const Calendar = () => {
  const [date, setDate] = useState(new Date())
  const [showTime, setShowTime] = useState(false) 

  return (
    <div className="app">
      <h1 className="header">React Calendar</h1>
      <div className="calendar-container">
        <SPCalendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
      </div>
      {date.length > 0 ? (
   <p>
     <span>Start:</span>
     {date[0].toDateString()}
     &nbsp;
     &nbsp;
     <span>End:</span>{date[1].toDateString()}
   </p>
          ) : (
   <p>
      <span>Default selected date:</span>{date.toDateString()}
   </p> 
          )
   }
   <Time showTime={showTime} date={date}/>

    </div>
  )
}

export default Calendar