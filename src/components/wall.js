import React from 'react'
import { Link } from 'gatsby'
import WallTags from '../components/wallTags'
import ImagePlaceholder from '../components/imagePlaceholder'

const Wall = ({ edges }) => {

  let limit = 3
  let column = 0
  let rows = Array.from({length: limit}, () => [])
  
  edges.forEach(({ node }) => {
    rows[column].push(node)
    column++
    if (column === limit) column = 0
  })

  const wall = rows.map((columns, index) => {
    const post = columns.map(node => {
      const { id, html, frontmatter: { path, title, tags, type, thumbnail, url } } = node

      return <div className="max-w-sm overflow-hidden shadow-md mb-4" key={id}>
        {type === 'blog' ? (<>
          <ImagePlaceholder />
          <h2 className="font-bold text-xxl p-2 mb-2">
            <Link to={path}>{title}</Link>
          </h2>
        </>) : (<>
          {thumbnail !== null && <img src={thumbnail} alt={title} />}
          <h2 className="font-bold text-xxl p-2 mb-2">
            <a href={url}>{title}</a>
          </h2>
          <div className="content p-2" dangerouslySetInnerHTML={({__html: html})}></div>
        </>)}
        <div className="px-6 py-4">
          <WallTags tags={tags} />
        </div>
      </div>
    })

    return <div className="wall-column flex flex-col" key={index}>{post}</div>
  })

  return <div className="wall flex">{wall}</div>
}

export default Wall