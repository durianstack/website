import React from 'react'
import Tags from './tags'
import Tip from '../components/tip'
import Blog from '../components/blog'
import useColumnLimit from './useColumnLimit';

const Wall = ({ edges }) => {

  let column = 0
  let limit = useColumnLimit()
  let rows = Array.from({length: limit}, () => [])
  
  edges.forEach(({ node }) => {
    rows[column].push(node)
    column++
    if (column === limit) column = 0
  })

  const wall = rows.map((columns, index) => {
    const post = columns.map(node => {
      const { id, frontmatter: { tags, type } } = node
      const EntryType = type === 'blog' ? Blog : Tip

      return <EntryType node={node} key={id}>
        <Tags items={tags} />
      </EntryType>
    })
    const columnWidth = limit > 1 ? `1/${limit}` : 'full'

    return <div className={`wall-column w-${columnWidth}`} key={index}>{post}</div>
  })

  return <div className="wall flex">{wall}</div>
}

export default Wall