import React from 'react'

export default function Nav(props) {
  return (
    <nav>
      <div className='nav-title'>
        <div className='nav-title-main'>{props.title}</div>
      </div>
    </nav>
  )
}
