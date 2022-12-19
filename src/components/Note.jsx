import React from 'react'

export default function Note(props) {
  return (
    <div className='bg-gray-200 w-[70vw] mx-52 h-[50px] m-4'>
      <div>{props.taskName}</div>
    </div>
  )
}
