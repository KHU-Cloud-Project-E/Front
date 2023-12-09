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


`,
`# 음성 녹음
Mimic Recording Studio 의 화면에 출력되는 절차에 따라 녹음을 진행합니다.

이때 처음 몇번은 녹음이 제대로 진행되지 않을 수 있으니 4번정도 까지는 녹음된 응성을 들어 보세요.

Mimic Recording Studio 에는 약간의 버그가 있어서 5문장 이후로는 녹음이 되지 않을수 도 있기 때문에  2 ~ 3문장을 녹음한 후에 페이지를 새로고침 해주시는게 좋습니다.

> 최소 600문장 이상 녹음을 권장합니다.
`,
`
# 음성 데이터 변환
## 데이터 변환
녹음이 완료되었으면 다음 절차를 따라 학습이 가능한 데이터로 변환하실 수 있습니다.

1. Mimic Recording Studio 폴더의 audio_files 폴더 내에 생성된 폴더 이름을 복사합니다. (예시: 627cae73-8cc0-2a19-4943-a17583120d56)
2. Mimic Recording Studio의 run-ljs-converter.bat 파일을 우클릭하고, 메뉴에서 편집 항목을 선택합니다.
3. 다음과 같이, 열린 메모장에서 ljs-converter.exe으로 시작하는 줄의 마지막 부분을 복사해둔 폴더명으로 변경한 후 저장합니다.

\`\`\`plaintext
@echo off
setlocal
chcp 65001
cd /D "%~dp0"
SET PATH=%PATH%;%~dp0ffmpeg
ljs-converter.exe 627cae73-8cc0-2a19-4943-a17583120d56
endlocal
pause
\`\`\`

위 과정을 모두 마치면 Mimic Recording Studio 폴더에 filelists가 생성됩니다.

## 파일 압축
생성된 filelists 폴더를 zip 파일로 압축합니다.

zip 파일은 추후 구글 드라이브에 업로드 하여 음성 학습에 이용하게 됩니다. 
`
]

const content3 = [
`
# 필요한 데이터 업로드
## 필요한 데이터 다운로드
아래 링크를 통해 다음의 항목들을 다운로드하여 준비합니다
- [pt.zip](https://drive.google.com/file/d/142w5clgKDKjhnAvZe4kbRjoTNfUfu4mX/view?usp=drive_link)
- filelists.zip (음성 학습 과정을 통해 준비된 항목)

모든 항목이 준비가 되셨으면 구글 드라이브에 youcaloid 폴더를 생성한 후 위 파일들을 모두 업로드 시킵니다.

`,
`# 절차에 따라 학습
## 코랩 파일 복사 및 접속
- [youcaloid-train.ipynb](https://colab.research.google.com/drive/1L7PiPzEwLJSxaA-YgudmH5RKJ0BJKV_j?usp=sharing)

이후 위 링크에 들어가서 해당 파일을 Drive로 복사해 옵니다

> 주의!! 반드시 내 드라이브의 youcaloid 폴더 안으로 복사해와 실행해야 합니다.

## 절차에 따라 학습
이후 colab에 표기된 절차에 따라 학습을 진행합니다.

> 학습 시간에 따라 모델의 퀄리티가 달라집니다. 적절한 학습을 진행해 주세요.

## 주의사항
- 구글 코랩은 무료로 사용할 수 있는 ai 학습 플랫폼이지만 브라우저가 종료될 시 모든 작업이 종료되고 브라우저를 종료하지 않더라고 몇 시간이 지난 후에 자동으로 작업이 종료됩니다.
- 학습이 완료되지 않았더라도 중간중간 학습을 종료시킨뒤 exp 폴더를 드라이브로 백업하는 작업을 수행해 주세요.
- 차선책으로 코랩의 코드를 이용해서 본인의 컴퓨터로 학습시키거나 코랩의 유로 구독 플랜을 결제할 수 있습니다.
`,
`
# 학습이 완료된 파일 다운로드
## 모델 파일 찾기
학습이 완료된 모델 파일은 내 드라이브의 youcaloid 폴더 안에 exp.zip 형태로 존재합니다.

해당 파일을 다운로드 합니다.
`

]

