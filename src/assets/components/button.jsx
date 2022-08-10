import React from 'react'

const button = ({ color, texto }) => {
  return (
    <button style={{ background: color}} className='btn'>{texto}</button>
  )
}

export default button