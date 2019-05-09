import React from 'react'

const className = [
  'px-3',
  'mr-2 mb-2',
  'py-1',
  'text-sm', 
  'rounded-full',
  'inline-block',
  'font-semibold', 
  'bg-grey-lighter',
  'text-grey-darker', 
]

const Tags = ({ items }) => {
  if (items === null || items.length === 0) {
    return null
  }
  
  return <div className="px-6 py-4">{items.map(tag => (<span className={className.join(' ')} key={tag}>{tag}</span>))}</div>
}

export default Tags