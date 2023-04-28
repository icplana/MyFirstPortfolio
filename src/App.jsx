import { useState } from 'react'
import { Header } from './components/Header'
import { Body } from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='w-full bg-gradient-to-br from-black to-gray-700 flex flex-col items-center'>
        <Header />
        <Body />
      
      
      </div>
    
    </>
  )
}

export default App
