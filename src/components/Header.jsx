import { Link } from "react-router-dom"


export const Header = () => {
  return (
    <header className="w-full">
      <nav >
        <ul className="flex flex-row justify-center gap-6 text-white mt-5 ">
          <li>
            <Link to="MyFirstPortfolio/">Inicio</Link>
          </li>
          
          <li>
            <Link to="MyFirstPortfolio/Herramientas">Formación</Link>
          </li>

          <li>
            <Link to="MyFirstPortfolio/Proyectos">Proyectos</Link>
          </li>

          <li>
            <Link to="MyFirstPortfolio/Historia">Historia</Link>
          </li>


        </ul>
      </nav>
    </header>
  )
}
