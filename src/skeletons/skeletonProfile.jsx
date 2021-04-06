import React from 'react'
import MainSkeleton from './mainSkeleton'
import Shimmer from './shimmer'

function SkeletonProfile() {
  return (
    <div className="skeleton__wrapper">
      <div className="border">
        <MainSkeleton type="avatar" />
        <MainSkeleton type="title" />
        <MainSkeleton type="text" />
        <MainSkeleton type="text" />
      </div>
      <Shimmer />
    </div>
  )
}

export default SkeletonProfile
