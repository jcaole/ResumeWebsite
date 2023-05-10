import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index"

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          <a href="https://github.com/jcaole" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/jeremy-caole/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>

      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-row gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <a href="#projects">
              <span className="text-lg relative group cursor-pointer">
                Projects
                <span className="w-full h-[2px] bg-transparent absolute bottom-0 left-0 transition-all duration-300"></span>
              </span>
            </a>
          </li>
          <li>
            <a href="#resume">
            <span className="text-lg relative group cursor-pointer">
              Resume
              <span className="w-full h-[2px] bg-transparent absolute bottom-0 left-0 transition-all duration-300"></span>
            </span>
            </a>
          </li>
          <li>
            <a href="#contact">
            <span className="text-lg relative group cursor-pointer">
              Contact
              <span className="w-full h-[2px] bg-transparent absolute bottom-0 left-0 transition-all duration-300"></span>
            </span>
            </a>
          </li>
        </ul>
        <style>{`
    .group:hover > span {
      width: 100%;
      background-color: #718096;
    }
  `}</style>
      </div>



    </div>
  );
}

export default Footer