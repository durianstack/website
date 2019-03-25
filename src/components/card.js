import React from 'react'

const Card = ({ children }) => (
  <div className="card w-1/4 flex items-center">
    <div>
      {children}
    </div>
  </div>
)

export default Card