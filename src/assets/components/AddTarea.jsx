import { useState } from "react"

const AddTarea = () => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [finished, setFinished] = useState(false)
    const onSubmit = (event) =>{
        event.preventDefault()
        
        if(!text) {
            alert('Please type a task')
        }
        if(!date) {
            alert('Please type a date')
        }

    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Tarea</label>
            <input type='text' placeholder='Type a task'
            value={text}
            onChange={(e)=> setText(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Date</label>
            <input type='text' placeholder='Type a date'
            value={date}
            onChange={(event)=> setDate(event.target.value)}
            />
        </div>
        <div className='form-control form-control-check'>
            <label>Finished</label>
            <input type='checkbox'
            checked={finished}
            value={finished}
            onChange={(event)=> setFinished(event.target.checked)}
            />
        </div>
        <input type='submit' className="btn btn-block" value='Save' />

    </form>
  )
}

export default AddTarea