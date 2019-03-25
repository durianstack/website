import React from 'react'
import Card from './card'
import { Link } from 'gatsby'
import ImagePlaceholder from '../components/imagePlaceholder'

const Blog = ({ node, children }) => {
  const { excerpt, frontmatter: { path, title } } = node

  return (
    <Card>
      <ImagePlaceholder />

      <h2>
        <Link to={path}>{title}</Link>
      </h2>

      <div className="content">
        <p>{excerpt}</p>
      </div>
      
      {children}
    </Card>
  )
}

export default Blog