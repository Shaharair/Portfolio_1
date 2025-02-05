import React, { } from 'react'
import ShahariarRR from "../assets/shahariar2.png"
import { FaArrowRight } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom';


const Home = () => {

    return (
        <section className="bg-[black] lg:py-[50px] py-[60px]">
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="lg:w-[80%] w-full lg:flex items-center justify-between">
                    <div className="lg:w-[50%] w-full">
                        <img className="lg:w-[500px] lg:h-[650px] w-[200px]  h-[200px] mx-[70px] lg:mx-0 rounded-full lg:rounded-[50px]" src={ShahariarRR} alt="" />
                    </div>
                    <div className="lg:w-[50%] w-full">
                        <h3 className="font-Poppins font-extrabold lg:text-[36px] text-[22px] pt-[20px] lg:pt-0 text-[#FFCC2E] uppercase">I'm MD Shahariar Hossen.</h3>
                        <div>
                            <ReactTyped
                                strings={[
                                    "I'm Front-End Web Developer.",
                                    "I'm Web Designer.",
                                ]}
                                typeSpeed={500}
                                backSpeed={500}
                                loop
                            >
                                <input type="text" className="font-Poppins font-semibold lg:text-[36px] text-[20px] text-[white] w-full bg-[black] outline-none" />
                            </ReactTyped>
                        </div>
                        <p className="font-Poppins font-medium lg:text-[18px] text-[14px] pt-[20px] lg:pt-[30px] text-[white] uppercase">I'm a Bangledeshi based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                        <div className="lg:mt-[100px] mt-[70px]">
                            <div className="lg:w-[45%] w-[65%] lg:mt-[60px] relative hover:bg-[#FFCC2E] rounded-full duration-500 ease-in-out">
                                <Link to="/about">
                                    <button className="font-Poppins font-medium lg:text-[18px] text-[14px] text-[white] uppercase border-2 border-[#FFCC2E] rounded-full lg:w-[280px] w-[230px] lg:py-[20px] py-4">About me</button>
                                    <div className="absolute top-[50%] translate-y-[-50%] lg:left-[210px] left-[174px] lg:w-[69px] w-[55px] lg:h-[69px] h-[55px] bg-[#FFCC2E] rounded-full lg:text-[24px] text-[18px] pl-[18px] pt-[18px]">
                                        <span className="text-[white]"><FaArrowRight /></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home