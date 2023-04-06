import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { blogList } from '../../dummydata';
import Chip from '../home/BlogList/BlogItem/Chip';
import "./index.css"

const Blog = () => {
    const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find(blog=>blog.id === parseInt(id));

    if(blog){
        setBlog(blog)
    }
  },[])
  return (
    <>
        <Link style={{margin:"20px"}} to="/">Go Back</Link>

        {
            blog ? (
                <div className="blog-wrap">
                <header>
                    <p className="blog-date">Published {blog.createdAt}</p>
                    <h1>{blog.title}</h1>
                    <div className="blog-subCategory">
                    {blog.subCategory.map((category, i) => (
                    <div key={i}>
                    <Chip label={category} />
                    </div>
                    ))}
                    </div>
                </header>
                <img src={blog.cover} alt='cover' />
                <p className='blog-desc'>{blog.description}</p>
                {blog.desc.map((descItem, index) => (
                <div key={index}>
                    {descItem ? (
                    <div>
                        {descItem.para1 && <p className="blog-desc">{descItem.para1}</p>}
                        {descItem.para2 && <p className="blog-desc">{descItem.para2}</p>}
                        {descItem.para3 && <p className="blog-desc">{descItem.para3}</p>}
                    </div>
                    ) : (
                    ""
                    )}
                </div>
                ))}


            </div>
            ): ""
        }
    </>
  )
}

export default Blog