import React from 'react'
import Card from './card'

const Tip = ({ node, children }) => {
  const { html, frontmatter: { title, thumbnail, url } } = node

  return <Card>
    {thumbnail !== null && <img src={thumbnail} alt={title} />}
    <h2>
      <a href={url}>{title}</a>
    </h2>
    <div className="content py-2 px-4" dangerouslySetInnerHTML={({__html: html})} />
    {children}
  </Card>
}

export default Tip