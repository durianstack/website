import React from 'react'
import Card from './card'

const Tip = ({ node, children }) => {
  const { html, frontmatter: { title, thumbnail, url } } = node

  return (
    <Card>
      {thumbnail !== null && (
        <div className="card-head">
          <img src={thumbnail} className="w-full" alt={title} />
        </div>
      )}

      <div className="card-content">
        <h2>
          <a href={url}>{title}</a>
        </h2>
        <div className="content" dangerouslySetInnerHTML={({__html: html})} />
        {children}
      </div>
    </Card>
  )
}

export default Tip