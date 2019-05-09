import React from 'react'
import Brick from './brick'
import useColumnLimit from './useColumnLimit';

const Wall = ({ edges }) => {
  let wall = []
  const isPreRendered = typeof window === 'undefined'

  console.log(isPreRendered)

  let column = 0
  let limit = useColumnLimit()
  let rows = Array.from({length: limit}, () => [])

  edges.forEach(({ node }) => {
    rows[column].push(node)
    column++
    if (column === limit) column = 0
  })

  wall = rows.map((columns, index) => {
    const bricks = columns.map(node => (<Brick node={node} key={node.id} />))

    return (
      <div className={`col is-${limit} ${isPreRendered ? 'is-prerendered' : ''}`} key={index}>
        {bricks}
      </div>
    )
  })

  return (
    <div className="wall">
      {wall}
    </div>
  )
}

export default Wall