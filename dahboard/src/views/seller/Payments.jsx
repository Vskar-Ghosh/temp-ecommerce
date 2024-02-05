import React, { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

import { BsCurrencyDollar } from "react-icons/bs";

import { Link } from "react-router-dom";

function handleOnWheel(deltaY) {
  console.log("handleOnWheel", deltaY);
}

const outerElementType = forwardRef((proops, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...proops} />
));

const Payments = () => {
  const Row = ({ index, style }) => {
    return (
      <div style={style} className=" flex text-sm">
        <div className=" w-[25%] p-2 whitespace-nowrap">{index + 1} </div>
        <div className=" w-[25%] p-2 whitespace-nowrap">$544 </div>
        <div className=" w-[25%] p-2 whitespace-nowrap">
          <span className=" py-[1px] px-[5px] bg-slate-700 text-blue-500 rounded-md text-xs">
            pending
          </span>{" "}
        </div>
        <div className=" w-[25%] p-2 whitespace-nowrap">12 june 2023 </div>
      </div>
    );
  };
  return (
    <div className=" px-2 md:px-7 py-5">
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        <div className=" flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className=" flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className=" text-lg font-bold">$6566</h2>
            <span className=" text-sm font-normal">Total Sales</span>
          </div>
          <div className=" w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className=" text-[#28c76f]" />
          </div>
        </div>
        <div className=" flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className=" flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className=" text-lg font-bold">#2660</h2>
            <span className=" text-sm font-normal">Avaiable Amount</span>
          </div>
          <div className=" w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className=" text-[#cd00e8]" />
          </div>
        </div>

        <div className=" flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className=" flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className=" text-lg font-bold">$1222</h2>
            <span className=" text-sm font-normal">Withdrawal Amount</span>
          </div>
          <div className=" w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className=" text-[#7367f0]" />
          </div>
        </div>
        <div className=" flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className=" flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className=" text-lg font-bold">$112</h2>
            <span className=" text-sm font-normal">Pending Amount</span>
          </div>
          <div className=" w-[46px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className=" text-[#00cfe8]" />
          </div>
        </div>
      </div>

      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-3 pb-4">
        <div className=" bg-[#283046] text-[#d0d2d6] rounded-md p-5">
          <h2 className=" text-lg">Send Request</h2>
          <div className=" py-5">
            <form>
              <div className=" flex gap-3 flex-wrap">
                <input
                  min={0}
                  className=" md:w-[78%] px-4 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
                  type="number"
                  name="amount"
                />
                <button className=" bg-indigo-500 hover:shadow-indigo-500/50 hover:shadow-lg rounded-sm px-4 text-sm py-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <h2 className=" text-lg pb-4">Pending Request</h2>
          <div className=" w-full overflow-x-auto">
            <div className=" flex bg-[#161d31] uppercase text-xs min-w-[340px]">
              <div className=" w-[25%] p-2">No</div>
              <div className=" w-[25%] p-2">Amount</div>
              <div className=" w-[25%] p-2">Status</div>
              <div className=" w-[25%] p-2">Date</div>
            </div>
            {
              <List
                style={{ minWidth: "340px", overflowX: "hidden" }}
                className="List"
                height={350}
                itemCount={100}
                itemSize={35}
                outerElementType={outerElementType}
              >
                {Row}
              </List>
            }
          </div>
        </div>
        <div className=" bg-[#283046] text-[#d0d2d6] rounded-md p-5">
          <h2 className=" text-lg pb-4">Success Withdrawal</h2>
          <div className=" w-full overflow-x-auto">
            <div className=" flex bg-[#161d31] uppercase text-xs min-w-[340px]">
              <div className=" w-[25%] p-2">No</div>
              <div className=" w-[25%] p-2">Amount</div>
              <div className=" w-[25%] p-2">Status</div>
              <div className=" w-[25%] p-2">Date</div>
            </div>
            {
              <List
                style={{ minWidth: "340px", overflowX: "hidden" }}
                className="List"
                height={350}
                itemCount={100}
                itemSize={35}
                outerElementType={outerElementType}
              >
                {Row}
              </List>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
