import React, { useState } from 'react'
import ShahariarRR from "../assets/my_pictures.png"
import { FaHome, FaUser, FaBriefcase, FaEnvelopeOpen, FaComments, FaArrowRight,FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { ReactTyped } from "react-typed";


const Home = () => {

    let [show, setShow] = useState(false)

    return (
        <section className="bg-[black] lg:py-[110px] py-[50px]">
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="lg:flex justify-between">
                    <div className="lg:w-[30%] w-full pl-[75px] lg:pl-0  mt-[50px] lg:mt-0 mb-[30px] lg:mb-0">
                        <img className="lg:rounded-[500px] rounded-[500px] lg:w-[400px] w-[200px] lg:h-[400px] h-[200px]" src={ShahariarRR} alt="my_pictures" />
                    </div>
                    <div className="lg:w-[50%] w-full">
                        <div className="">
                            <h3 className="font-Poppins font-bold lg:text-[48px] text-[24px] text-[#FFCC2E] uppercase">I'm MD Shahariar Hossen.</h3>
                        </div>
                        <div className="relative">
                            {/* <ReactTyped strings={["Here you can find anything"]} typeSpeed={500} />
                            <br /> */}
                            <div className="">
                                <ReactTyped
                                    strings={[
                                        "I'm Frontend Web Developer",
                                        "I'm Web Designer",
                                        "I'm Backend Developer",
                                        "I'm Python Developer",
                                        "I'm MERN StacK Developer"
                                    ]}
                                    typeSpeed={500}
                                    backSpeed={500}
                                    loop
                                >
                                    <div className="font-Poppins font-bold lg:text-[48px] text-[24px] h-[10px] lg:w-full text-white lg:pb-[50px] pb-[20px] outline-none lg:uppercase capitalize">
                                        <input type="text" />
                                    </div>
                                </ReactTyped>
                            </div>
                        </div>
                        <div className="">
                            <p className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] lg:pr-[150px]">I'm a Bangladeshi based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                        </div>
                        <div className="lg:w-[38%] w-[68%] lg:mt-[60px] mt-[20px] relative hover:bg-[#FFCC2E] rounded-full duration-500 ease-in-out">
                            <button className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white] uppercase border-2 border-[#FFCC2E] rounded-full lg:px-[70px] px-[60px] lg:py-4 py-3">more about me</button>
                            <div className=" absolute top-[50%] translate-y-[-50%] right-[1px] lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] bg-[#FFCC2E] rounded-full lg:text-[24px] text-[18px] pl-[18px] pt-[18px]">
                                <FaArrowRight className="text-[white]" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[20%]">
                        <ul className={`absolute top-[50px] left-0 lg:static duration-700 ease-in-out pt-[30px] lg:pt-0 pb-[30px] lg:pb-0 ${show == true ? "bg-[gray] w-[280px] h-[400px] rounded" : "left-[-200px]"} `}>
                            <div className="flex items-center lg:gap-4 gap-2 relative group overflow-hidden">
                                <div className="lg:w-[130px] w-[100px] lg:py-[20px] py-2 rounded-full text-center left-[-120px] absolute group-hover:left-0 group-hover:bg-[#FFCC2E] duration-700 ease-in-out">
                                    <li className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white] uppercase">Home</li>
                                </div>
                                <span className="text-[white] lg:text-[24px] text-[18px] lg:w-[60px] w-[40px] lg:h-[60px] h-[40px] bg-[#767676] rounded-full lg:pl-[18px] pl-[11px] lg:pt-[17px] pt-[10px] lg:mx-[120px] mx-[110px] hover:bg-[#FFCC2E] duration-700 ease-in-out"><FaHome /></span>
                            </div>
                            <div className="flex items-center lg:gap-4 gap-2 lg:py-[40px] py-[20px] relative group overflow-hidden">
                                <div className="lg:w-[130px] w-[100px] lg:py-[20px] py-2 rounded-full text-center left-[-120px] absolute group-hover:left-0 group-hover:bg-[#FFCC2E] duration-700 ease-in-out">
                                    <li className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white] uppercase">About</li>
                                </div>
                                <span className="text-[white] lg:text-[24px] text-[18px] lg:w-[60px] w-[40px] lg:h-[60px] h-[40px] bg-[#767676] rounded-full lg:pl-[18px] pl-[11px] lg:pt-[17px] pt-[10px] lg:mx-[120px] mx-[110px] hover:bg-[#FFCC2E] duration-700 ease-in-out"><FaUser /></span>
                            </div>
                            <div className="flex items-center lg:gap-4 gap-2 relative group overflow-hidden">
                                <div className="lg:w-[130px] w-[100px] lg:py-[20px] py-2 rounded-full text-center left-[-120px] absolute group-hover:left-0 group-hover:bg-[#FFCC2E] duration-700 ease-in-out">
                                    <li className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white] uppercase">portfolio</li>
                                </div>
                                <span className="text-[white] lg:text-[24px] text-[18px] lg:w-[60px] w-[40px] lg:h-[60px] h-[40px]  bg-[#767676] rounded-full lg:pl-[18px] pl-[11px] lg:pt-[17px] pt-[10px] lg:mx-[120px] mx-[110px] hover:bg-[#FFCC2E] duration-700 ease-in-out"><FaBriefcase /></span>
                            </div>
                            <div className="flex items-center lg:gap-4 gap-2 lg:py-[40px] py-[20px] relative group overflow-hidden">
                                <div className="lg:w-[130px] w-[100px] lg:py-[20px] py-2 rounded-full text-center left-[-120px] absolute group-hover:left-0 group-hover:bg-[#FFCC2E] duration-700 ease-in-out">
                                    <li className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white] uppercase">Contact</li>
                                </div>
                                <span className="text-[white] lg:text-[24px] text-[18px] lg:w-[60px] w-[40px] lg:h-[60px] h-[40px]  bg-[#767676] rounded-full lg:pl-[18px] pl-[11px] lg:pt-[17px] pt-[10px] lg:mx-[120px] mx-[110px] hover:bg-[#FFCC2E] duration-700 ease-in-out"><FaEnvelopeOpen /></span>
                            </div>
                            <div className="flex items-center lg:gap-4 gap-2 relative group overflow-hidden">
                                <div className="lg:w-[130px] w-[100px] lg:py-[20px] py-2  rounded-full text-center left-[-120px] absolute group-hover:left-0 group-hover:bg-[#FFCC2E] duration-700 ease-in-out">
                                    <li className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white] uppercase">Blog</li>
                                </div>
                                <span className="text-[white] lg:text-[24px] text-[18px] lg:w-[60px] w-[40px] lg:h-[60px] h-[40px]  bg-[#767676] rounded-full lg:pl-[18px] pl-[11px] lg:pt-[17px] pt-[10px] lg:mx-[120px] mx-[110px] hover:bg-[#FFCC2E] duration-700 ease-in-out"><FaComments /></span>
                            </div>
                        </ul>
                        <div onClick={() => setShow(!show)} className="lg:hidden text-[24px] text-white absolute right-[20px] top-[10%] translate-y-[-10%]">
                                {show == true ? <RxCross2/> : <FaBars/>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home