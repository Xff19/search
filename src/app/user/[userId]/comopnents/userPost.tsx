import React from 'react'
type Prop={
  promise:Promise<Post[]>
}
export default async function UserPost({promise}:Prop) {
  const posts=await promise
  return (
    <div>
      {posts.map(item=><li key={item.id}>{item.title}<br/>{item.body}</li>)}
    </div>
  )
}
