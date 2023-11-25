import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Help = () => {
  const [isActive, setIsActive] = useState(1);
  const [tab, setTab] = useState(7);
  const data = [
    {
      title: "시작하기",
      options: ["zip 파일로 압축", "드래그 한 후 드롭", "이메일 입력"],
    },
    {
      title: "데이터 셋 준비",
      options: ["zip 파일로 압축", "드래그 한 후 드롭", "이메일 입력"],
    },
    {
      title: "step1",
      options: ["zip 파일로 압축", "드래그 한 후 드롭", "이메일 입력"],
    },
    {
      title: "step2",
      options: ["zip 파일로 압축", "드래그 한 후 드롭", "이메일 입력"],
    },
    {
      title: "step3",
      options: ["zip 파일로 압축", "드래그 한 후 드롭", "이메일 입력"],
    },
    {
      title: "step4",
      options: ["zip 파일로 압축", "드래그 한 후 드롭", "이메일 입력"],
    },
    {
      title: "업로드",
      options: ["zip 파일로 압축", "드래그 한 후 드롭", "이메일 입력"],
    },
  ];
  return (
    <div className="min-h-screen bg-[#DDDDDD] w-full ">
      <div className="grid grid-cols-4  h-screen ">
        <div className="bg-[#F5F5F5] overflow-y-scroll  pt-[100px] border-[#808080] border h-screen w-full ">
          <div className="  min-h-[1300px] ">
            {data.map((item, ind) => (
              <div
                key={ind}
                className="border-b px-[34px] py-[12px] border-[#000] w-full"
              >
                <div
                  onClick={() => setTab(tab === ind + 1 ? 0 : ind + 1)}
                  className="flex cursor-pointer py-[12px] items-center justify-between"
                >
                  <h1
                    className={`text-[22px] font-[700] ${
                      tab !== ind + 1 && "text-[#7A7A7A]"
                    }`}
                  >
                    {item.title}
                  </h1>

                  {tab === ind + 1 ? (
                    <IoIosArrowUp className="w-8 h-8 cursor-pointer " />
                  ) : (
                    <IoIosArrowDown className="w-8 h-8 cursor-pointer text-[#7A7A7A] " />
                  )}
                </div>
                {tab === ind + 1 && (
                  <>
                    {item.options?.map((it, nux) => (
                      <div
                        onClick={() => setIsActive(nux + 1)}
                        className={`px-[22px] py-[11px]  text-[18px] font-[500]  hover:bg-[#F1D4FF] cursor-pointer rounded-[10px]  ${
                          isActive == (nux + 1)
                            ? "bg-[#F1D4FF] text-[#000]"
                            : "text-[#7A7A7A]"
                        } `}
                      >
                        {it}
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className=" pt-[100px] px-[42px] overflow-y-scroll  h-screen w-full col-span-3">
          <div className="bg-[#F5F5F5] min-h-[1300px]  px-[60px] pt-[88px] h-full ">
            <h1 className="text-[40px] font-[500]">모델 업로드</h1>
         
            <div className="mt-[30px] py-[60px] px-[41px] w-full bg-[#D9D9D9]">
              <p className="text-[15px] font-[500] ">{"! zip -r exp.zip ~/espnet/egs2/kss/tts1/exp/"}</p>
              <p className="text-[15px] font-[500] mt-3 ">{"! cp -r ~/espnet/egs2/kss/tts1/exp.zip /mnt/c/~~~"}</p>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
