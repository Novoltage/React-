
import { useEffect, useState } from 'react';
import { NewTodoForm} from './To-do/NewTodoForm'
import { TodoList } from './To-do/TodoList';
import { DeleteAll } from './To-do/DeleteAll';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


function ToDoApp() {

  const [todos, setTodos] = useState(()=> {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return[]

    return JSON.parse(localValue)
  })

 useEffect(()=>{
  localStorage.setItem("ITEMS", JSON.stringify(todos))
 })


  function AddTodo(title, dueDate) {
    
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title , completed: false, dueDate }
        ,
      ]
    }
    )
  }

  // function Ddate(id, dueDate) {
  //   setTodos(currentTodos => {
  //     return currentTodos.map(todo => {
  //       if (todo.id === id) {
  //         return { ...todo, dueDate }
  //       }

  //       return todo
  //     }
  //     )
  //   }
  //   )
  // }

  function ToggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      }
      )
    }
    )
  }

function DeleteTodo(id){
  setTodos(currentTodos => { 
    return currentTodos.filter(todo => todo.id !==id)
  })
}
 
function DeleteTodos(){
  setTodos([])
}
//console.log(todos)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <>
    <section className='wrapper'>
      <NewTodoForm onSubmit={AddTodo} />
      <h1 className='header'>To do List </h1>
      <TodoList todos={todos} ToggleTodo={ToggleTodo} DeleteTodo={DeleteTodo} />
      <DeleteAll DeleteAll={DeleteTodos} todos={todos} />
      
      </section>
      
    </>
    </LocalizationProvider>
  );
}

export default ToDoApp;
