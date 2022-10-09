import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { BiCheckCircle } from 'react-icons/bi'

export default function Todoitem(props) {

  const { todo, removeTodo, completedTodo } = props
  return (
    <div className={todo.completed ? "todo-row completed" : "todo-row"}>
      {props.todo.text}
      <div className='iconContainer'>
        <RiCloseCircleLine onClick={() => props.removeTodo(todo.id)} />
        <BiCheckCircle onClick={() => completedTodo(todo.id)} />
      </div>
    </div>
  )
}
