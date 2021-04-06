import React, { useEffect, useState } from 'react'
import SkeletonBody from '../skeletons/skeletonBody'

function Body() {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    setTimeout(async () => {
      let data = await fetch('http://localhost:3000/posts/')
      // console.dir(data)
      let p = await data.json()
      setUsers(p)
    }, 5000)
  }, [])
  return (
    <div className="border">
      <h4>
        <center>All user 's data :</center>
      </h4>
      <hr />
      {users
        ? users.map((user) => {
            return (
              <ul key={user.id} className="li">
                <li>User Name:{user.title}</li>
                <li>Book Author:{user.author}</li>
              </ul>
            )
          })
        : [1, 2, 3, 4].map((n) => {
            return <SkeletonBody key={n} />
          })}
    </div>
  )
}

export default Body
