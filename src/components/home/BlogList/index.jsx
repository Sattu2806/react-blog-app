import React from 'react'
import BlogItem from './BlogItem'
import "./index.css"

const BlogList = ({blogs}) => {
  const firstSevenBlogs = blogs.slice(4); // Get the first seven blogs from the array
  return (
    <div className="blogList-wrap mt-20">
        {firstSevenBlogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  )
}

export default BlogList