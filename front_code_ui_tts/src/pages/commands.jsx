import React, { useState, useEffect } from "react";

import MarkdownComp from "../../markdown/markdown";

const contents = [
``,
`
# 모델 변경
## 설명
모델 id를 입력해 직접 모델을 변경한다
## 사용법

\`\`\`plaintext
/setvoice <modelid>
\`\`\`

## 사용 예시

\`\`\`plaintext
/setvoice 13124123145123234
\`\`\`
`,
`
# 매크로 추가
## 설명
model id를 편하게 사용할 수 있도록 키워드(매크로)를 등록한다
## 사용법

\`\`\`plaintext
/setmacro <macro number> <modelid>
\`\`\`

## 사용 예시

\`\`\`plaintext
/setmacro 1 14123145123
\`\`\`
`,
`
# 매크로를 사용하여 모델 변경
## 설명
매크로 키워드를 사용해 모델을 변경한다
## 사용법

\`\`\`plaintext
/changevoice <macro number>
\`\`\`

## 사용 예시

\`\`\`plaintext
/changevoice 1
\`\`\`
`,
`
# 매크로 목록 보기
## 설명
등록된 매크로를 확인한다
## 사용법

\`\`\`plaintext
/getmacro
\`\`\`

## 사용 예시

\`\`\`plaintext
/getmacro
\`\`\`
`
]

const Command = () => {
  const [isActive, setIsActive] = useState(1);

  return (
    <div className=" bg-[#DDDDDD] w-full ">
      <div className="grid grid-cols-4 ">
        <div className="bg-[#F5F5F5] overflow-y-scroll  pt-[100px] border-[#808080] border h-screen w-full ">
          <div className=" px-[34px] min-h-[1200px] pt-[37px]">
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
            {/* <Markdown/> */}
           <MarkdownComp markdownContent={contents[isActive]}/>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Command;
