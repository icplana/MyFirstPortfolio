import { useContext } from "react";
import { Proyecto } from "../components/Proyecto";
import { proyectos as fullProyectos} from '../data/proyectos'
import { LanguageContext } from "../context/LanguageContext";

const proyectos = fullProyectos.slice( 0, 3 )

export const HomeLanding = () => {

  const { language } = useContext( LanguageContext )
  return (
    <>
      <div className="text-white max-w-screen-lg px-auto text-center">
        <h2 className="pt-16 text-5xl mb-10  bg-gradient-to-br from-yellow-400 to-neutral-300 bg-clip-text text-transparent py-2">
          Ignasi Casanovas Plana
        </h2>

        <div className="flex flex-wrap my-6 mx-5 justify-center mb-12">
          <div className="w-4/12 min-w-fit flex justify-center aspect-square">
            <img
              className="rounded-full aspect-square max-w-xs max-h-80"
              src="./assets/images/profile.jpeg"
              alt=""
            />
          </div>

          <div className="w-8/12 text-white p-8">
            {
                ( language === 'CA') 
                ? "Hola! Sóc l'Ignasi Casanovas Plana, un aspirant a desenvolupador frontend amb una gran passió per crear aplicacions web. El meu objectiu és assegurar-me una posició de programador front-end junior, on pugui aportar les meves habilitats en HTML, CSS, JavaScript, React, Vite, Node.js, i Jest entre d'altres."
                : ( language === 'ES' )
                  ? '¡Hola! Soy Ignasi Casanovas Plana, un aspirante a desarrollador frontend con una fuerte pasión por la creación de aplicaciones web. Mi objetivo es asegurar una posición de programador front-end junior, donde pueda contribuir con mis habilidades en HTML, CSS, JavaScript, React, Vite, Node.js, y Jest entre otras.'
                  : "Hello! I'm Ignasi Casanovas Plana, an aspiring frontend developer with a strong passion for creating web applications. My immediate goal is to secure a junior front-end position, where I can contribute my skills in HTML, CSS, JavaScript, React, Vite, Node.js and Jest." 
            }
            <br />
            <br />
            {
                ( language === 'CA') 
                ? "A llarg termini, aspiro a convertir-me en un desenvolupador full-stack, ampliant els meus coneixements més enllà de les tecnologies front-end. Estic compromès amb l'aprenentatge continu, estar al dia amb les últimes tendències del sector i adquirir habilitats addicionals per contribuir de manera efectiva a tots els aspectes del desenvolupament web."
                : ( language === 'ES' )
                  ? 'A largo plazo, aspiro a convertirme en un desarrollador full-stack, ampliando mis conocimientos más allá de las tecnologías front-end. Estoy comprometido con el aprendizaje continuo, manteniéndome al día con las últimas tendencias de la industria y adquiriendo habilidades adicionales para contribuir de manera efectiva en todos los aspectos del desarrollo web.'
                  : "In the long term, I aspire to become a full-stack developer, expanding my knowledge beyond the frontend technologies. I am committed to continuous learning, keeping up with the latest industry trends, and acquiring additional skills to contribute efectively to all aspects of web development."             
            }
           
          </div>
        </div>
        <hr />
        <h1 className="justify-self-start w-full text-5xl font-thin my-5">
        {
                ( language === 'CA') 
                ? 'Alguns dels meus projectes...'
                : ( language === 'ES' )
                  ? 'Algunos de mis proyectos...'
                  : 'Some of my projects...' 
                }
        </h1>
        <div className="flex flex-wrap justify-evenly mt-12 gap-11 mx-5">
          {proyectos.map((proyecto) => (
            <Proyecto
              key={ proyecto.linkRepo }
              imgSrc={proyecto.imgSrc}
              name={proyecto.name}
              caDescription = { proyecto.caDescription }
              esDescription = { proyecto.esDescription }
              enDescription = { proyecto.enDescription }
              linkRepo={proyecto.linkRepo}
              linkTry={proyecto.linkTry}
              tecs = { proyecto.tecs }
            />
          ))}
        </div>
      </div>
    </>
  );
};
