import { TodoItem } from "./TodoItem"

export function TodoList({ todos, ToggleTodo, DeleteTodo }){
    return(
      
    <ul className='list'>
        {todos.length === 0 && "No To-do's" }
        {todos.map( todo => {
          return (
           <TodoItem completed={todo.completed} id={todo.id} title={todo.title} key={todo.id} ToggleTodo={ToggleTodo} DeleteTodo={DeleteTodo} dueDate={todo.dueDate} />
          )
        })}
      </ul>
      
    )
}