import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({item: {id, cover, catgeory, title, authorName, authorImage, time}}) => {
  return (
    <>
        <div className="box">
            <div className="img">
                <img src={cover} alt="" />
            </div>
            <div className="text">
                <span className='category'>{catgeory}</span>
                <h1 className="title">{title}</h1>
                <div className="author flex">
                    <span>by {authorName}</span>
                    <span>{time}</span>
                </div>
            </div>
            <Link to={`/blog/${id}` } style={{ position:"absolute", top:"0", left:"0", bottom:"0", right:"0" }}></Link>
        </div>    
    </>
  )
}

export default Card