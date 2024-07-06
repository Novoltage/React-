import * as React from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';

export function NewTodoForm({ onSubmit }) {
  const today = dayjs(Date())
  const [value, setValue] = useState(today);
  const [newItem, setNewItem] = useState("")

  function HandleSubmit(e,) {
    e.preventDefault()

    let ddate = dayjs(value).format('MM/DD/YYYY')

    if (newItem === "") return
    onSubmit(newItem, ddate)
    //dueDate(value)
    //console.log(value)
    //console.log(today)
    setNewItem("")
    setValue(today)
    
  }

  return (
    <form onSubmit={HandleSubmit} className='new-item-form'>
      <div className='form-row'>
        <label>New Task</label>
        <input value={newItem} onChange={e => setNewItem(e.target.value)} type='text' id='item' />
        <div className='date-picker'>
          <DatePicker
            label="Due Date"
            value={value}
            onChange={(newValue) => 
              setValue(newValue)}
          />
        </div>
      </div>
      <button className='add-btn'>Add To-do</button>
    </form>
  )
}