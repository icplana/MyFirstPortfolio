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
      <div className='w-full bg-gradient-to-br from-black to-gray-700 flex flex-col items-center min-h-screen'>
          <Header />
          <Routes>
            <Route path="MyFirstPortfolio//" element={ <HomeLanding /> }/>
            <Route path="MyFirstPortfolio//*" element={ <HomeLanding /> }/>
            <Route path="MyFirstPortfolio/historia" element={ <Historia />}/>
            <Route path="MyFirstPortfolio/herramientas" element={ <Herramientas />}/>
            <Route path="MyFirstPortfolio/proyectos" element={ <Proyectos />}/>
          </Routes>   
          <Footer /> 
      </div>
    </>
  
  )
}

export default App
