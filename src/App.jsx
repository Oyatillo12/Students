import './App.css'
import CustomRoutes from './routes/CustomRoutes'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'

function App() {
  const {pathname} = useLocation()
  const login = pathname.includes('login') || pathname.includes('register')
  return (
    <div className={`${login ? '' : 'flex'}`}>
      { login ? "" : <Navbar/>}
      <div className={`${login ? 'w-[100%]' : ""} w-[80%] h-[100vh] overflow-y-auto`}>
        <CustomRoutes />
      </div>
    </div>
  )
}




export default App
