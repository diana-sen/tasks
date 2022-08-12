import{ FaTimes } from 'react-icons/fa'

const Tarea = ({task, onDelete, onToggle}) => {
  return (
    <div className={`tarea ${task.finished ? 'terminada' : ''}`} onDoubleClick={()=> onToggle(task.id)}>
        <h3>{task.text} <FaTimes style={{color:'purple', cursor:'pointer'}} onClick={()=> onDelete(task.id)} /> 
        </h3>
        <p>{task.date}</p>
    </div>
  )
}

export default Tarea