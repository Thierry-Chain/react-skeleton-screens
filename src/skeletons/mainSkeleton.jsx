import React from 'react'
import './skeleton.css'

function MainSkeleton({ type, children }) {
  return (
    <div className={`skeleton ${type}`}>
      {children && <div className="skeleton__wrapper">{children}</div>}
    </div>
  )
}

export default MainSkeleton
