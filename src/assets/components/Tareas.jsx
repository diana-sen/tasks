import Tarea from './Tarea'

const Tareas = ({ tasks, onDelete }) => {
    
    return (
//        <div>Tareas</div> //no se puede tener otro elemento a la par     
        <>
        {tasks.map((task) => (
            <Tarea key={task.id} task={task} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Tareas