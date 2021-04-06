import React, { useEffect, useState } from 'react'
import SkeletonProfile from '../skeletons/skeletonProfile'

function User() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    setTimeout(async () => {
      let data = await fetch('http://localhost:3000/posts/1')
      //console.dir(data)
      let p = await data.json()
      setUser(p)
    }, 5000)
  }, [])
  return (
    <div className="border">
      <h4>
        <center>User Profile</center>
      </h4>
      <hr />
      {user ? (
        <div className="user">
          <p>Id : {user.id}</p>
          <p>Title : {user.title}</p>
          <p>Author : {user.author}</p>
        </div>
      ) : (
        <SkeletonProfile />
      )}
    </div>
  )
}

export default User
