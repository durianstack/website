import React from 'react'
import Tags from './tags'
import Tip from '../components/tip'
import Blog from '../components/blog'

const Bricks = ({ edges }) => {

  const bricks = edges.map(edge => {
    const { node } = edge
    const { id, frontmatter: { tags, type } } = node
    const Brick = type === 'blog' ? Blog : Tip

    return (
      <Brick
        key={id}
        node={node}>
        <Tags items={tags} />
      </Brick>
    )
  })

  return (
    <div className="flex flex-wrap justify-center">
      {bricks}
    </div>
  )
}

export default Bricks