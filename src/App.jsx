import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomeLanding } from './pages/HomeLanding'
import { Historia } from './pages/Historia'
import { Proyectos } from './pages/Proyectos'
import { Herramientas } from './pages/Herramientas'

export function App() {

  return (
    <>    
      <div className='w-full bg-gradient-to-br from-black to-gray-700 flex flex-col items-center min-h-screen'>
          <Header />
          <Routes>
            <Route path="/*" element={ <HomeLanding /> }/>
            <Route path="/historia" element={ <Historia />}/>
            <Route path="/herramientas" element={ <Herramientas />}/>
            <Route path="/proyectos" element={ <Proyectos />}/>
          </Routes>   
          <Footer /> 
      </div>
    </>
  
  )
}

