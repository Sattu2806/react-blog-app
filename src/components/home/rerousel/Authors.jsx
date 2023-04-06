import React, { useRef } from 'react'
import MyCard from './MyCard'
import './Authors.css'
import { blogList } from '../../../dummydata'

const Imagecarousel = () => {
  const boxRef = useRef(null)

  const btnpressprev = () => {
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
    console.log(width)
  }

  const btnpressnext = () => {
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
    console.log(width)
  }

  const firstSevenBlogs = blogList.slice(0,4);

  return (
    <div className="product-carousel">
      <button className="pre-btn bg-slate-500" onClick={btnpressprev}><p>&lt;</p></button>
      <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>

      <div className="product-container" ref={boxRef}>
        {firstSevenBlogs.map((blog, index) => (
          <MyCard key={index} cardno={index+1} img={blog.authorAvatar} desc={blog.author_desc} name= {blog.authorName} experts={blog.expert}/>
        ))}
      </div>
    </div>
  )
}

export default Imagecarousel
