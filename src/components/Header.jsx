import { Link } from "react-router-dom"


export const Header = () => {
  return (
    <header className="w-full">
      <nav >
        <ul className="flex flex-row justify-center gap-6 text-white mt-5 ">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          
          <li>
            <Link to="/Herramientas">Formación</Link>
          </li>

          <li>
            <Link to="/Proyectos">Proyectos</Link>
          </li>

          <li>
            <Link to="/Historia">Historia</Link>
          </li>


        </ul>
      </nav>
    </header>
  )
}
