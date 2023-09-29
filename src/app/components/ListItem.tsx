import React from 'react'
import Link from 'next/link'
type Props={
    post:BlogPost
}
export default function PostId({post}:Props) {
  return (
    <div>
      <h1><Link href={`/posts/${post.id}`}>{post?.title}</Link></h1>
      <h1>{post?.date}</h1>
    </div>
  )
}