const content4 = [
`
# zip 파일로 압축
## 파일 용량 줄이기
exp 파일 내부에는 .pth 확장자를 가진 파일들이 여럿 존재합니다.

이중에서 실제로 사용할 pth 파일을 제외하고 모두 삭제해 주세요.

일반적으로 숫자가 가장 높거나 best가 들어간 파일들이 가장 성능이 좋은 경우가 많습니다.

## 압축하기
용량을 줄이는 작업이 끝났으면 업로드를 위해 파일을 다시 재 압축 해주세요.

> 확장자는 반드시 .zip 이어야 합니다.
`,
`
# 모델 업로드
## 업로드 페이지로 이동
모델의 준비가 끝났으면 youcaloid 홈페이지의 Upload 페이지로 이동합니다.

> 이때 반드시 로그인을 한 뒤 다음 작업을 수행합니다. 

## 드래그 앤 드롭
학습된 모델의 zip 파일을 화면의 중앙에 드래그 앤 드롭으로 가져옵니다.

## 모델 이름 입력 및 확인
학습된 모델을 식별하기 위한 이름을 입력한 뒤 업로드를 완료합니다.

## 업로드 된 모델 확인
업로드된 모델은 로그인 후 Model 페이지에서 확인할 수 있습니다.

`
  
]

const content5 = [
`
#youcaloid 봇 초대
## 봇 초대
봇 초대는 메인 페이지의 invite 버튼을 눌러 진행할 수 있습니다,

이때 관리자 권한이 필요하므로 디스코드 채널의 방장이 진행해야 합니다.

## 텍스트 채널 생성
youcaloid는 ttsvoice 채팅 채널의 채팅만을 인식하여 tts 보이스로 변환합니다.

ttsvoice 채팅 채널을 만들어 주세요
`,
`
# 모델 등록 및 사용
## 모델 등록
모델의 등록 및 사용은 모델의 id를 기반으로 이루어집니다. 다음과 같은 절차를 통해 모델 id를 획득하세요
1. 1. youcaloid 홈페이지 로그인
2. 2. model 페이지로 이동
3. 3. 원하는 모델의 코드를 복사

다음으로는 setvoice 등의 명령어를 통해 모델을 등록해 주세요

자세한 사항은 command 페이지를 통해 확인할 수 있습니다.

## 모델 사용
ttsvoice 채널에 채팅을 입력하면 자동으로 현재 사용자가 속해있는 음성채널에 봇이 참여합니다.

> 반드시 voice 채널에 참여해 주세요.

이후 ttsvoice 채널에 채팅을 입력하면 설정한 목소리 대로 봇이 텍스트를 음성으로 바꿔줍니다.


`
]

const content6 = [
`
# 업로드한 모델 관리
## 내가 업로드한 모델 보기
홈페이지에 로그인 한 후 model 페이지에 들어가서 확인할 수 있습니다.

또한 해당 페이지에서 모델 id 복사, 모델 삭제 등의 작업을 수행하실 수 있습니다.

## 모델 수정 및 관리
model 페이지의 수정 버튼을 누르면 상세 수정 페이지로 들어갈 수 있습니다.

해당 페이지에서 모델의 이름 수정, id 재발급, 공유 설정등의 작업을 수행할 수 있습니다.

id 재설정 시 해당 모델을 사용하고 있는 모든 사람들의 모델 사용이 정지되며 새롭게 발급받은 id를 재 등록 해주셔야 하니 주의해 주세요.
`,
`
# 모델 공유 설정
## 모델 공유 옵션 활성화
모델 상세 수정 페이지에서 모델 공유 옵션을 활성화 할 수 있습니다.

이때 주의사항을 모두 반드시 꼭 확인한 후에 모델 공유 옵션을 설정해 주세요.

> 본인 목소리가 아닌 타인의 목소리를 학습시켜 공유 할 시 발생하는 모든 책임은 본인에게 있습니다. 주의해주세요.

아래 항목에서는 모델 설명을 위한 이미지와 텍스트를 등록할 수 있습니다.

모든 변경사항을 저장하기 위해 반드시 최하단의 확인 버튼을 눌러주세요.
`
]

const content7 = [
  `
# gallery 항목에서 모델 찾기
공유 옵션이 활성화된 모델은 gallery에서 확인할 수 있습니다.

# 모델 id 복사하기
원하시는 모델을 찾으셨으면 모델 등록을 위해 id를 복사합니다.
`,
`
# 공유된 모델 사용하기
## 모델 등록
setvoice, setmacro 등의 명령어를 통해 모델을 등록할 수 있습니다. commands 페이지를 참고해 주세요.

## 모델 사용
commands 페이지와 디스코드 봇 초대 및 사용 항목의 모델 등록 및 사용 페이지를 참조해 주세요.
`
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
      options: ["zip 파일로 압축", "모델 업로드"],
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
