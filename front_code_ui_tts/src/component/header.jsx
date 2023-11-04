import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'
import Github from '../assets/github.png'
export default function Header() {
  const navs = [
    { name: 'Upload', href: '/upload' },
    { name: 'Model', href: '/model' },
    { name: 'Commands', href: '/commands' },
    { name: 'Help', href: '/help' },
    { name: 'Donation', href: '/donation3' },
    { name: 'Sing In', href: '/singin' },
  ]
  return (
    <header className='px-2 py-2 flex justify-between items-center bg-[#BB29FF] text-[#DDD]'>
      <NavLink to='/'>
        <div className='w-fit rounded-full bg-[#F2D8FF]'>
          <img src={Logo} alt='' />
        </div>
      </NavLink>
      <div>
        <nav className='flex gap-3'>
          <span>¥</span>
          {navs.map((e, i) => {
            return (
              <NavLink to={e.href} key={i}>
                {({ isActive }) => {
                  return (
                    <span className={`${isActive && 'text-[#FFF] font-bold'}`}>
                      {e.name}
                    </span>
                  )
                }}
              </NavLink>
            )
          })}
        </nav>
      </div>
      <div>
        <img src={Github} width={25} alt='github logo' />
      </div>
    </header>
  )
}
