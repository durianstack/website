import React, { Fragment } from 'react'

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

const WallTags = ({ tags }) => {
  if (tags === null) {
    return null
  }
  
  return <Fragment>{tags.map(tag => (<span className={className.join(' ')} key={tag}>{tag}</span>))}</Fragment>
}

export default WallTags