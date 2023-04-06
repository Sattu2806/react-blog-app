import React from 'react'
import { Fragment } from "react"
import logo from "../../../images/Logo.png"
import ad from "../../../images/2.png"

const Head = () => {
  return (
    <Fragment>
        <section className='head pt-3'>
            <div className="container mx-w-90 mx-auto flex items-center justify-between">
                <div className="logo">
                    <img className='logo-image w-64' src={logo} alt="" />
                </div>
                <div className="ad">
                  <img className='logo-image2 w-40' src={ad} alt="" />
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Head