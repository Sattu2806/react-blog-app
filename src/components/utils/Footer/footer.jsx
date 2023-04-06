import React, { useState, useEffect } from "react";
import { FiMail } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { AiFillMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
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
    return window.innerWidth < 600;
  }

  function getIsTablet() {
    return window.innerWidth >= 600 && window.innerWidth < 1000;
  }
  return (
    <>
      <section className={`mt-32 text-center text-white absolute left-0 right-0 bg-gray-800 ${isTablet ? 'mt-24' : 'desktop'} ${isMobile ? 'mt-20' : ''}`}>
        <div className="upper lower p-3  ">
          <h1 className="text-3xl font-medium mt-10">Code Sattu</h1>
          <p className={`w-1/2 m-auto mt-5 text-gray-200 ${isTablet ? 'w-9/12' : 'desktop'} ${isMobile ? 'w-11/12' : ''}`}>
            Lorem ipsum dolor sit amet, nisl tempus lorem adipiscing elit. Donec
            sollicitudin blandit tellus, ac sagittis ligula egestas consequat.
          </p>
          <div className={`icons  flex text-4xl mt-10 m-auto items-center justify-between w-1/4 text-center mb-10 ${isTablet ? 'w-7/12' : 'desktop'} ${isMobile ? 'w-8/12 text-2xl' : ''}`}>
            <GrFacebookOption className="border-2 rounded-full p-2 hover:scale-125 hover:text-blue cursor-pointer" />
            <FaLinkedinIn className="border-2 rounded-full p-2 hover:scale-125 hover:text-blue cursor-pointer" />
            <HiDevicePhoneMobile className="border-2 rounded-full p-2 hover:scale-125 hover:text-blue cursor-pointer" />
            <AiFillMail className="border-2 rounded-full p-2 hover:scale-125 hover:text-blue cursor-pointer" />
            <AiFillGithub className="border-2 rounded-full p-2 hover:scale-125 hover:text-blue cursor-pointer" />
          </div>
        </div>
        <div className="lower p-5 mt-[-20px]">
          <p>Copyright &#169; Code Saatu</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
