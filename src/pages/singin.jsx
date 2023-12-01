import Google from '../assets/google.png'
import Kakao from '../assets/kakao.png'
import Never from '../assets/never.png'

export default function singin() {
  return (
    <div className='w-full h-[90vh] bg-[#D9D9D9] flex justify-center items-center'>
      <div className='w-full max-w-5xl mx-auto h-[90vh] bg-[#EFEFEF] flex justify-center items-center'>
        <div className='text-center'>
          <h2 className='text-3xl font-medium mb-3'>Sign In</h2>
          <div className='space-y-3 mt-10'>
            <button className='px-8 py-4 shadow-md rounded-lg flex justify-center items-center gap-3 bg-white font-[500] w-full'>
              <img src={Google} className='w-6' />
              google로 login
            </button>
            <button className='px-8 py-4 shadow-md rounded-lg flex justify-center items-center gap-3 bg-white font-[500] w-full'>
              <img src={Never} className='w-6' />
              naver로 login
            </button>
            <button className='px-8 py-4 shadow-md rounded-lg flex justify-center items-center gap-3 bg-white font-[500] w-full'>
              <img src={Kakao} className='w-6' />
              kakao로 login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
