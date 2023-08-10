import asyncHandler from 'express-async-handler'
import path from 'path'
import { createEvent, addToDo, viewToDo} from '../../models/eventModel.js'




const createevent = asyncHandler(async(req,res)=>{

    let event=''
    const {
        userId,
        eventName,
        eventDate,
        eventStartTime,
        eventEndTime,
        eventType

    }=req.body
    event= await createEvent(
        userId,
        eventName,
        eventDate,
        eventStartTime,
        eventEndTime,
        eventType 
    )
    if (event) {
        res.status(201).json({
          id: event.id
        })
      } else {
        res.status(400)
        throw new Error('Invalid user data')
      }
    

    
})

const addEventToDo=  asyncHandler(async(req,res)=>{
  
  let todo=''
  const {
      event_id,
      todoText

  }=req.body

  
  todo= await addToDo(
    event_id,
    todoText
  )
  if (todo) {
      res.status(201).json({
        id: todo.id
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
})

const viewEventToDo=  asyncHandler(async(req,res)=>{
  console.log('Kavindya');
  let todo=''
  todo= await viewToDo()
  console.log(todo);
  res.json(todo.rows)
})

export {
    createevent,addEventToDo, viewEventToDo
}