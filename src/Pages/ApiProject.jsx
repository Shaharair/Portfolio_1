import React from 'react'
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaCode, FaUser } from "react-icons/fa6";
import { RiExternalLinkLine } from "react-icons/ri";
import ApiRR from "../assets/api.jpg"

const ApiProject = () => {
    return (
        <section className="bg-[black] lg:py-[60px] py-[30px] pb-[110px] lg:pb-0">
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="lg:w-[80%] w-full bg-[#262626] lg:py-[50px] py-[30px] lg:rounded-[50px] rounded-[20px] mt-[100px] lg:mt-0">
                    <h3 className="font-Poppins font-bold lg:text-[48px] text-[30px] text-[#FFCC2E] text-center lg:pb-[50px] pb-[30px]">Api Project</h3>
                    <div className="flex items-center lg:gap-[200px] gap-[20px]">
                        <div className="flex items-center lg:gap-4 gap-2 lg:pl-[160px] pl-[10px]">
                            <div className="text-white lg:text-[24px] text-[18px]">
                                <IoDocumentTextSharp />
                            </div>
                            <div className="">
                                <p className="font-Poppins font-medium lg:text-[16px] text-[12px] text-[white]">Project: Website</p>
                            </div>
                        </div>
                        <div className="flex items-center lg:gap-4 gap-2 lg:pl-[160px] pl-[10px]">
                            <div className="text-white lg:text-[24px] text-[18px]">
                                <FaUser />
                            </div>
                            <div className="">
                                <p className="font-Poppins font-medium lg:text-[16px] text-[12px] text-[white]">Client: Creative IT Institute</p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex items-center lg:gap-[40px] gap-[10px]">
                        <div className="flex items-center lg:gap-4 gap-2 lg:pl-[160px] pl-[10px] lg:pt-[20px] pt-[10px] lg:pb-[50px] pb-[30px]">
                            <div className="text-white lg:text-[24px] text-[18px]">
                                <FaCode />
                            </div>
                            <div className="">
                                <p className="font-Poppins font-medium lg:text-[16px] text-[12px] text-[white]">Languages: HTML5, CSS3, JavaScript</p>
                            </div>
                        </div>
                        <div className="flex items-center lg:gap-4 gap-2 lg:pl-[160px] pl-[10px] lg:pt-[20px] pt-[10px] lg:pb-[50px] pb-[30px]">
                            <div className="text-white lg:text-[24px] text-[18px]">
                                <RiExternalLinkLine />
                            </div>
                            <div className="">
                                <p className="font-Poppins font-medium lg:text-[16px] text-[12px] text-[white]">Preview: shahariarmd806@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img className="lg:w-[900px] lg:h-[500px] lg:mx-[150px] rounded" src={ApiRR} alt="api" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ApiProject