import './App.css'
import CustomRoutes from './routes/CustomRoutes'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'

function App() {
  const {pathname} = useLocation()
  

  return (
    <div className={`${pathname == '/' || pathname.includes('register') ? '' : 'flex'}`}>
      { pathname == '/' || pathname.includes('register') ? "" : <Navbar/>}
      <div className={`${pathname == '/' || pathname.includes('register') ? 'w-[100%]' : "w-[80%]"}  h-[100vh] overflow-y-auto`}>
        <CustomRoutes />
      </div>
    </div>
  )
}




export default App
