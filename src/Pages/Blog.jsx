import React, { } from 'react'
import BlogRR from "../assets/blog.jpg"
import BlogCC from "../assets/blog1.jpg"
import BlogEE from "../assets/blog2.jpg"
import BlogWW from "../assets/blog3.jpg"
import BlogII from "../assets/blog4.jpg"
import BlogNN from "../assets/blog5.jpg"
import BlogXX from "../assets/blog6.jpg"
import BlogFF from "../assets/blog7.jpg"
import BlogMM from "../assets/blog8.jpg"
import Slider from "react-slick";
import { FaLongArrowAltRight, FaLongArrowAltLeft,FaUser,FaCalendarAlt,FaComments } from "react-icons/fa";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="font-sans font-bold lg:text-[30px] text-[18px] text-white bg-cyan-600 lg:w-[60px] w-[40px] lg:h-[60px] h-[40px] lg:pl-[16px] pl-[10px] pt-[4px] rounded-full absolute top-[50%] right-0 z-50 translate-y-[-50%]"><FaLongArrowAltRight className="inline-block" /></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="font-sans font-bold lg:text-[30px] text-[18px] text-white bg-cyan-600 lg:w-[60px] w-[40px] lg:h-[60px] h-[40px] rounded-full lg:pl-[16px] pl-[10px] pt-[4px] absolute top-[50%] z-50 translate-y-[-50%]" ><FaLongArrowAltLeft className="inline-block" /></div>
  );
}

const Blog = () => {

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
    <section className="bg-[black] lg:py-[100px] py-[30px]">
      <div className="container px-3 lg:px-0 mx-auto">
        <h3 className="font-Poppins font-bold lg:text-[48px] text-[30px] text-[white] text-center uppercase lg:pb-[100px] pb-[30px]">My <span className="font-Poppins font-bold lg:text-[48px] text-[30px] text-[#FFCC2E]">Blog</span></h3>
        <div className="flex justify-between">
          <div className="lg:w-[80%] w-full">
            <div className="lg:flex items-center justify-between">
              <div className="lg:w-[30%] w-full">
                <div className="border-b-[5px] border-b-[#FFCC2E] hover:pl-6 duration-300 ease-in-out">
                  <img src={BlogRR} alt="" />
                </div>
                <div className="bg-[#262626]">
                  <h3 className="font-Poppins font-bold lg:text-[23px] text-[16px] text-[white] py-[20px] pl-[20px] hover:text-[#FFCC2E] duration-500 ease-in-out">How to Own Your Audience by Creating an Email List</h3>
                  <p className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] pl-[20px] lg:pr-[50px] pb-[50px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                </div>
              </div>
              <div className="lg:w-[30%] w-full">
                <div className="border-b-[5px] border-b-[#FFCC2E] hover:pl-6 duration-300 ease-in-out">
                  <img src={BlogII} alt="" />
                </div>
                <div className="bg-[#262626]">
                  <h3 className="font-Poppins font-bold lg:text-[23px] text-[16px] text-[white] py-[20px] pl-[20px] hover:text-[#FFCC2E] duration-500 ease-in-out">Top 10 Toolkits for Deep Learning in 2023</h3>
                  <p className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] pl-[20px] lg:pr-[50px] pb-[50px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                </div>
              </div>
              <div className="lg:w-[30%] w-full">
                <div className="border-b-[5px] border-b-[#FFCC2E] hover:pl-6 duration-300 ease-in-out">
                  <img src={BlogCC} alt="" />
                </div>
                <div className="bg-[#262626]">
                  <h3 className="font-Poppins font-bold lg:text-[23px] text-[16px] text-[white] py-[20px] pl-[20px] hover:text-[#FFCC2E] duration-500 ease-in-out">Everything You Need to Know About Web Accessibility</h3>
                  <p className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] pl-[20px] lg:pr-[50px] pb-[50px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                </div>
              </div>
            </div>
            <div className="lg:flex items-center justify-between mt-[60px]">
              <div className="lg:w-[30%] w-full">
                <div className="border-b-[5px] border-b-[#FFCC2E] hover:pl-6 duration-300 ease-in-out">
                  <img src={BlogEE} alt="" />
                </div>
                <div className="bg-[#262626]">
                  <h3 className="font-Poppins font-bold lg:text-[23px] text-[16px] text-[white] py-[20px] pl-[20px] hover:text-[#FFCC2E] duration-500 ease-in-out">How to Inject Humor & Comedy Into Your Brand</h3>
                  <p className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] pl-[20px] lg:pr-[50px] pb-[50px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                </div>
              </div>
              <div className="lg:w-[30%] w-full">
                <div className="border-b-[5px] border-b-[#FFCC2E] hover:pl-6 duration-300 ease-in-out">
                  <img src={BlogNN} alt="" />
                </div>
                <div className="bg-[#262626]">
                  <h3 className="font-Poppins font-bold lg:text-[23px] text-[16px] text-[white] py-[20px] pl-[20px] hover:text-[#FFCC2E] duration-500 ease-in-out">Women in Web Design: How To Achieve Success</h3>
                  <p className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] pl-[20px] lg:pr-[50px] pb-[50px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                </div>
              </div>
              <div className="lg:w-[30%] w-full">
                <div className="border-b-[5px] border-b-[#FFCC2E] hover:pl-6 duration-300 ease-in-out">
                  <img src={BlogWW} alt="" />
                </div>
                <div className="bg-[#262626]">
                  <h3 className="font-Poppins font-bold lg:text-[23px] text-[16px] text-[white] py-[20px] pl-[20px] hover:text-[#FFCC2E] duration-500 ease-in-out">Evergreen versus topical content: An overview</h3>
                  <p className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] pl-[20px] lg:pr-[50px] pb-[50px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mt-[100px] mt-[30px]">
          <div className="lg:w-[80%] w-full lg:pl-[200px]">
            <Slider {...settings}>
              <div className="">
                <img src={BlogXX} alt="" />
              </div>
              <div className="">
                <img src={BlogFF} alt="" />
              </div>
              <div className="">
                <img src={BlogMM} alt="" />
              </div>
            </Slider>
            <div className="">
              <div className="flex items-center lg:gap-[50px] gap-[10px] lg:py-[20px] py-[10px]">
                <div className="flex items-center lg:gap-3 gap-2">
                    <div className="text-[white] lg:text-[24px] text-[16px]">
                      <FaUser/>
                    </div>
                    <h3 className="font-Poppins font-medium lg:text-[18px] text-[12px] text-[white] hover:text-[#FFCC2E] duration-500 ease-in-out">By Admin</h3>
                </div>
                <div className="flex items-center lg:gap-3 gap-2">
                  <div className="text-[white] lg:text-[24px] text-[16px]">
                    <FaCalendarAlt/>
                  </div>
                  <h3 className="font-Poppins font-medium lg:text-[18px] text-[12px] text-[white] hover:text-[#FFCC2E] duration-500 ease-in-out">14 Nov, 2023</h3>
                </div>
                <div className="flex items-center lg:gap-3 gap-2">
                  <div className="text-[white] lg:text-[24px] text-[16px]">
                    <FaComments/>
                  </div>
                  <h3 className="font-Poppins font-medium lg:text-[18px] text-[12px] text-[white] hover:text-[#FFCC2E] duration-500 ease-in-out">Comments (3)</h3>
                </div>
              </div>
              <h3 className="font-Poppins font-bold lg:text-[48px] text-[18px] text-[white] hover:text-[#FFCC2E] duration-500 ease-in-out">The Role of Technology in Modern Logistics Management</h3>
              <p className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] lg:pr-[200px] pt-[20px]">Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit Read more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog