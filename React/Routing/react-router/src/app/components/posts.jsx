import React from "react"
import Post from "./post.jsx"
import PostList from "./postList.jsx"
import { useParams } from "react-router-dom"

const Posts = ({ match }) => {
  const params = useParams()
  const posts = [
    { id: 1, label: "post1" },
    { id: 2, label: "post2" },
    { id: 3, label: "post3" }
  ]

  const { postId } = params

  return (
    <>
      {postId ? <Post posts={posts} id={postId} /> : <PostList posts={posts} />}
    </>
  )
}

export default Posts
