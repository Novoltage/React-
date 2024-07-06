


export function DeleteAll({ todos, DeleteAll }) {
    
 if (todos.length > 1){
    return(
    <button className='del-btn' onClick={()=>DeleteAll()}>Delete All</button>
    )
 }

    return null

}