import React from 'react'
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaCode, FaUser } from "react-icons/fa6";
import { RiExternalLinkLine } from "react-icons/ri";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import LandEE from "../assets/land.jpg"
import LandWW from "../assets/land1.jpg"
import LandXX from "../assets/land2.jpg"
import Slider from "react-slick";
import LandOO from "../assets/land3.jpg"

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="font-sans font-bold lg:text-[30px] text-[18px] text-white bg-cyan-600 lg:w-[60px] w-[40px] lg:h-[60px] h-[40px] lg:pl-[16px] pl-[10px] pt-[4px] rounded-full absolute top-[45%] right-0 z-50 translate-y-[-45%]"><FaLongArrowAltRight className="inline-block" /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="font-sans font-bold lg:text-[30px] text-[18px] text-white bg-cyan-600 lg:w-[60px] w-[40px] lg:h-[60px] h-[40px] rounded-full lg:pl-[16px] pl-[10px] pt-[4px] absolute top-[45%] z-50 translate-y-[-45%]" ><FaLongArrowAltLeft className="inline-block" /></div>
    );
}

const Landing = () => {

    var settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]
    };

    return (
        <section className="bg-[black] lg:py-[60px] py-[30px] pb-[77px] lg:pb-0">
            <div className="container px-3 lg:px-0 mx-auto">
                <div className="lg:w-[80%] w-full bg-[#262626] lg:py-[50px] py-[30px] lg:rounded-[50px] rounded-[20px] mt-[100px] lg:mt-0">
                    <h3 className="font-Poppins font-bold lg:text-[48px] text-[30px] text-[#FFCC2E] text-center lg:pb-[50px] pb-[30px]">Landing Project</h3>
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
                        <Slider {...settings}>
                            <div className="">
                                <img className="lg:mx-[300px] text-[black] rounded-[20px]" src={LandOO} alt="land3" />
                            </div>
                            <div className="">
                                <img className="lg:mx-[300px] rounded-[20px]" src={LandEE} alt="land" />
                            </div>
                            <div className="">
                                <img className="lg:mx-[300px] rounded-[20px]" src={LandWW} alt="port" />
                            </div>
                            <div className="">
                                <img className="lg:mx-[300px] rounded-[20px]" src={LandXX} alt="port" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing