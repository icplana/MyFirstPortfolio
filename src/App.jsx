import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { HomeLanding } from './components/HomeLanding'
import { Historia } from './components/Historia'
import { Herramientas } from './components/Herramientas'
import { Proyectos } from './components/Proyectos'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
      <div className='w-full bg-gradient-to-br from-black to-gray-700 flex flex-col items-center'>
          <Header />
          <Routes>
            <Route path="/" element={ <HomeLanding /> }/>
            <Route path="historia" element={ <Historia />}/>
            <Route path="herramientas" element={ <Herramientas />}/>
            <Route path="proyectos" element={ <Proyectos />}/>
          </Routes>   
          <Footer /> 
      </div>
    </>
  
  )
}

export default App
