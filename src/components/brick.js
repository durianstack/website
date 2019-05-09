import React from 'react'
import Tags from './tags'
import Tip from '../components/tip'
import Blog from '../components/blog'

const Brick = ({ node }) => {
  const { frontmatter: { tags, type } } = node
  const Brick = type === 'blog' ? Blog : Tip

  return (
    <Brick node={node}>
      <Tags items={tags} />
    </Brick>
  )
}

export default Brick