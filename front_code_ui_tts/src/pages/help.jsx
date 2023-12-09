import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import MarkdownComp from "../../markdown/markdown";

const content1 = [`# 소개
## Youcaloid란?
디스코드 음성 채팅방에서 여러분들이 원하는 목소리로 말해주는 TTS 기능을 제공하는 디스코드 봇입니다!
  

## 어떻게 사용하나요?
메인페이지의 초대 버튼을 클릭해 youcaloid를 디스코드 채팅방에 초대 한 뒤 ttsvoice 라는 텍스트 채팅 채널을 개설하여 해당 채널에 텍스트를 입력하여 사용하실 수 있습니다.

자세한 사항은 아래 설명과 상단 네비게이션 바의 Commands 페이지를 참고해 주세요.


## 내 목소리는 어떻게 학습시키나요?
아래 가이드라인을 따라 자신의 목소리를 직접 학습시킬 수 있습니다. 시간과 몸, 그리고 의지만 준비하세요!


## 다른사람의 목소리도 사용할 수 있나요?
물론입니다! 직접 코드를 공유받거나 gallery 페이지에서 코드를 복사해 사용할 수 있습니다.

다만 다른사람의 목소리를 사용해서 모욕을 주거나 기타 문제가 될만한 행동을 할 시 형사처벌의 대상이 될 수 있으니 주의해 주세요.

`
]

const content2 = [`# Mimic Recording Studio 다운로드 및 실행
## Mimic Recording Studio 다운로드
다음 링크를 통해 mimic recording studio를 다운로드 받습니다.

> [Mimic Recording Studio 다운로드](https://drive.google.com/file/d/1qWWBVerugPedNvaUbqYqwPhbIvWXnFxN/view?usp=sharing)


## Mimic Recording Studio 실행
run-server.bat 파일을 실행시켜 서버를 실행시킵니다.

web을 통해 http://127.0.0.1:5000/ 에 접속할 수 있게 됩니다. (이때 반드시 크롬을 통해 접속합니다.)


## 녹음 진행
Mimic Recording Studio 의 화면에 출력되는 절차에 따라 녹음을 진행합니다.

이때 처음 몇번은 녹음이 제대로 진행되지 않을 수 있으니 4번정도 까지는 녹음된 응성을 들어 보세요.

Mimic Recording Studio 에는 약간의 버그가 있어서 5문장 이후로는 녹음이 되지 않을수 도 있기 때문에  2 ~ 3문장을 녹음한 후에 페이지를 새로고침 해주시는게 좋습니다.


## 음성 데이터 변환
녹음이 완료되었으면 다음 절차를 따라 학습이 가능한 데이터로 변환하실 수 있습니다.

1. ㅁㄴㅇㄻㄴㅇㄹ
2. ㅁㄴㅇㄻㄴㅇㄹ
3. ㄻㄴㄹㄴㄷㄹ

`,
`# asaasa


\`\`\`plaintext
! zip -r exp.zip ~/espnet/egs2/kss/tts1/exp/
"! cp -r ~/espnet/egs2/kss/tts1/exp.zip /mnt/c/~~~"
\`\`\`


`
]

const content3 = [

]

const content4 = [
  
]

const content5 = [
  
]

const content6 = [
  
]

const content7 = [
  
]

const contents = [content1, content2, content3, content4, content5, content6, content7];

const Help = () => {
  const [isActive, setIsActive] = useState(1);
  const [tab, setTab] = useState(1);
  const data = [
    {
      title: "시작하기",
      options: ["소개"],
    },
    {
      title: "데이터 셋 준비",
      options: ["Mimic Recording Studio 다운로드 및 실행", "음성 녹음", "음성 데이터 변환"],
    },
    {
      title: "colab으로 학습",
      options: ["필요한 데이터 업로드", "절차에 따라 학습", "학습이 완료된 파일 다운로드"],
    },
    {
      title: "업로드",
      options: ["zip 파일로 압축", "드래그 한 후 드롭"],
    },
    {
      title: "디스코드 봇 초대 및 사용",
      options: ["youcaloid 봇 초대", "모델 등록 및 사용"],
    },
    {
      title: "모델 설정",
      options: ["업로드한 모델 관리", "모델 공유 설정"],
    },
    {
      title: "공유 모델 사용",
      options: ["gallery 항목에서 모델 찾기", "공유된 모델 사용하기"],
    },
  ];

  console.log("isActive = " + isActive + ", Tab = "+tab)

  

  const [markContent, setMarkContent] = useState(contents[0][0]);

  const onClickMenu = (nux)=>{
    setMarkContent(contents[tab-1][nux])
  }

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
                        onClick={() => {setIsActive(nux + 1); onClickMenu(nux);}}
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
            {/* <h1 className="text-[40px] font-[500]">모델 업로드</h1>
         
            <div className="mt-[30px] py-[60px] px-[41px] w-full bg-[#D9D9D9]">
              <p className="text-[15px] font-[500] ">{"! zip -r exp.zip ~/espnet/egs2/kss/tts1/exp/"}</p>
              <p className="text-[15px] font-[500] mt-3 ">{"! cp -r ~/espnet/egs2/kss/tts1/exp.zip /mnt/c/~~~"}</p>
            </div>
          */}

<MarkdownComp markdownContent={markContent}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
