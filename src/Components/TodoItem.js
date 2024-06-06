


export function TodoItem({ completed, id, title, ToggleTodo, DeleteTodo, dueDate }) {

    return (
        <li >
            <label>
                <input type='checkbox' checked={completed} onChange={e => ToggleTodo(id, e.target.checked)} />
                {title}, Due:{dueDate}
            </label>
            
            <button onClick={() => DeleteTodo(id)} className='del-btn'>Delete</button>
        </li>
    )

}