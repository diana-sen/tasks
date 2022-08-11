import Header from './assets/components/Header'
import { useState } from 'react'
import Tareas from './assets/components/Tareas'
/* Borrar lo siquiente ya que borramos los archivos app.css y react.svg
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
*/

function App() {
  const [dataTasks, setTasks] = useState ([
    {
        id: 1,
        text: 'Go to supermarket',
        date: 'August 10, 2022',
        finished: true
    },
    {
        id: 2,
        text: 'Write Product Requirements',
        date: 'August 11, 2022',
        finished: false
    },
    {
        id: 3,
        text: 'Go to the doctor',
        date: 'August 12, 2022',
        finished: false
    },
])

//Delete a task

  const deleteTask = (id) => {
    console.log('delete',id)
    setTasks(dataTasks.filter((task) => task.id !== id))
  }

  return (
      <div className='container'>
        <Header titulo='Tasks Planner' />
        {dataTasks.length> 0 ? <Tareas tasks={dataTasks} onDelete={deleteTask}/> :'There are no elements to show'}
        
      </div>
  )
}

export default App
