import { Outlet } from 'react-router-dom'
import Header from './component/header'
export default function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
