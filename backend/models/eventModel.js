import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'


const createEvent = asyncHandler(
  async (
    userId,
    eventName,
    eventtype,
    eventDate,
    eventStartTime,
    eventEndTime,

    eventDescription,
    eventType
  ) => {
    const createUserQuery = `INSERT INTO event(userId,event_name,event_maintype,event_date,start_time,end_time,event_description,event_type) VALUES($1, $2, $3, $4, $5,$6,$7,$8) RETURNING event_id,event_name`
    const createUser = await query(createUserQuery, [
      userId,
      eventName,
      eventtype,
      eventDate,
      eventStartTime,
      eventEndTime,
      eventDescription,
      eventType

    ])

    if (createUser.rowCount > 0) {
      const InsertTodo = `INSERT INTO public.todolist(event_id, todo_service) VALUES ($1,$2),($1,$3),($1,$4),($1,$5),($1,$6),($1,$7)`
      const eventTodo = await query(InsertTodo,[
        createUser.rows[0].event_id,
        'Venue',
        'Catering',
        'Cake',
        'Photography',
        'Decoration',
        'SoundAndLight'

      ])
      // console.log(createUser.raws);
      return createUser.rows
    }
    else {
      throw new Error('Internal Error')
    }

  })



const addToDo = asyncHandler(
  async (
    event_id,
    todoText
  ) => {
    // console.log(todoText);
    const addToDoQuery = `INSERT INTO todolist (event_id, todo_service) VALUES($1, $2) RETURNING event_id,todo_service`
    const todo = await query(addToDoQuery, [
      event_id,
      todoText
    ])
    // console.log(todo);
    if (todo.rowCount > 0) {
      // console.log(todo.raws);
      return todo.rows
    }
    else {
      throw new Error('Internal Error')
    }
  }


)

const viewToDo = asyncHandler(
  async (event_id) => {
    // console.log(event_id);
    const viewToDoQuery = `SELECT * FROM todolist WHERE event_id=$1`
    const viewtTodo = await query(viewToDoQuery, [event_id])
    return viewtTodo
  }
)

const eventdetails = asyncHandler(
  async () => {
    const eventQuery = `SELECT * FROM public.event`
    const result = await query(eventQuery, [])
    // console.log(result);
    return result

  })


const getEventdetails = asyncHandler(
  async (event_id) => {
    const viewEventDetailsQuery = `SELECT * FROM public.event WHERE event_id=$1`
    const explicitEventData = await query(viewEventDetailsQuery, [event_id])
    // console.log(explicitEventData);
    return explicitEventData.rows
  }
)

export { createEvent, addToDo, viewToDo, eventdetails, getEventdetails }



