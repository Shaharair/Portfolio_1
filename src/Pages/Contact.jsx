import React, { } from 'react'
import { BiSolidEnvelopeOpen } from "react-icons/bi";
import { FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";


const Contact = () => {

    return (
        <section className="bg-black lg:py-[100px] py-[30px]">
            <div className="container px-3 lg:px-0 mx-auto">
                <h3 className="font-Poppins font-bold lg:text-[48px] text-[30px] text-[white] text-center uppercase lg:pb-[100px] pb-[30px]">Contact <span className="font-Poppins font-bold lg:text-[48px] text-[30px] text-[#FFCC2E]">Me</span></h3>
                <div className="lg:flex justify-between">
                    <div className="lg:w-[35%] w-full">
                        <h3 className="font-Poppins font-bold lg:text-[24px] text-[18px] text-[white] uppercase">Don't be shy !</h3>
                        <p className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] lg:py-[20px] py-[10px] lg:pr-[100px]">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                        <div className="flex items-center lg:gap-5 gap-3">
                            <div className="text-[#FFCC2E] lg:text-[36px] text-[24px]">
                                <BiSolidEnvelopeOpen />
                            </div>
                            <div className="">
                                <p className="font-Poppins font-semibold lg:text-[18px] text-[16px] text-[#FFCC2E] uppercase">Mail me</p>
                                <h3 className="font-Poppins font-semibold lg:text-[18px] text-[16px] text-[white]">shahariarmd806@gmail.com</h3>
                            </div>
                        </div>
                        <div className="flex items-center lg:gap-5 gap-3 lg:mt-[20px] mt-[10px]">
                            <div className="text-[#FFCC2E] lg:text-[36px] text-[24px]">
                                <FaPhoneSquareAlt />
                            </div>
                            <div className="">
                                <p className="font-Poppins font-semibold lg:text-[18px] text-[16px] text-[#FFCC2E] uppercase">Call me</p>
                                <h3 className="font-Poppins font-semibold lg:text-[18px] text-[16px] text-[white]">01981028012</h3>
                            </div>
                        </div>
                        <div className="text-white lg:text-[24px] text-[18px] flex items-center lg:gap-5 gap-3 lg:mt-[50px] mt-[30px]">
                            <div className="lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] bg-[#767676] rounded-full lg:pl-[18px] pl-[15px] lg:pt-[18px] pt-[16px] hover:bg-[#FFCC2E] duration-500 ease-in-out">
                                <FaFacebookF />
                            </div>
                            <div className="lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] bg-[#767676] rounded-full lg:pl-[18px] pl-[16px] lg:pt-[18px] pt-[16px] hover:bg-[#FFCC2E] duration-500 ease-in-out">
                                <FaTwitter />
                            </div>
                            <div className="lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] bg-[#767676] rounded-full lg:pl-[18px] pl-[15px] lg:pt-[18px] pt-[16px] hover:bg-[#FFCC2E] duration-500 ease-in-out">
                                <FaInstagram />
                            </div>
                            <div className="lg:w-[60px] w-[50px] lg:h-[60px] h-[50px] bg-[#767676] rounded-full lg:pl-[18px] pl-[15px] lg:pt-[18px] pt-[16px] hover:bg-[#FFCC2E] duration-500 ease-in-out">
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[65%] w-full mt-[30px] lg:mt-0">
                        <div className="flex items-center gap-[30px] lg:gap-0">
                            <div className="lg:w-[25%] w-[30%]">
                                <input type="text" placeholder="Your Name" className="font-Poppins font-medium lg:text-[16px] text-[10px] text-[white] bg-[#767676] outline-none lg:w-[200px] w-[93px] lg:h-[50px] h-[40px] lg:pl-[20px] pl-[10px] rounded-full uppercase" />
                            </div>
                            <div className="lg:w-[25%] w-[30%]">
                                <input type="text" placeholder="Your Name" className="font-Poppins font-medium lg:text-[16px] text-[10px] text-[white] bg-[#767676] outline-none lg:w-[200px] w-[93px] lg:h-[50px] h-[40px] lg:pl-[20px] pl-[10px] rounded-full uppercase" />
                            </div>
                            <div className="lg:w-[25%] w-[30%]">
                                <input type="text" placeholder="Your Subject" className="font-Poppins font-medium lg:text-[16px] text-[10px] text-[white] bg-[#767676] outline-none lg:w-[200px] w-[93px] lg:h-[50px] h-[40px] lg:pl-[20px] pl-[10px] rounded-full uppercase" />
                            </div>
                        </div>
                        <div className="lg:w-[75%] w-full lg:mt-[50px] mt-[30px]">
                            <input type="text" placeholder="Your Massege" className="font-Poppins font-medium lg:text-[16px] text-[10px] text-[white] bg-[#767676] w-full lg:pb-[200px] pb-[100px] pt-[20px] lg:pl-[20px] pl-[10px] rounded-[30px] outline-none uppercase" />
                        </div>
                        <div className="lg:w-[28%] w-[65%] lg:mt-[60px] mt-[30px] relative hover:bg-[#FFCC2E] rounded-full duration-500 ease-in-out">
                            <button className="font-Poppins font-medium lg:text-[18px] text-[14px] text-[white] uppercase border-2 border-[#FFCC2E] rounded-full lg:w-[280px] w-[230px] lg:py-[20px] py-4">About me</button>
                            <div className="absolute top-[50%] translate-y-[-50%] lg:left-[217px] left-[174px] lg:w-[63px] w-[55px] lg:h-[63px] h-[55px] bg-[#FFCC2E] rounded-full lg:text-[24px] text-[18px] pl-[18px] pt-[18px]">
                                <span className="text-[white]"><BsFillSendFill /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact