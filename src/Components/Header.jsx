import React, { useState } from 'react'
import { FaHome, FaUser, FaBriefcase, FaEnvelopeOpen, FaComments, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";



const Header = () => {

    let [show, setShow] = useState(false)
    let [activeList, setActiveList] = useState("")

    return (
        <section>
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="w-[17%] fixed z-50 right-0">
                    <div className=" lg:mt-[100px] mt-[30px]">
                        <ul className={`absolute top-[70px] right-0 lg:static duration-700 ease-in-out py-[30px] ${show == true ? "bg-[gray] w-[250px] rounded-[20px]" : "right-[-250px]"}`}>
                            <Link to="/">
                                <div className="flex items-center relative group overflow-hidden">
                                    <div className="lg:w-[150px] w-[120px] lg:py-[15px] py-[8px] absolute top-0 left-[-200px] rounded-[10px] group-hover:left-0 group-hover:bg-[#FFCC2E] duration-700 ease-in-out">
                                        <li className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white] text-center uppercase">Home</li>
                                    </div>
                                    <span className={`font-Poppins font-semibold lg:text-[24px] text-[18px] text-[white] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] bg-[#767676] rounded-full lg:ms-[200px] ms-[170px] lg:pl-[18px] pl-[16px] lg:pt-[17px] pt-[16px] ${activeList ==  "active" ? "" : "bg-[#FFCC2E]"}`}><FaHome /></span>
                                </div>
                            </Link>
                            <Link to="/about">
                                <div className="flex items-center relative group overflow-hidden lg:my-[50px] my-[20px]">
                                    <div className="lg:w-[150px] w-[120px] lg:py-[15px] py-2 absolute left-[-200px] rounded-[10px] group-hover:left-0 group-hover:bg-[#FFCC2E] duration-700 ease-in-out">
                                        <li className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white] text-center uppercase">About</li>
                                    </div>
                                    <span className={`font-Poppins font-semibold lg:text-[24px] text-[18px] text-[white] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] bg-[#767676] rounded-full lg:ms-[200px] ms-[170px] lg:pl-[18px] pl-[16px] lg:pt-[17px] pt-[16px]  ${activeList ==  "active" ? "" : "bg-[#FFCC2E]"}`}><FaUser /></span>
                                </div>
                            </Link>
                            <Link to="/portfolio">
                                <div className="flex items-center  relative group overflow-hidden">
                                    <div className="lg:w-[150px] w-[120px] lg:py-[15px] py-2 absolute left-[-200px] rounded-[10px] group-hover:left-0 group-hover:bg-[#FFCC2E] duration-700 ease-in-out">
                                        <li className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white] text-center uppercase">Portfolio</li>
                                    </div>
                                    <span className={`font-Poppins font-semibold lg:text-[24px] text-[18px] text-[white] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] bg-[#767676] rounded-full lg:ms-[200px] ms-[170px] lg:pl-[18px] pl-[16px] lg:pt-[17px]  pt-[16px] ${activeList ==  "active" ? "" : "bg-[#FFCC2E]"}`}><FaBriefcase /></span>
                                </div>
                            </Link>
                            <Link to="/contact">
                                <div className="flex items-center  relative group overflow-hidden lg:my-[50px] my-[20px]">
                                    <div className="lg:w-[150px] w-[120px] lg:py-[15px] py-2 absolute left-[-200px] rounded-[10px] group-hover:left-0 group-hover:bg-[#FFCC2E] duration-700 ease-in-out">
                                        <li className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white] text-center uppercase">Contact</li>
                                    </div>
                                    <span className={`font-Poppins font-semibold lg:text-[24px] text-[18px] text-[white] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] bg-[#767676] rounded-full lg:ms-[200px] ms-[170px] lg:pl-[18px] pl-[16px] lg:pt-[17px] pt-[16px] ${activeList ==  "active" ? "" : "bg-[#FFCC2E]"}`}><FaEnvelopeOpen /></span>
                                </div>
                            </Link>
                            <Link to="/blog">
                                <div className="flex items-center  relative group overflow-hidden">
                                    <div className="lg:w-[150px] w-[120px] lg:py-[15px] py-2 absolute left-[-200px] rounded-[10px] group-hover:left-0 group-hover:bg-[#FFCC2E] duration-700 ease-in-out">
                                        <li className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white] text-center uppercase">Blog</li>
                                    </div>
                                    <span className={`font-Poppins font-semibold lg:text-[24px] text-[18px] text-[white] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] bg-[#767676] rounded-full lg:ms-[200px] ms-[170px] lg:pl-[18px] pl-[16px] lg:pt-[17px] pt-[16px] ${activeList ==  "active" ? "" : "bg-[#FFCC2E]"}`}><FaComments /></span>
                                </div>
                            </Link>
                        </ul>
                    </div>
                     <div onClick={() => setShow(!show)} className="lg:hidden text-[white] text-[24px]">
                        {show == true ? <RxCross2 /> : <FaBars />}
                    </div> 

                </div>
            </div>
        </section>
    )
}

export default Header