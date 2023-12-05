import React, { useState } from "react";

const Donation = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="min-h-screen bg-[#DDDDDD] w-full ">
      <div className="bg-[#EFEFEF] min-h-screen pt-[100px] mx-[100px] h-full px-[50px] ">
        <h1 className="text-[40px] my-[60px] font-[500] pl-[50px]">Donation</h1>
        <div
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          className="w-full rounded-[20px] bg-white  p-[100px]"
        >
          <div className="flex items-center justify-center gap-[20px]">
            <div
              onClick={() => setActive(1)}
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
              className={`${
                active === 1 ? "bg-[#A532DB] text-white" : "bg-[#EAEAEA]"
              } hover:bg-[#A532DB] hover:text-white cursor-pointer p-[24px] text-[30px] font-[500] rounded-[20px]`}
            >
              $3
            </div>
            <div
              onClick={() => setActive(2)}
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
              className={`${
                active === 2 ? "bg-[#A532DB] text-white" : "bg-[#EAEAEA]"
              } hover:bg-[#A532DB] hover:text-white cursor-pointer p-[24px] text-[30px] font-[500] rounded-[20px]`}
            >
              $5
            </div>
            <div
              onClick={() => setActive(3)}
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
              className={`${
                active === 3 ? "bg-[#A532DB] text-white" : "bg-[#EAEAEA]"
              } hover:bg-[#A532DB] hover:text-white cursor-pointer p-[24px] text-[30px] font-[500] rounded-[20px]`}
            >
              $10
            </div>
            <div
              onClick={() => setActive(4)}
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
              className={`${
                active === 4 ? "bg-[#A532DB] text-white" : "bg-[#EAEAEA]"
              } hover:bg-[#A532DB] hover:text-white cursor-pointer p-[24px] text-[30px] font-[500] rounded-[20px]`}
            >
              $25
            </div>
            <div
              onClick={() => setActive(5)}
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
              className={`${
                active === 5 ? "bg-[#A532DB] text-white" : "bg-[#EAEAEA]"
              } hover:bg-[#A532DB] hover:text-white cursor-pointer p-[24px] text-[30px] font-[500] rounded-[20px]`}
            >
              $50
            </div>
            <input
              className="border p-[24px] text-[30px] rounded-[20px] outline-none"
              placeholder="Other..."
              type="text"
            />
          </div>
          <div className="flex items-center justify-center w-full mt-[100px] ">
            <button className="text-white rounded-[30px] py-2 px-[30px] font-[700] bg-[#CF69FF] text-[30px]">
              기부하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
