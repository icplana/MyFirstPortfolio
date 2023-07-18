import { useContext } from "react"
import { Herramienta } from "../components/Herramienta"
import { LanguageContext } from "../context/LanguageContext"
import { herramientas } from "../data/skills"



export const Herramientas = () => {

  const { language } = useContext( LanguageContext )

  return (
    <>
      <div className='text-white max-w-screen-lg px-auto'>  
        <h1 
            className="bg-gradient-to-br text-center from-yellow-400 to-neutral-300 bg-clip-text text-transparent text-5xl mt-8 mb-8"
            >
                {
                ( language === 'CA') 
                ? 'Cursos'
                : ( language === 'ES' )
                  ? 'Cursos'
                  : 'Courses' 
                }
          </h1>

          {
            herramientas.map( herramienta => (
              <Herramienta
                key={ herramienta.name }
                imgSrc = { herramienta.imgSrc }
                name = { herramienta.name }
                fuentes = { herramienta.fuentes }
                certificaciones={ herramienta.certificaciones }
              />
            ))
          }

      </div>
    </>
  )
}
