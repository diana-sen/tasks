import{ FaTimes } from 'react-icons/fa'

const Tarea = ({task}) => {
  return (
    <div className="tarea">
        <h3>{task.text} <FaTimes style={{color:'red', cursor:'pointer'}}/> 
        </h3>
        <p>{task.date}</p>
    </div>
  )
}

export default Tarea