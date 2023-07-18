import { useContext } from "react"
import { Proyecto } from "../components/Proyecto"
import { proyectos } from "../data/proyectos"
import { LanguageContext } from "../context/LanguageContext"


export const Proyectos = () => {

  const { language } = useContext( LanguageContext )
  return (
    <>
      <h1 
        className="bg-gradient-to-br from-yellow-400 to-neutral-300 bg-clip-text text-transparent text-5xl mt-8"
        >
            PROJECTS
      </h1>
      <div className="flex flex-wrap justify-evenly mt-12 gap-11 mx-5">
        
          { proyectos.map( proyecto => (
            <Proyecto
              key={ proyecto.linkRepo }
              imgSrc = { proyecto.imgSrc }
              name = { proyecto.name }
              description = { proyecto.description }
              linkRepo = { proyecto.linkRepo }    
              linkTry = { proyecto.linkTry}
              tecs = { proyecto.tecs }
            />
          ))}  
            
        

      </div>
    </>
  )
}
