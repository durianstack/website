import React from 'react'
import Tags from './tags'
import Tip from '../components/tip'
import Blog from '../components/blog'

const Bricks = ({ edges }) => {

  const brick = edges.map(edge => {
    const { node } = edge
    const { id, frontmatter: { tags, type } } = node
    const EntryType = type === 'blog' ? Blog : Tip

    return (
      <EntryType 
        key={id}
        node={node}>
        <Tags items={tags} />
      </EntryType>
    )
  })

  return (
    <div className="flex flex-wrap justify-center">
      {brick}
    </div>
  )
}

export default Bricks