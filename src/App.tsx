import { Navigate, Route, Routes } from 'react-router-dom'
import SharedLayout from './components/layout/SharedLayout'
import {CartPage, HomePage, LoginPage, MedicinePage, MedicineStorePage, ProductPage, RegisterPage} from './pages'

function App() {

  return (
   <Routes>
     <Route path='login' element={<LoginPage/>}/>
     <Route path='register' element={<RegisterPage/>}/>
    <Route path='/' element={<SharedLayout />}>
    <Route index element={<Navigate to='home' replace />} />
      <Route path='home' element={<HomePage/>}/>
      <Route path='medicine-store' element={<MedicineStorePage/> }/>
      <Route path='medicine' element={<MedicinePage/>}/>
      <Route path='product' element={<ProductPage/>}/>
      <Route path='cart' element={<CartPage/>}/>
    </Route>
   </Routes>
  )
}

export default App
