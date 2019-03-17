import React from 'react'
import { Link } from 'gatsby'

const Wall = ({ edges }) => {

  let limit = 3
  let column = 0
  let rows = Array.from({length: limit}, () => [])
  
  edges.forEach(({ node }) => {
    rows[column].push(node)
    column++
    if (column === limit) column = 0
  })

  const wall = rows.map(columns => {
    const post = columns.map(node => {
      const { id, excerpt, frontmatter: { path, title } } = node
      return <div key={id} className="max-w-sm overflow-hidden shadow-md mb-2">
        {/* <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" /> */}
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            <Link to={path}>
              {title}
            </Link>
          </div>
          <p class="text-grey-darker text-base">{excerpt}</p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
        </div>
      </div>
    })
    return <div class="wall-column flex flex-col">{post}</div>
  })


  return <div class="wall flex">{wall}</div>
}

export default Wall