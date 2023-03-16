import React from 'react'

const Button = ({name,}) => {
  return (
    <div className="px-4 py-[6px] m-3 bg-gray-100 text-sm rounded-lg cursor-pointer">{name}</div>
  )
}

export default Button