import Button from './button'

const Header = ({ titulo }) => {
  return (
    <header className='header'>
        <h1 style={estilo}> {titulo} </h1>
        <Button color='green' texto='Add' />
        <Button color='purple' texto='Remove' />
    </header>
  )
}

const estilo = {
    color:'purple',
    background: 'grey'
}

export default Header