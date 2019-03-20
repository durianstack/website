import React from 'react'
import ImagePlaceholder from '../components/imagePlaceholder'

const Featured = ({ edges }) => {

  console.log(edges.length);

  return <div className="featured">
    <div className="w-3/4 mr-4">
      <ImagePlaceholder />
    </div>
    <div className="w-1/4">
      <div className="mb-4">
        <ImagePlaceholder />
      </div>
      <ImagePlaceholder />
    </div>
  </div>
}

export default Featured