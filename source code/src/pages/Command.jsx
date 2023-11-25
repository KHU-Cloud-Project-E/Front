import React, { useState } from "react";

const Command = () => {
  const [isActive, setIsActive] = useState(1);
  return (
    <div className="min-h-screen bg-[#DDDDDD] w-full ">
      <div className="grid grid-cols-4  h-screen ">
        <div className="bg-[#F5F5F5] overflow-y-scroll  pt-[100px] border-[#808080] border h-screen w-full ">
          <div className=" px-[34px] min-h-[1300px] pt-[37px]">
            <h1 className="text-[22px] font-[700]">명령어</h1>

            <div
              onClick={() => setIsActive(1)}
              className={`px-[22px] py-[11px] mt-[18px] text-[18px] font-[500]  hover:bg-[#F1D4FF] cursor-pointer rounded-[10px]  ${
                isActive == 1 ? "bg-[#F1D4FF] text-[#000]" : "text-[#7A7A7A]"
              } `}
            >
              모델 변경
            </div>
            <div
              onClick={() => setIsActive(2)}
              className={`px-[22px] py-[11px] mt-[18px] text-[18px] font-[500]  hover:bg-[#F1D4FF] cursor-pointer rounded-[10px]  ${
                isActive == 2 ? "bg-[#F1D4FF] text-[#000]" : "text-[#7A7A7A]"
              } `}
            >
              매크로 추가
            </div>
            <div
              onClick={() => setIsActive(3)}
              className={`px-[22px] py-[11px] mt-[18px] text-[18px] font-[500]  hover:bg-[#F1D4FF] cursor-pointer rounded-[10px]  ${
                isActive == 3 ? "bg-[#F1D4FF] text-[#000]" : "text-[#7A7A7A]"
              } `}
            >
              매크로를 사용하여 모델 변경
            </div>
            <div
              onClick={() => setIsActive(4)}
              className={`px-[22px] py-[11px] mt-[18px] text-[18px] font-[500]  hover:bg-[#F1D4FF] cursor-pointer rounded-[10px]  ${
                isActive == 4 ? "bg-[#F1D4FF] text-[#000]" : "text-[#7A7A7A]"
              } `}
            >
              매크로 목록 보기
            </div>
          </div>
        </div>
        <div className=" pt-[100px] px-[42px] overflow-y-scroll  h-screen w-full col-span-3">
          <div className="bg-[#F5F5F5] min-h-[1300px]  px-[60px] pt-[88px] h-full ">
            <h1 className="text-[40px] font-[500]">모델 변경</h1>
            <h1 className="text-[30px] mt-[42px] font-[500]">설명</h1>
            <p className="text-[15px] mt-[28px]">
              모델 id를 입력해 직접 모델을 변경한다{" "}
            </p>
            <h1 className="text-[30px] mt-[42px] font-[500]">설명</h1>
            <div className="mt-[30px] py-[60px] px-[41px] w-full bg-[#D9D9D9]">
              <p className="text-[15px] ">{"/setmodel <modelid>"}</p>
            </div>
            <h1 className="text-[30px] mt-[42px] font-[500]">사용 예시</h1>
            <div className="mt-[30px] py-[60px] px-[41px] w-full bg-[#D9D9D9]">
              <p className="text-[15px] ">{"/setmodel 13124123145123234"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Command;
