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
        <div onMouseLeave={ deployDropdown } className=" rounded-lg border-zinc-50 w-fit py-1 px-2 mt-3">
          <span onMouseEnter={ deployDropdown } className="text-white font-bold flex" onClick={ deployDropdown }>
            <svg className="self-center mr-1"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z" fill="rgba(255,255,255,1)"></path></svg>
            { language }
          </span>
          <ul ref={ languageDropdown }  className="hidden">
            <li className="text-white hover:font-bold"><button onClick={ setCA }>CA</button></li>
            <li className="text-white hover:font-bold"><button onClick={ setES }>ES</button></li>
            <li className="text-white hover:font-bold"><button onClick={ setEN }>EN</button></li>            
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

          <li>
            <Link to="/contact">{
              ( language === 'CA') 
              ? 'Contacte'
              : ( language === 'ES' )
                ? 'Contacto'
                : 'Contact'   
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
