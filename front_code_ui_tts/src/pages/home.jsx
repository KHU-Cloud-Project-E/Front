import BigLogo from '../assets/biglogo.png'
import HomeSvg from '../component/homesvg'

export default function home() {

  const onClickInvite = () =>{
    window.open("https://discord.com/api/oauth2/authorize?client_id=1093057746586308619&permissions=8&scope=bot")
  }
  return (
    <div>
      <div className='flex justify-center items-center h-[85vh] bg-[#D9D9D9]'>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-fit rounded-full bg-[#F2D8FF]'>
            <img src={BigLogo} className='w-56 px-2' alt='' />
          </div>
          <div className='text-center space-y-2 mt-3 text-[#6A6A6A]'>
            <h1 className='text-4xl'>Enjoy my voice ttsbot</h1>
            <p className='text-xl'>
              Put your AI voice, talk to your friends in the voicemade by tts
              bot{' '}
            </p>
          </div>
          <button className='btn mt-7' onClick={()=>onClickInvite()}>Invite to server</button>
        </div>
      </div>
      <div className='bg-[#B6B6B6] text-[#6A6A6A] flex items-center flex-col py-12 text-xl'>
        <p>Enjoying the Voice Model of Many People</p>
        <HomeSvg />
        <div className='flex flex-col items-center'>
          <p>Enjoying the Voice Model of Many People</p>
          <p>Use this tts bot to talk when you can not speak!</p>
        </div>
        <div className='mt-24'>
          <p>Create and apply your own voice ai model!</p>
        </div>
      </div>
    </div>
  )
}
