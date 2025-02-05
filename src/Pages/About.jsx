import React, { } from 'react'
import { FaBriefcase, FaDownload } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { motion } from "framer-motion";


const About = ({ onclik }) => {

  return (
    <section className="bg-[black] lg:py-[100px] py-[50px]">
        <div className="container px-3 lg:px-0 mx-auto">
          <h3 className="font-Poppins font-bold lg:text-[48px] text-[30px] text-[white] text-center uppercase">About <span className="font-Poppins font-bold lg:text-[48px] text-[30px] text-[#FFCC2E]">me</span></h3>
          <h4 className="font-Poppins font-semibold lg:text-[36px] text-[24px] text-[white] uppercase lg:mt-[100px] mt-[30px]">personal infos</h4>
          <div className="border-b-[1px] border-b-[#767676]">
            <div className="lg:flex items-center justify-between">
              <div className="lg:w-[30%] w-full">
                <div className="lg:py-[20px] py-2">
                  <h3 className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white]">Frist Name : <span className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[#FFCC2E]">MD Shahariar</span></h3>
                </div>
                <div className="">
                  <h4 className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white]">Last Name : <span className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[#FFCC2E]">Shahariar</span></h4>
                </div>
                <div className="lg:py-[20px] py-2">
                  <h2 className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white]">Age : <span className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[#FFCC2E]">21 Years</span></h2>
                </div>
                <div className="lg:pb-[20px] pb-2">
                  <h5 className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white]">Nationality : <span className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[#FFCC2E]">Bangladeshi</span></h5>
                </div>
                <div className="">
                  <h6 className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white]">Freelance : <span className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[#FFCC2E]">Available</span></h6>
                </div>
              </div>
              <div className="lg:w-[30%] w-full">
                <div className="lg:py-[20px] py-2">
                  <h3 className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white]">Address : <span className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[#FFCC2E]">Dhaka Bangladesh</span></h3>
                </div>
                <div className="">
                  <h2 className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white]">Phone : <span className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[#FFCC2E]">01981028012</span></h2>
                </div>
                <div className="lg:py-[20px] py-2">
                  <h4 className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white]">Email : <span className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[#FFCC2E]">shahariarmd806@gmail.com</span></h4>
                </div>
                <div className="lg:pb-[20px] pb-2">
                  <h5 className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white]">Skype : <span className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[#FFCC2E]">Shahariar</span></h5>
                </div>
                <div className="">
                  <h6 className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[white]">Language : <span className="font-Poppins font-semibold lg:text-[18px] text-[14px] text-[#FFCC2E]">Bangla, English</span></h6>
                </div>
              </div>
              <div className="lg:w-[40%] w-full">
                <div className="flex items-center justify-between mt-[30px] lg:mt-0">
                  <div className="w-[48%] border-2 border-[#767676] lg:py-[30px] py-[20px]">
                    <h3 className="font-Poppins font-bold lg:text-[48px] text-[30px] text-[#FFCC2E] lg:pl-[50px] pl-[30px] pb-[10px]">2+</h3>
                    <p className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] lg:pr-[50px] lg:pl-[80px] pl-[50px] uppercase">years of experience</p>
                  </div>
                  <div className="w-[48%] border-2 border-[#767676] lg:py-[30px] py-[20px]">
                    <h3 className="font-Poppins font-bold lg:text-[48px] text-[30px] text-[#FFCC2E] lg:pl-[50px] pl-[30px] pb-[10px]">40+</h3>
                    <p className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] pr-[100px] lg:pl-[80px] pl-[50px] uppercase">Happy customers</p>
                  </div>
                </div>
                <div className="flex items-center justify-between lg:mt-[20px] mt-[15px]">
                  <div className="w-[48%] border-2 border-[#767676] lg:py-[30px] py-[20px]">
                    <h3 className="font-Poppins font-bold lg:text-[48px] text-[30px] text-[#FFCC2E] lg:pl-[50px] pl-[30px] pb-[10px]">30+</h3>
                    <p className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] pr-[50px] lg:pl-[80px] pl-[50px] uppercase">completed projects</p>
                  </div>
                  <div className="w-[48%] border-2 border-[#767676] lg:py-[30px] py-[20px]">
                    <h3 className="font-Poppins font-bold lg:text-[48px] text-[30px] text-[#FFCC2E] lg:pl-[50px] pl-[30px] pb-[10px]">20+</h3>
                    <p className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] pr-[110px] lg:pl-[80px] pl-[50px] uppercase">awards won</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:mb-[100px] mb-[30px]">
              <div className="lg:w-[18%] w-[67%] lg:mt-[60px] mt-[30px] relative hover:bg-[#FFCC2E] rounded-full duration-500 ease-in-out">
                <button className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] uppercase border-2 border-[#FFCC2E] rounded-full lg:w-[280px] w-[230px] lg:py-[20px] py-4">Downloade cv</button>
                <div className="absolute top-[50%] translate-y-[-50%] lg:left-[217px] left-[176px] lg:w-[63px] w-[53px] lg:h-[63px] h-[53px] bg-[#FFCC2E] rounded-full lg:text-[24px] text-[18px] pl-[18px] pt-[18px]">
                  <span className="text-[white]"><FaDownload /></span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-[100px] mt-[30px] border-b-[1px] border-b-[#969696] lg:pb-[100px] pb-[30px]">
            <h3 className="font-Poppins font-bold lg:text-[48px] text-[30px] text-[white] text-center uppercase lg:pb-[100px] pb-[30px]"><span className="font-Poppins font-bold lg:text-[48px] text-[30px] text-[#FFCC2E] uppercase">My</span> Skills</h3>
            <div className="flex items-center justify-between flex-wrap">
              <div className="lg:w-[24%] w-[48%]">
                <div className="w-[80%] lg:border-[20px] border-[15px] border-t-cyan-50 border-[#FFCC2E] rounded-full">
                  <h3 className="font-Poppins font-bold lg:text-[36px] text-[24px] text-[white] lg:py-[100px] py-[30px] text-center">80%</h3>
                </div>
                <h3 className="font-Poppins font-semibold lg:text-[18px] text-[16px] text-[white] lg:pl-[120px] pl-[40px] lg:pt-[50px] pt-[20px] uppercase">Html</h3>
              </div>
              <div className="lg:w-[24%] w-[48%]">
                <div className="w-[80%] lg:border-[20px] border-[15px] border-l-red-500 border-[#FFCC2E] rounded-full">
                  <h3 className="font-Poppins font-bold lg:text-[36px] text-[24px] text-[white] lg:py-[100px] py-[30px] text-center">60%</h3>
                </div>
                <h3 className="font-Poppins font-semibold lg:text-[18px] text-[16px] text-[white] lg:pl-[90px] pl-[16px] lg:pt-[50px] pt-[20px] uppercase">javascript</h3>
              </div>
              <div className="lg:w-[24%] w-[48%] mt-[20px] lg:mt-0">
                <div className="w-[80%] lg:border-[20px] border-[15px] border-b-purple-500 border-[#FFCC2E] rounded-full">
                  <h3 className="font-Poppins font-bold lg:text-[36px] text-[24px] text-[white] lg:py-[100px] py-[30px] text-center">80%</h3>
                </div>
                <h3 className="font-Poppins font-semibold lg:text-[18px] text-[16px] text-[white] lg:pl-[130px] pl-[40px] lg:pt-[50px] pt-[20px] uppercase">Css</h3>
              </div>
              <div className="lg:w-[24%] w-[48%] mt-[20px] lg:mt-0">
                <div className="w-[80%] lg:border-[20px] border-[15px] border-e-orange-500 border-[#FFCC2E] rounded-full">
                  <h3 className="font-Poppins font-bold lg:text-[36px] text-[24px] text-[white] lg:py-[100px] py-[30px] text-center">66%</h3>
                </div>
                <h3 className="font-Poppins font-semibold lg:text-[18px] text-[16px] text-[white] lg:pl-[130px] pl-[50px] lg:pt-[50px] pt-[20px] uppercase">node</h3>
              </div>
            </div>
            <div className="flex items-center justify-between lg:mt-[70px] mt-[30px] flex-wrap">
              <div className="lg:w-[24%] w-[48%]">
                <div className="w-[80%] lg:border-[20px] border-[15px] border-l-green-400 border-[#FFCC2E] rounded-full">
                  <h3 className="font-Poppins font-bold lg:text-[36px] text-[24px] text-[white] lg:py-[100px] py-[30px] text-center">95%</h3>
                </div>
                <h3 className="font-Poppins font-semibold lg:text-[18px] text-[16px] text-[white] lg:pl-[100px] pl-[20px] lg:pt-[50px] pt-[20px] uppercase">Vs Code</h3>
              </div>
              <div className="lg:w-[24%] w-[48%]">
                <div className="w-[80%] lg:border-[20px] border-[15px] border-t-blue-600 border-[#FFCC2E] rounded-full">
                  <h3 className="font-Poppins font-bold lg:text-[36px] text-[24px] text-[white] lg:py-[100px] py-[30px] text-center">70%</h3>
                </div>
                <h3 className="font-Poppins font-semibold lg:text-[18px] text-[16px] text-[white] lg:pl-[90px] pl-[20px] lg:pt-[50px] pt-[20px] uppercase">Bootstrap</h3>
              </div>
              <div className="lg:w-[24%] w-[48%] mt-[20px] lg:mt-0">
                <div className="w-[80%] lg:border-[20px] border-[15px] border-e-teal-400 border-[#FFCC2E] rounded-full">
                  <h3 className="font-Poppins font-bold lg:text-[36px] text-[24px] text-[white] lg:py-[100px] py-[30px] text-center">65%</h3>
                </div>
                <h3 className="font-Poppins font-semibold lg:text-[18px] text-[16px] text-[white] lg:pl-[70px] pl-[15px] lg:pt-[50px] pt-[20px] uppercase">Tailwind css</h3>
              </div>
              <div className="lg:w-[24%] w-[48%] mt-[20px]">
                <div className="w-[80%] lg:border-[20px] border-[15px] border-b-fuchsia-700 border-[#FFCC2E] rounded-full">
                  <h3 className="font-Poppins font-bold lg:text-[36px] text-[24px] text-[white] lg:py-[100px] py-[30px] text-center">70%</h3>
                </div>
                <h3 className="font-Poppins font-semibold lg:text-[18px] text-[16px] text-[white] lg:pl-[120px] pl-[40px] lg:pt-[50px] pt-[20px] uppercase">React</h3>
              </div>
            </div>
          </div>
          <div className="lg:mt-[100px] mt-[30px]">
            <h3 className="font-Poppins font-bold lg:text-[48px] text-[30px] text-[white] uppercase text-center pb-[100px]">Experience & Education</h3>
            <div className="lg:flex items-center justify-between">
              <div className="lg:w-[48%] w-full">
                <div className="lg:flex lg:gap-4">
                  <div className="font-Poppins font-semibold lg:text-[24px] text-[18px] text-[white] lg:w-[90px] w-[50px] lg:h-[70px] h-[50px] bg-[#FFCC2E] rounded-full lg:pl-[23px] pl-[15px] lg:pt-[23px] pt-[15px]">
                    <FaBriefcase />
                  </div>
                  <div className="mt-[20px] lg:mt-0">
                    <h4 className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] uppercase">2024 - Present</h4>
                    <h3 className="font-Poppins font-bold lg:text-[24px] text-[16px] text-[white] uppercase pt-[10px]">Back-End Developer - Creative it institute</h3>
                    <p className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] pt-[10px] lg:pr-[200px]">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,</p>
                  </div>
                </div>
                <div className="lg:flex lg:gap-4 lg:mt-[50px] mt-[30px]">
                  <div className="font-Poppins font-semibold lg:text-[24px] text-[18px] text-[white] lg:w-[90px] w-[50px] lg:h-[70px] h-[50px] bg-[#FFCC2E] rounded-full lg:pl-[23px] pl-[15px] lg:pt-[23px] pt-[15px]">
                    <FaBriefcase />
                  </div>
                  <div className="mt-[20px] lg:mt-0">
                    <h4 className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] uppercase">2023 - 2024</h4>
                    <h3 className="font-Poppins font-bold lg:text-[24px] text-[16px] text-[white] uppercase pt-[10px]"> Web Designer - Themeforest / Figma</h3>
                    <p className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] pt-[10px] lg:pr-[200px]">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,</p>
                  </div>
                </div>
                <div className="lg:flex lg:gap-4 lg:mt-[50px] mt-[30px]">
                  <div className="font-Poppins font-semibold lg:text-[24px] text-[18px] text-[white] lg:w-[90px] w-[50px] lg:h-[70px] h-[50px] bg-[#FFCC2E] rounded-full lg:pl-[23px] pl-[15px] lg:pt-[23px] pt-[15px]">
                    <FaBriefcase />
                  </div>
                  <div className="mt-[20px] lg:mt-0">
                    <h4 className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] uppercase">2020 - 2023</h4>
                    <h3 className="font-Poppins font-bold lg:text-[24px] text-[18px] text-[white] uppercase pt-[10px]">Consultant - Videohive</h3>
                    <p className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] pt-[10px] lg:pr-[200px]">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-[48%] w-full mt-[30px] lg:mt-0">
                <div className="lg:flex lg:gap-4">
                  <div className="font-Poppins font-semibold lg:text-[24px] text-[18px] text-[white] lg:w-[90px] w-[50px] lg:h-[70px] h-[50px] bg-[#FFCC2E] rounded-full lg:pl-[23px] pl-[15px] lg:pt-[23px] pt-[15px]">
                    <FaGraduationCap />
                  </div>
                  <div className="mt-[20px] lg:mt-0">
                    <h4 className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] uppercase">2024 - Present</h4>
                    <h3 className="font-Poppins font-bold lg:text-[24px] text-[18px] text-[white] uppercase pt-[10px]">Honours - Bangladesh National University</h3>
                    <p className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] pt-[10px] lg:pr-[200px]">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,</p>
                  </div>
                </div>
                <div className="lg:flex lg:gap-4 lg:mt-[50px] mt-[30px]">
                  <div className="font-Poppins font-semibold lg:text-[24px] text-[18px] text-[white] lg:w-[90px] w-[50px] lg:h-[70px] h-[50px] bg-[#FFCC2E] rounded-full lg:pl-[23px] pl-[15px] lg:pt-[23px] pt-[15px]">
                    <FaGraduationCap />
                  </div>
                  <div className="mt-[20px] lg:mt-0">
                    <h4 className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] uppercase">2022</h4>
                    <h3 className="font-Poppins font-bold lg:text-[24px] text-[18px] text-[white] uppercase pt-[10px]">HSC - Nalta A.M.R College</h3>
                    <p className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] pt-[10px] lg:pr-[200px]">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,</p>
                  </div>
                </div>
                <div className="lg:flex lg:gap-4 lg:mt-[50px] mt-[30px]">
                  <div className="font-Poppins font-semibold lg:text-[24px] text-[18px] text-[white] lg:w-[90px] w-[50px] lg:h-[70px] h-[50px] bg-[#FFCC2E] rounded-full lg:pl-[23px] pl-[15px] lg:pt-[23px] pt-[15px]">
                    <FaGraduationCap />
                  </div>
                  <div className="mt-[20px] lg:mt-0">
                    <h4 className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] uppercase">2020</h4>
                    <h3 className="font-Poppins font-bold lg:text-[24px] text-[18px] text-[white] uppercase pt-[10px]">SSC - Bangladesh High School</h3>
                    <p className="font-Poppins font-medium lg:text-[16px] text-[14px] text-[white] pt-[10px] lg:pr-[200px]">Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About