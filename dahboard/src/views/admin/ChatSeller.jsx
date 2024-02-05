import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const ChatSeller = () => {
  const sellerId = 1;
  const [show, setShow] = useState(false);
  return (
    <div className=" px-2 lg:px-7 py-5">
      <div className=" w-full bg-[#283046] px-4 py-4 rounded-md h-[calc(100vh-140px)]">
        <div className=" flex w-full h-full relative">
          <div
            className={`w-[280px] h-full absolute z-10 ${
              show ? "-left-[16px]" : "-left-[336px]"
            } md:left-0 md:relative transition-all`}
          >
            <div className=" w-full h-[calc(100vh-177px)] bg-[#252b3b] md:bg-transparent overflow-y-auto">
              <div className=" flex text-xl justify-between items-center p-4 md:p-0 md:px-0 md:pb-3 text-white">
                <h2>Sellers</h2>
                <span
                  onClick={() => setShow(!show)}
                  className=" block cursor-pointer md:hidden"
                >
                  <IoMdClose />
                </span>
              </div>
              <div
                className={` h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-md cursor-pointer bg-slate-700`}
              >
                <div className=" relative">
                  <img
                    className=" w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                    src="/images/admin.jpg"
                    alt="sellerimage"
                  />
                  <div className=" w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>
                <div className=" flex justify-center items-start flex-col w-full">
                  <div className=" flex justify-between items-center w-full">
                    <h2 className=" text-base font-semibold">Vaskar gh</h2>
                  </div>
                </div>
              </div>
              <div
                className={` h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-md cursor-pointer`}
              >
                <div className=" relative">
                  <img
                    className=" w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                    src="/images/admin.jpg"
                    alt="sellerimage"
                  />
                  <div className=" w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>
                <div className=" flex justify-center items-start flex-col w-full">
                  <div className=" flex justify-between items-center w-full">
                    <h2 className=" text-base font-semibold">Vaskar gh</h2>
                  </div>
                </div>
              </div>
              <div
                className={` h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-md cursor-pointer`}
              >
                <div className=" relative">
                  <img
                    className=" w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full"
                    src="/images/admin.jpg"
                    alt="sellerimage"
                  />
                  <div className=" w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                </div>
                <div className=" flex justify-center items-start flex-col w-full">
                  <div className=" flex justify-between items-center w-full">
                    <h2 className=" text-base font-semibold">Vaskar gh</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full md:w-[calc(100%-200px)] md:pl-4">
            <div className=" flex justify-between items-center">
              {sellerId && (
                <div className=" flex justify-start items-center gap-3">
                  <div className=" relative">
                    <img
                      className=" w-[42px] h-[42px] border-green-500 border-2 max-w-[38px] p-[2px] rounded-full"
                      src="/images/admin.jpg"
                      alt="sellerimage"
                    />
                    <div className=" w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0"></div>
                  </div>
                  <h2 className=" text-base font-semibold">Vaskar gh</h2>
                </div>
              )}
              <div
                onClick={() => setShow(!show)}
                className=" w-[35px] flex md:hidden h-[35px] rounded-md bg-slate-500 shadow-lg hover:shadow-blue-500/50 justify-center cursor-pointer items-center text-white"
              >
                <span>
                  <FaList />
                </span>
              </div>
            </div>
            <div className=" py-4 ">
              <div className=" bg-slate-800 h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto">
                <div className=" w-full flex justify-start items-center">
                  <div className=" flex justify-start items-start gap-2 md:px-3 py-2 max-w-[85%]">
                    <div>
                      <img
                        className=" w-[38px] h-[38px] border-white-500 border-2 max-w-[38px] p-[3px] rounded-full"
                        src="/images/admin.jpg"
                        alt="sellerimage"
                      />
                    </div>
                    <div className=" flex justify-center items-center flex-col w-full bg-orange-500 shadow-lg shadow-orange-500/50 text-white px-2 py-1 rounded-sm">
                      <span>How are you?</span>
                    </div>
                  </div>
                </div>
                <div className=" w-full flex justify-end items-center">
                  <div className=" flex justify-start items-start gap-2 md:px-3 py-2 max-w-[85%]">
                    <div className=" flex justify-center items-center flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white px-2 py-1 rounded-sm">
                      <span>How are you?</span>
                    </div>
                    <div>
                      <img
                        className=" w-[38px] h-[38px] border-white-500 border-2 max-w-[38px] p-[3px] rounded-full"
                        src="/images/admin.jpg"
                        alt="sellerimage"
                      />
                    </div>
                  </div>
                </div>
                <div className=" w-full flex justify-start items-center">
                  <div className=" flex justify-start items-start gap-2 md:px-3 py-2 max-w-[85%]">
                    <div>
                      <img
                        className=" w-[38px] h-[38px] border-white-500 border-2 max-w-[38px] p-[3px] rounded-full"
                        src="/images/admin.jpg"
                        alt="sellerimage"
                      />
                    </div>
                    <div className=" flex justify-center items-center flex-col w-full bg-orange-500 shadow-lg shadow-orange-500/50 text-white px-2 py-1 rounded-sm">
                      <span>How are you?</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className=" flex gap-3">
              <input
                type="text"
                placeholder="input your message"
                className=" w-full flex justify-between px-2 border border-slate-700 items-center py-[5px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6]"
              />
              <button className=" bg-cyan-500 shadow-lg hover:shadow-cyan-500/50 text-semibold w-[75px] h-[35px] rounded-md flex justify-center items-center">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSeller;
