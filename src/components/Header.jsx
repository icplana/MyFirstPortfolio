import { useContext, useRef } from "react"
import { NavLink } from "react-router-dom"
import { LanguageContext } from "../context/LanguageContext"


export const Header = () => {

  const { language, setCA, setES, setEN } = useContext( LanguageContext )

  const languageDropdown = useRef()
  const mobileLanguageDropdown = useRef()
  const mobileNavbar = useRef()

  const showMobileNavbar = () => {
    mobileNavbar.current.classList.remove('hidden')
  }

  const closeMobileNavbar = () => {
    mobileNavbar.current.classList.add('hidden')
  }


  const deployDropdown = () => {
    languageDropdown.current.classList.toggle( 'hidden' )
  }

  const openMobileLanguageDropdown = () => {
    mobileLanguageDropdown.current.classList.remove('hidden')
  }

  const closeMobileLanguageDropdown = () => {
    mobileLanguageDropdown.current.classList.add('hidden')
  }

  return (
    <header className="w-full mt-3">

      {/* //Small Screen */}
      <div className="">
        <button className="text-white sm:hidden ml-2" onClick={ showMobileNavbar }>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
          <path  d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="rgba(255,255,255,1)"></path>
        </svg>
      </button>

      <div className="bg-slate-100 absolute top-0 h-screengit w-screen bg-gradient-to-br from-black to-gray-700 hidden" ref={ mobileNavbar }>

        <button className="block ms-auto pe-2 mt-2" onClick={ closeMobileNavbar }>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45">
            <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="rgba(255,255,255,1)"></path>
          </svg>
        </button>

      <ul className="  ml-4 text-2xl justify-center text-white mt-5 items-center leading-10">
          <li>
            <button onClick={closeMobileNavbar}>
              <NavLink
                className={ ({isActive}) => isActive ? 'font-semibold text-3xl' :'' }
                to="/">{
              ( language === 'CA') 
              ? 'Inici'
              : ( language === 'ES' )
                ? 'Inicio'
                : 'Home'           
              }</NavLink>
            </button>
          </li>
          
          <li>
            <button onClick={closeMobileNavbar}>
              <NavLink 
                className={ ({isActive}) => isActive ? 'font-semibold text-3xl' :'' }
                to="Herramientas">{
                ( language === 'CA') 
                ? 'Habilitats'
                : ( language === 'ES' )
                  ? 'Habilidades'
                  : 'Skills'   
              }</NavLink>
            </button>
          </li>

          <li>
            <button onClick={closeMobileNavbar}>
              <NavLink 
                className={ ({isActive}) => isActive ? 'font-semibold text-3xl' :'' }
                to="/Proyectos">{
                ( language === 'CA') 
                ? 'Projectes'
                : ( language === 'ES' )
                  ? 'Proyectos'
                  : 'Projects'   
              }</NavLink>
            </button>
          </li>

          <li>
            <button onClick={closeMobileNavbar}>
              <NavLink 
                className={ ({isActive}) => isActive ? 'font-semibold text-3xl' :'' }
                to="/contact">{
                ( language === 'CA') 
                ? 'Contacte'
                : ( language === 'ES' )
                  ? 'Contacto'
                  : 'Contact'   
              }</NavLink>
            </button>
          </li>

          
         

          {/* <li>
            <Link to="/Historia">Historia</Link>
          </li> */}


        </ul>
        <div className="ps-4 mt-5 text-xl">
          <span className="text-white font-bold flex" onClick={ openMobileLanguageDropdown }>
            <svg className="self-center mr-1"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z" fill="rgba(255,255,255,1)"></path></svg>
            { language }
          </span>

          <ul ref={ mobileLanguageDropdown } className="hidden">
            <li className="text-white hover:font-bold"><button onClick={ () => { setCA(); closeMobileLanguageDropdown() } }>CA</button></li>
            <li className="text-white hover:font-bold"><button onClick={ () => { setES(); closeMobileLanguageDropdown() } }>ES</button></li>
            <li className="text-white hover:font-bold"><button onClick={ () => { setEN(); closeMobileLanguageDropdown() } }>EN</button></li>            
          </ul>
        </div>
        
      </div>
      </div>
      




      {/* //Big Screen */}
      <nav className=" max-w-3xl mx-auto">
        <div onMouseLeave={ deployDropdown } className=" rounded-lg border-zinc-50 w-fit py-1 px-2 mt-3">
          <span onMouseEnter={ deployDropdown } className="text-white font-bold hidden sm:flex" onClick={ deployDropdown }>
            <svg className="self-center mr-1"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z" fill="rgba(255,255,255,1)"></path></svg>
            { language }
          </span>
          <ul ref={ languageDropdown }  className="hidden">
            <li className="text-white hover:font-bold"><button onClick={ setCA }>CA</button></li>
            <li className="text-white hover:font-bold"><button onClick={ setES }>ES</button></li>
            <li className="text-white hover:font-bold"><button onClick={ setEN }>EN</button></li>            
          </ul>
        </div>


        <ul className=" hidden sm:flex flex-row justify-center gap-6 text-white mt-5 items-center">
          <li>
            <NavLink 
              className={ ({isActive}) => isActive ? 'font-semibold text-xl' :'' }
              to="/">{
            ( language === 'CA') 
            ? 'Inici'
            : ( language === 'ES' )
              ? 'Inicio'
              : 'Home'           
            }</NavLink>
          </li>
          
          <li>
            <NavLink 
              className={ ({isActive}) => isActive ? 'font-semibold text-xl' :'' }
              to="Herramientas">{
              ( language === 'CA') 
              ? 'Habilitats'
              : ( language === 'ES' )
                ? 'Habilidades'
                : 'Skills'   
            }</NavLink>
          </li>

          <li>
            <NavLink 
              className={ ({isActive}) => isActive ? 'font-semibold text-xl' :'' }
              to="/Proyectos">{
              ( language === 'CA') 
              ? 'Projectes'
              : ( language === 'ES' )
                ? 'Proyectos'
                : 'Projects'   
            }</NavLink>
          </li>

          <li>
            <NavLink 
              className={ ({isActive}) => isActive ? 'font-semibold text-xl' :'' }
              to="/contact">{
              ( language === 'CA') 
              ? 'Contacte'
              : ( language === 'ES' )
                ? 'Contacto'
                : 'Contact'   
            }</NavLink>
          </li>

          
         

          {/* <li>
            <Link to="/Historia">Historia</Link>
          </li> */}


        </ul>
      </nav>
    </header>
  )
}
