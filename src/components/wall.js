import React from 'react'
import Brick from './brick'
import useColumnLimit from './useColumnLimit';

const Wall = ({ edges }) => {
  let wall = []
  const isPreRendered = typeof window === 'undefined'

  if (isPreRendered) {
    wall = edges.map(({ node}) => (<Brick node={node} key={node.id} />))
  } else {
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
        <div className={`wall-column w-${limit > 1 ? `1/${limit}` : 'full'}`} key={index}>
          {bricks}
        </div>
      )
    })
  }

  return (
    <div className={`wall ${isPreRendered ? 'is-prerendered' : ''}`}>
      {wall}
    </div>
  )
}

export default Wall