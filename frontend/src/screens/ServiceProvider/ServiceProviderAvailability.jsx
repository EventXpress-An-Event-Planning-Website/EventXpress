import React, { useState, useEffect } from "react";
import SPSidebar from "../../components/ServiceProvider/SPSidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

const ServiceProviderAvailability = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [busyDates, setBusyDates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const userInfo = localStorage.getItem("userInfo");
  const parsedUserInfo = JSON.parse(userInfo);
  const userId = parsedUserInfo.id;


  useEffect(() => {
    axios
      .get(`/api/serviceProvider/getBusyDates/${userId}`)
      .then((response) => {
        if (response.data.response && Array.isArray(response.data.response)) {
          setBusyDates(
            response.data.response.map((item) => item.busy_date.split("T")[0])
          );
        } else {
          console.error("Received data is not an array", response.data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching busy dates", error);
        setIsLoading(false);
      });
  }, [isLoading]);

  const isDateBusy = (date) => {
    return busyDates.includes(date);
  };

  const renderCustomDate = ({ date }) => {
    const formattedDate = date.toISOString().split("T")[0];
    if (isDateBusy(formattedDate)) {
      return (
        <div
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%",
          }}
        >
          {date.getDate()}
        </div>
      );
    }
    return date.getDate();
  };

  const markDateAsBusy = (date) => {
    
    axios
      .post(`/api/serviceProvider/setBusyDates/${userId}`, { date: date.toISOString().split("T")[0] })
      .then((response) => {
        if (response) {
          // Date marked as busy successfully, update busyDates state
          setBusyDates((prevBusyDates) => [...prevBusyDates, date.toISOString().split("T")[0]]);
        }
      })
      .catch((error) => {
        console.error("Error marking date as busy", error);
      });
  };

  const handleDateClick = (date) => {
    // Check if the date is already busy
    if (isDateBusy(date.toISOString().split("T")[0])) {
      alert("This date is already marked as busy.");
    } else {
      const confirm = window.confirm("Do you want to mark this date as busy?");
      if (confirm) {
        markDateAsBusy(date);
      }
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <SPSidebar />
      </div>
      <div className="calender_body">
        <h3>Select your busy days here</h3>
        <div className="calender_inside">
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            tileContent={({ date }) => {
              if (isDateBusy(date.toISOString().split("T")[0])) {
                return <div className="busy-date"></div>;
              }
            }}
            tileDisabled={({ date }) => isDateBusy(date.toISOString().split("T")[0])}
            formatShortWeekday={(locale, date) =>
              date.toLocaleDateString(locale, { weekday: "short" })
            }
            formatMonth={(locale, date) =>
              date.toLocaleDateString(locale, { month: "short" })
            }
            tileClassName={({ date }) =>
              isDateBusy(date.toISOString().split("T")[0]) ? "busy" : ""
            }
            onClickDay={handleDateClick}
            formatDay={(locale, date) => renderCustomDate({ date })}
          />
        </div>
        
      </div>
    </div>
  );
};

export default ServiceProviderAvailability;
