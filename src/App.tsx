import { Route, Routes } from 'react-router-dom'
import SharedLayout from './components/layout/SharedLayout'
import LoginPage from './pages/LoginPage'

function App() {

  return (
   <Routes>
     <Route path='login' element={<LoginPage/>}/>
     <Route path='register' element={<h1>Register</h1>}/>
    <Route path='/' element={<SharedLayout />}>
      <Route index element={<h1>Home</h1>}/>
      <Route path='about' element={<h1>About</h1>}/>
      <Route path='contact' element={<h1>Contact</h1>}/>
    </Route>
   </Routes>
  )
}

export default App
