import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-[#F3F6Fa]">
      <div className=" w-[85%] flex flex-wrap mx-auto border-b py-10 md-lg:pb-10 sm:pb-6">
        <div className=" w-3/12 lg:w-4/12 sm:w-full">
          <div className=" flex flex-col gap-3">
            <img
              className=" w-[190px] h-[70px]"
              src="/images/logo.png"
              alt="logo"
            />
            <ul className=" flex flex-col gap-2 text-slate-600">
              <li>Address : Rajshai,Bolia</li>
              <li>Phone : 654434556643</li>
              <li>Email : vakar@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className=" w-5/12 lg:w-8/12 sm:w-full">
          <div className=" flex justify-center sm:justify-start sm:mt-6 w-full">
            <div>
              <h2 className=" font-bold text-lg mb-2">Useful Links</h2>
              <div className=" flex justify-between gap-[80px] lg:gap-[40px]">
                <ul className=" flex flex-col gap-2 text-slate-600 text-sm">
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">About Our Shop</Link>
                  </li>
                  <li>
                    <Link to="#">Delivery Inforation</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Blog</Link>
                  </li>
                </ul>
                <ul className=" flex flex-col gap-2 text-slate-600 text-sm">
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">About Our Shop</Link>
                  </li>
                  <li>
                    <Link to="#">Delivery Inforation</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-4/12 lg:w-full lg:mt-6">
          <div className=" w-full flex flex-col justify-start gap-5">
            <h2 className=" font-bold text-lg mb-2">Joint Our Comunity</h2>
            <span>
              Get E-mail updates about our latest shop and spciel offer
            </span>
            <div className=" h-[50px] w-full bg-white border relative">
              <input
                placeholder="Enter your mail"
                className=" h-full bg-transparent w-full px-3 outline-none"
                type="text"
              />
              <button className=" h-full absolute right-0 bg-indigo-500 text-white uppercase px-4 font-bold text-sm">
                Sbuscribe
              </button>
            </div>
            <ul className=" flex justify-start items-center gap-3">
              <li>
                <a
                  className=" w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-white rounded-full"
                  href="#"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  className=" w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-white rounded-full"
                  href="#"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a
                  className=" w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-white rounded-full"
                  href="#"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  className=" w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-white rounded-full"
                  href="#"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" w-[85%] flex flex-wrap justify-center items-center text-slate-600 mx-auto py-5 text-center text-sm">
        <span>
          Copyright &#xA9;2023 All rights reserved by | made by{" "}
          <a className=" text-blue-500 underline" href="#">
            @Vaskr Ghosh
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
