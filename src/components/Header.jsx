import { useContext, useRef } from "react"
import { Link } from "react-router-dom"
import { LanguageContext } from "../context/LanguageContext"


export const Header = () => {

  const { language, setCA, setES, setEN } = useContext( LanguageContext )

  const languageDropdown = useRef()
  const deployDropdown = () => {
    languageDropdown.current.classList.toggle( 'hidden' )
  }

  return (
    <header className="w-full mt-3">
      <nav className=" max-w-3xl mx-auto">
        <div onMouseLeave={ deployDropdown } className="border border-zinc-50 w-fit py-1 px-2">
          <span onMouseEnter={ deployDropdown } className="text-white font-bold" onClick={ deployDropdown }>{ language }</span>
          <ul ref={ languageDropdown }  className="hidden">
            <li className="text-white hover:font-bold pointer-events-auto"><button onClick={ setCA }>CA</button></li>
            <li className="text-white hover:font-bold pointer-events-auto"><button onClick={ setES }>ES</button></li>
            <li className="text-white hover:font-bold pointer-events-auto"><button onClick={ setEN }>EN</button></li>            
          </ul>
        </div>


        <ul className="flex flex-row justify-center gap-6 text-white mt-5 items-center">
          <li>
            <Link to="/">{
            ( language === 'CA') 
            ? 'Inici'
            : ( language === 'ES' )
              ? 'Inicio'
              : 'Home'           
            }</Link>
          </li>
          
          <li>
            <Link to="Herramientas">{
              ( language === 'CA') 
              ? 'Habilitats'
              : ( language === 'ES' )
                ? 'Habilidades'
                : 'Skills'   
            }</Link>
          </li>

          <li>
            <Link to="/Proyectos">{
              ( language === 'CA') 
              ? 'Projectes'
              : ( language === 'ES' )
                ? 'Proyectos'
                : 'Projects'   
            }</Link>
          </li>

          
         

          {/* <li>
            <Link to="/Historia">Historia</Link>
          </li> */}


        </ul>
      </nav>
    </header>
  )
}
