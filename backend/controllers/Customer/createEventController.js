import asyncHandler from "express-async-handler";
import path from "path";
import {
  createEvent,
  eventdetails,
  getEventdetails,
  addToDo,
  viewToDo,
} from "../../models/eventModel.js";
import { getpackage } from "../../models/todoListModel.js";
import { getNotificationByEventAndPackage } from "../../models/customer_notificationModel.js";

const createevent = asyncHandler(async (req, res) => {
  let event = "";
  const {
    userId,
    eventName,
    eventtype,
    eventDate,
    eventStartTime,
    eventEndTime,
    eventImages,
    eventType,
    eventDescription,
  } = req.body;
  event = await createEvent(
    userId,
    eventName,
    eventtype,
    eventDate,
    eventStartTime,
    eventEndTime,
    eventImages,
    eventType,
    eventDescription
  );
  if (event) {
    res.status(201).json({
      id: event.id,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
  // console.log(eventtype);
  // console.log(eventType);
});

const addEventToDo = asyncHandler(async (req, res) => {
  let todo = "";
  const { event_id, todoText } = req.body;

  todo = await addToDo(event_id, todoText);
  if (todo) {
    res.status(201).json({
      id: todo.id,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const viewEventToDo = asyncHandler(async (req, res) => {
  const event_id = req.query.id;
  // console.log(event_id);
  let todo = "";
  todo = await viewToDo(event_id);
  const todos=todo.rows

  let todo_details=[]

  for (let i = 0; i < todos.length; i++) {
   
      if (todos[i].selected_package_id===null) {
          todo_details.push(todos[i])
          
      }else{

        try {
          const package_detail=await getpackage(todos[i].selected_package_id)
          // console.log(package_detail);
          const service = todos[i].selected_package_id.split('_')
          // console.log(service);
          const not = await getNotificationByEventAndPackage(service[0],event_id);
          // console.log(not);
          let mergeObject={...todos[i],...package_detail}

          
          if (not !== null) {
            mergeObject={...mergeObject,...not}
          }
        
       
          todo_details.push(mergeObject);
        } catch (error) {
           console.log(error);
        }
          
      }
    
  }
// console.log(todo_details);

  res.json(todo_details);
});

const getEvent = asyncHandler(async (req, res) => {
  const user_id = req.query.id;
  const event_dateils = await eventdetails(user_id);
  if (event_dateils) {
    res.json(event_dateils.rows);
  } else {
    throw new Error("No data to retreive");
  }
});

const getEventDetails = asyncHandler(async (req, res) => {
  const event_id = req.query.id;
  // console.log(event_id);
  const event_data = await getEventdetails(event_id);

  res.json(event_data);
});

export { createevent, addEventToDo, viewEventToDo, getEvent, getEventDetails };
