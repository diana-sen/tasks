import React from 'react'

const button = ({ color, texto, onClick }) => {
  
  //Define onClick function
 /* const onClick =() => {
    console.log('You clicked it')
  }
  */
  return (
    <button onClick={onClick} style={{ background: color}} className='btn'>{texto}</button>
  )
}

export default button