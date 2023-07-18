import { useContext } from "react"
import { Herramienta } from "../components/Herramienta"
import { LanguageContext } from "../context/LanguageContext"


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
           
           <Herramienta
           imgSrc="./assets/images/html.svg" 
            name="HTML"
            fuentes={[
              {
                name:'OpenBootCamp', 
                link:"https://campus.open-bootcamp.com/"
              },
              {
                name:'MDN docs', 
                link:"https://developer.mozilla.org/es/docs/Web/HTML"
              }
            ]}
            certificaciones= {[
              {
                name:'OpenBootCamp', 
                link:"https://community.open-bootcamp.com/user/icplana/certificaciones/264508d3-9fff-4795-ad58-52fb77c1b43c"
              }
            ]}
           />
           
           <Herramienta
           imgSrc="./assets/images/CSS.png" 
            name="CSS"
            fuentes={[
              {
                name:'OpenBootCamp', 
                link:"https://campus.open-bootcamp.com/"
              },
              {
                name:'MDN docs', 
                link:"https://developer.mozilla.org/es/docs/Web/CSS"
              }
            ]}
            certificaciones= {[
              {
                name:'OpenBootCamp', 
                link:"https://community.open-bootcamp.com/user/icplana/certificaciones/264508d3-9fff-4795-ad58-52fb77c1b43c"
              }
            ]}
           />
           
           <Herramienta
           imgSrc="./assets/images/tailwind.png" 
            name="TailwindCSS"
            fuentes={[
              {
                name:'Tailwind docs', 
                link:"https://tailwindcss.com/"
              },
            ]}
            certificaciones= {[]}
           />
           
           <Herramienta
           imgSrc="./assets/images/JS.png" 
            name="JavaScript"
            fuentes={[
              {
                name:'OpenBootCamp', 
                link:"https://campus.open-bootcamp.com/"
              },
              {
                name:'MDN docs', 
                link:"https://developer.mozilla.org/es/docs/Web/JavaScript"
              },
              {
                name:'Udemy', 
                link:"https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/"
              },
            ]}
            certificaciones= {[
              {
                name:'OpenBootCamp', 
                link:"https://community.open-bootcamp.com/user/icplana/certificaciones/264508d3-9fff-4795-ad58-52fb77c1b43c"
              },
              {
                name:'Udemy', 
                link:"https://www.udemy.com/certificate/UC-cef5f81e-dd7d-4ef1-bee7-8a30e33d8a2c/"
              }
            ]}
           />
           
           <Herramienta
           imgSrc="./assets/images/REACT.svg" 
            name="React"
            fuentes={[
              {
                name:'React Dev', 
                link:"https://react.dev"
              },
              {
                name:'Udemy', 
                link:"https://www.udemy.com/course/react-cero-experto/"
              },
            ]}
            certificaciones= {[
              {
                name:'Udemy', 
                link:"https://www.udemy.com/certificate/UC-cef5f81e-dd7d-4ef1-bee7-8a30e33d8a2c/"
              }
            ]}
           />
           
           <Herramienta
           imgSrc="./assets/images/GIT.png" 
            name="Git"
            fuentes={[
              {
                name:'Git docs', 
                link:"https://git-scm.com/doc"
              },
              {
                name:'MoureDev', 
                link:"https://www.youtube.com/watch?v=3GymExBkKjE&ab_channel=MoureDevbyBraisMoure"
              },
              {
                name:'Training Github', 
                link:"https://training.github.com/"
              },
            ]}
            certificaciones= {[]}
           />
           
           <Herramienta
           imgSrc="./assets/images/footerGithub2.png" 
            name="Github"
            fuentes={[
              {
                name:'Github docs', 
                link:"https://docs.github.com/es"
              },
              {
                name:'MoureDev', 
                link:"https://www.youtube.com/watch?v=3GymExBkKjE&ab_channel=MoureDevbyBraisMoure"
              },
              {
                name:'Training Github', 
                link:"https://training.github.com/"
              },
            ]}
            certificaciones= {[]}
           />
           
           
            
      </div>
    </>
  )
}
