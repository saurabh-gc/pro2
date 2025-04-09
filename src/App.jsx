
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './Pages/Register'
import Admin from './Pages/Admin'
import StudentInfo from './Pages/StudentInfo'
import UpdateStu from './Pages/UpdateStu'
import DeleteStu from './Pages/DeleteStu'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/studentinfo' element={<StudentInfo/>}/>
          <Route path='/update/:student' element={<UpdateStu/>}/>
          <Route path='/delete/:student' element={<DeleteStu/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
