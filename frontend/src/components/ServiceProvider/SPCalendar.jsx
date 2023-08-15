import Calender from 'react-calendar'
import "react-calendar/dist/Calendar.css"
import SPSidebar from "../ServiceProvider/SPSidebar";

const SPCalendar = () => {
  return (
    <div className='calendar-container'>
      <div><SPSidebar /></div>
      <div className="spcalendar" ><Calender/></div>
    </div>
   
    
  )
}

export default SPCalendar