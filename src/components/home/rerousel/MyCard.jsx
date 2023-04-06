import React, { useState, useEffect } from "react";
import "./Authors.css";
import {FiMail} from "react-icons/fi"
import {GrFacebookOption} from "react-icons/gr"
import {FaLinkedinIn} from "react-icons/fa"
import {HiDevicePhoneMobile} from "react-icons/hi2"
import {AiFillMail} from "react-icons/ai"

const Mycard = (props) => {
  const [isMobile, setIsMobile] = useState(getIsMobile());
  const [isTablet, setIsTablet] = useState(getIsTablet());

  useEffect(() => {
    function handleResize() {
      setIsMobile(getIsMobile());
      setIsTablet(getIsTablet());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getIsMobile() {
    return window.innerWidth < 1080;
  }

  function getIsTablet() {
    return window.innerWidth >= 1080 && window.innerWidth < 1200;
  }
  return (
    <div className={`mycard ${isTablet ? 'mt-24' : 'desktop'} ${isMobile ? 'block' : 'desktop'}`}>
      <img
        className={`cover ${isTablet ? 'min-w-[300px]' : 'desktop'}`}
        src={props.img}
        alt={`Blog Cover No. ${props.cardno}`}
      />
      {/* <div className='mycard-title'>Mycard No. {props.cardno}</div> */}
      <div className="details flex flex-col ml-5 ">
        <h1 className="name text-grey text-5xl font-medium  mb-3 capitalize">{props.name}</h1>
        <p className="expertise  text-grey text-sm font-medium">{props.experts}</p>
        <p className="my-3 border-2 w-20 rounded-sm"></p>
        <p className="about-authors z-10 w-full text-black mt-3">{props.desc}</p>
        <div className={`flex bg-blue p-4 w-52 items-center  rounded-lg mt-5 hover:scale-105 cursor-pointer`}>
            <FiMail className={`text-3xl `} />
            <p className={`text-xl ml-5`}>Get in touch</p>
        </div>
        <div className="icons text-blue flex text-4xl mt-10 items-center justify-between w-8/12">
            <GrFacebookOption className="border-2 rounded-full p-2 hover:scale-125 cursor-pointer"/>
            <FaLinkedinIn className="border-2 rounded-full p-2 hover:scale-125 cursor-pointer"/>
            <HiDevicePhoneMobile className="border-2 rounded-full p-2 hover:scale-125 cursor-pointer"/>
            <AiFillMail className="border-2 rounded-full p-2 hover:scale-125 cursor-pointer"/>
        </div>

      </div>
    </div>
  );
};

export default Mycard;
