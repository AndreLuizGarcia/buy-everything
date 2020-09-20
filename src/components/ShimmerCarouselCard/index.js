import React from 'react'

import ContentLoader from 'react-content-loader'

function ShimmerCarouselCard() {
  return (
    <ContentLoader 
      speed={2}
      width={270}
      height={468}
      viewBox="0 0 270 468"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="60" y="72" rx="3" ry="3" width="150" height="190" /> 
      <rect x="38" y="282" rx="3" ry="3" width="48" height="11" /> 
      <rect x="40" y="301" rx="3" ry="3" width="200" height="90" /> 
      <rect x="42" y="404" rx="3" ry="3" width="72" height="26" /> 
      <rect x="129" y="404" rx="3" ry="3" width="72" height="26" />
    </ContentLoader>
  )
}

export default ShimmerCarouselCard;