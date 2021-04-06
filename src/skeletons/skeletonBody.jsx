import React from 'react'
import MainSkeleton from './mainSkeleton'
import Shimmer from './shimmer'
function SkeletonBody() {
  return (
    <div className="skeleton__wrapper">
      <MainSkeleton type="list">
        <MainSkeleton type="title-n" />
        <MainSkeleton type="text-n" />
        <MainSkeleton type="text-n" />
      </MainSkeleton>
      <Shimmer />
    </div>
  )
}

export default SkeletonBody
