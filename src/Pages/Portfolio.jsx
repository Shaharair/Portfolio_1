import React from 'react'
import PortRR from "../assets/port.jpg"
import PortEE from "../assets/port1.jpg"
import PortWW from "../assets/port2.jpg"
import PortXX from "../assets/port3.jpg"
import PortMM from "../assets/port4.jpg"
import PortNN from "../assets/port5.jpg"
import PortBB from "../assets/port6.jpg"
import PortVV from "../assets/port7.jpg"
import PortCC from "../assets/port8.jpg"
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <section className="bg-[black] lg:py-[100px] py-[30px]">
      <div className="container px-3 lg:px-0 mx-auto">
        <h3 className="font-Poppins font-bold lg:text-[48px] text-[30px] text-[white] text-center uppercase lg:pb-[100px] pb-[30px]">My <span className="font-Poppins font-bold lg:text-[48px] text-[30px] text-[#FFCC2E]">Portfolio</span></h3>
        <div className="lg:w-[80%] w-full">
          <div className="lg:flex items-center justify-between">
            <div className="lg:w-[32%] w-full relative group overflow-hidden">
              <Link to="/image">
                <h3 className="font-Poppins font-semibold lg:text-[18px] text-[14px] bg-[#FFCC2E] text-[white] uppercase absolute lg:pt-[110px] pt-[100px] left-[-600px] lg:w-[393px] w-[334px] lg:pl-[120px] pl-[115px] h-full rounded-[30px] group-hover:left-0 duration-500 ease-in-out">Images Project</h3>
                <img className="rounded-[30px]" src={PortRR} alt="port" />
              </Link>
            </div>
            <div className="lg:w-[32%] w-full relative group overflow-hidden mt-[20px] lg:mt-0">
              <Link to="/figmaproject">
                <h3 className="font-Poppins font-semibold lg:text-[18px] text-[14px] bg-[#FFCC2E] text-[white] uppercase absolute lg:pt-[110px] pt-[100px] left-[-600px] lg:w-[393px] w-[334px] lg:pl-[120px] pl-[115px] h-full rounded-[30px] group-hover:left-0 duration-500 ease-in-out">Figma Project</h3>
                <img className="rounded-[30px]" src={PortEE} alt="port" />
              </Link>
            </div>
            <div className="lg:w-[32%] w-full relative group overflow-hidden mt-[20px] lg:mt-0">
              <Link to="/landing">
                <h3 className="font-Poppins font-semibold lg:text-[18px] text-[14px] bg-[#FFCC2E] text-[white] uppercase absolute lg:pt-[110px] pt-[100px] left-[-600px] lg:w-[393px] w-[334px] lg:pl-[120px] pl-[115px] h-full rounded-[30px] group-hover:left-0 duration-500 ease-in-out">Landing Page</h3>
                <img className="rounded-[30px]" src={PortWW} alt="port" />
              </Link>
            </div>
          </div>
          <div className="lg:flex items-center justify-between lg:pt-[30px] pt-[20px]">
            <div className="lg:w-[32%] w-full relative group overflow-hidden">
              <Link to="/multipage">
                <h3 className="font-Poppins font-semibold lg:text-[18px] text-[14px] bg-[#FFCC2E] text-[white] uppercase absolute lg:pt-[120px] pt-[100px] left-[-600px] lg:w-[393px] w-[334px] lg:pl-[140px] pl-[130px] h-full rounded-[30px] group-hover:left-0 duration-500 ease-in-out">Multi Page</h3>
                <img className="rounded-[30px]" src={PortXX} alt="port" />
              </Link>
            </div>
            <div className="lg:w-[32%] w-full relative group overflow-hidden mt-[20px] lg:mt-0">
              <Link to="/ecommerce">
                <h3 className="font-Poppins font-semibold lg:text-[18px] text-[14px] bg-[#FFCC2E] text-[white] uppercase absolute lg:pt-[120px] pt-[100px] left-[-600px] lg:w-[393px] w-[334px] lg:pl-[100px] pl-[90px] h-full rounded-[30px] group-hover:left-0 duration-500 ease-in-out">E-Commerce Project</h3>
                <img className="rounded-[30px]" src={PortMM} alt="port" />
              </Link>
            </div>
            <div className="lg:w-[32%] relative group overflow-hidden mt-[20px] lg:mt-0">
              <Link to="/personalportfolio">
                <h3 className="font-Poppins font-semibold lg:text-[18px] text-[14px] bg-[#FFCC2E] text-[white] uppercase absolute lg:pt-[120px] pt-[100px] left-[-600px] lg:w-[393px] w-[334px] lg:pl-[110px] pl-[95px] h-full rounded-[30px] group-hover:left-0 duration-500 ease-in-out">Portfolio Project</h3>
                <img className="rounded-[30px]" src={PortNN} alt="port" />
              </Link>
            </div>
          </div>
          <div className="lg:flex items-center justify-between lg:pt-[30px] pt-[20px]">
            <div className="lg:w-[32%] w-full relative group overflow-hidden">
              <Link to="/sliderproject">
                <h3 className="font-Poppins font-semibold lg:text-[18px] text-[14px] bg-[#FFCC2E] text-[white] uppercase absolute lg:pt-[120px] pt-[100px] left-[-600px] lg:w-[393px] w-[334px] lg:pl-[120px] pl-[115px] h-full rounded-[30px] group-hover:left-0 duration-500 ease-in-out">Slider Project</h3>
                <img className="rounded-[30px]" src={PortBB} alt="port" />
              </Link>
            </div>
            <div className="lg:w-[32%] w-full relative group overflow-hidden mt-[20px]">
              <Link to="/api">
                <h3 className="font-Poppins font-semibold lg:text-[18px] text-[14px] bg-[#FFCC2E] text-[white] uppercase absolute lg:pt-[120px] pt-[100px] left-[-600px] lg:w-[393px] w-[334px] lg:pl-[130px] pl-[125px] h-full rounded-[30px] group-hover:left-0 duration-500 ease-in-out">API Project</h3>
                <img className="rounded-[30px]" src={PortVV} alt="port" />
              </Link>
            </div>
            <div className="lg:w-[32%] w-full relative group overflow-hidden mt-[20px]">
              <Link to="/myportfolio">
                <h3 className="font-Poppins font-semibold lg:text-[18px] text-[14px] bg-[#FFCC2E] text-[white] uppercase absolute lg:pt-[120px] pt-[95px] left-[-600px] lg:w-[393px] w-[334px] lg:pl-[110px] pl-[95px] h-full rounded-[30px] group-hover:left-0 duration-500 ease-in-out">Portfolio Project</h3>
                <img className="rounded-[30px]" src={PortCC} alt="port" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio