import { query } from '../config/db.js'
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'


const createEvent = asyncHandler(
  async (
    userId,
    eventName,
    eventDate,
    eventStartTime,
    eventEndTime,
    eventType
  ) => {
    const createUserQuery = `INSERT INTO privateEvent(userId,event_name,event_date,start_time,end_time,event_type) VALUES($1, $2, $3, $4, $5,$6) RETURNING event_id,event_name`
    const createUser = await query(createUserQuery, [
      userId,
      eventName,
      eventDate,
      eventStartTime,
      eventEndTime,
      eventType,

    ])

    if (createUser.rowCount > 0) {
      console.log(createUser.raws);
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
    console.log(todo);
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
  async () => {
    // console.log(todoText);
    const viewToDoQuery = `SELECT * FROM todolist`
    const viewtTodo = await query(viewToDoQuery, [])
    return viewtTodo
  }
)


export { createEvent, addToDo, viewToDo }


