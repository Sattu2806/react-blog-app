import React, {useState} from 'react'
import BlogList from '../BlogList'
import Hero from './hero'
import { blogList } from '../../../dummydata'
import {hero} from "../../../dummydata"
import { useParams } from 'react-router-dom'
import Imagecarousel from '../rerousel/Authors'


const Homepage = () => {
  const [blogs, setBlogs] = useState(blogList,hero)
  const [heroData, setHeroData] = useState(hero);

  // const {id} = useParams();
  return (
    <>
      <section className='w-11/12 m-auto'>
      <Hero heroData={heroData}/>
      <h1 className='featured-posts text-center border-b-2 w-60 m-auto text-2xl text-black border-slate-400 mt-32'>Featured Posts</h1>
      <BlogList blogs={blogs} />
      <h1 className='featured-posts text-center border-b-2 w-60 m-auto text-2xl text-black border-slate-400 mt-32'>About Authors</h1>
      <Imagecarousel/>
      </section>

    </>
  )
}

export default Homepage