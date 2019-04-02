import React from 'react'
import Card from './card'
import { Link } from 'gatsby'
import ImagePlaceholder from '../components/imagePlaceholder'

const Blog = ({ node, children }) => {
  const { excerpt, frontmatter: { path, title } } = node

  return (
    <Card>
      <div className="card-head">
        <ImagePlaceholder />
      </div>

      <div className="card-content">
        <h2>
          <Link to={path}>{title}</Link>
        </h2>

        <div className="content">
          <p>{excerpt}</p>
        </div>

        {children}
      </div>
    </Card>
  )
}

export default Blog