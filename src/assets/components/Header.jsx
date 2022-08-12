import Button from './button'

//  console.log('You clicked it')

const Header = ({ titulo, onAdd, seeAddTasks }) => {
  return (
    <header className='header'>
        <h1 style={estilo}> {titulo} </h1>
        <Button color={seeAddTasks ? '#986ddf': '#f76b8a'} texto={seeAddTasks ? 'Close': 'Add'} onClick={onAdd} />
       
    </header>
  )
}

const estilo = {
    color:'#986ddf',
    
}

export default Header