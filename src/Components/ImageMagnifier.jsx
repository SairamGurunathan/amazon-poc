import React from 'react'
import ReactImageMagnify from 'react-image-magnify'

const ImageMagnifier = ({image}) => {
  
  return (
    <div id="magnifier">
    <ReactImageMagnify {...{
    smallImage: {
        alt: '',
        isFluidWidth: true,
        src: image
    },
    largeImage: {
        src: image,
        width: 1200,
        height: 1200
    }
  }} />
  </div>
  )
}

export default ImageMagnifier