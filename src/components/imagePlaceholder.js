import React from 'react'

const random = items => items[Math.floor(Math.random() * items.length)]

const ImagePlaceholder = () => {
  const width = random([640, 520, 540, 340])
  const height = random([580, 480, 380, 300])
  return <img className="w-full" src={`//placeimg.com/${width}/${height}/any`} alt="Sunset in the mountains" />
}

export default ImagePlaceholder