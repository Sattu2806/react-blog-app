import { Fragment } from "react"
import React from 'react' 
import { Link } from "react-router-dom"
import "./Header.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiFillHome} from "react-icons/ai"
import { useState, useEffect } from 'react';
import classNames from 'classnames';

const Header = () => {
    const [Mobile, setMobile] = useState(false)
    const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shouldHide = windowSize > 800;

  const classes = classNames({
    'hidden': shouldHide,
  });
  return (
    <Fragment>
        {/* <Head/> */}
        <header className="bg-gray-800">
            <div className="container  text-white w-11/12 m-auto">
                <nav className="flex justify-between items-center ">
                    <h2 className="logo p-4">
                        <a href="/"> <AiFillHome className="block text-2xl" /></a>
                    </h2>
                    <ul className={Mobile ? "absolute bg-black w-full text-center top-10 left-0 right-0 space-y-6 pb-4 z-40 " : "flex items-center space-x-6 p-6 wid8"} onClick={() => setMobile(false)}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/culture'>Culture</Link></li>
                        <li><Link to='/books'>Books</Link></li>
                        <li><Link to='/memes'>Memes</Link></li>
                        <li><Link to='/sports'>Sports</Link></li>
                        <li><Link to='/reviews'>Reviews</Link></li>
                    </ul>
                    <button className={`${classes} text-2xl`} onClick={() => setMobile(!Mobile)}>
                        <GiHamburgerMenu/>
                    </button>
                </nav>
            </div>
        </header>
    </Fragment>
  )
}

export default Header