import { Route } from 'react-router-dom'
import { createRoutesFromElements, createBrowserRouter } from 'react-router-dom'

import Home from './pages/home'
import SingIn from './pages/singin'
import Upload from './pages/upload'
import Model from './pages/model'
import AppLayout from './AppLayout'
import ModelEdit from './pages/modelEdit'
import Gallery from './pages/gallery'
import Detail from './pages/detail'
import Signcall from './pages/signcall'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='/singin' element={<SingIn />} />
        <Route path='/model' element={<Model />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/model/edit/:id' element={<ModelEdit />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/singin/callback' element={<Signcall/>}/>
      </Route>
    </>
  )
)

export default router
