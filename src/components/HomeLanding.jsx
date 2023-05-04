import { Proyecto } from "./Proyecto"


export const HomeLanding = () => {
  return (
    <>
        <div className='text-white max-w-screen-lg px-auto text-center'>               
            <h2 
              className='pt-16 text-5xl mb-10  bg-gradient-to-br from-yellow-400 to-neutral-300 bg-clip-text text-transparent py-2'
            > 
              Ignasi Casanovas Plana
            </h2>
       
            <div className="flex flex-wrap my-6 mx-5 justify-center mb-12">
              <div className="w-4/12 min-w-fit flex justify-center"> 
                <img 
                  className="rounded-full aspect-square max-w-xs" src="/assets/images/profile.jpeg" alt="" />
              </div>

              <div className="w-8/12 text-white p-8">
                ¡Hola! Soy Ignasi, un desarrollador Frontend con una gran pasión por la creación de aplicaciones web atractivas e intuitivas. Mi objetivo es convertirme en un desarrollador Full-Stack y estoy trabajando para ampliar mis habilidades y conocimientos. Como estudiante autodidacta, he explorado una variedad de tecnologías y frameworks, incluyendo JavaScript, React, Node.js, SQL y Git.
                <br />
                <br />
                Me encanta trabajar en equipo y estoy emocionado por aprender de otros desarrolladores y contribuir al éxito de proyectos en colaboración. Actualmente estoy buscando oportunidades laborales para seguir creciendo y aplicando mis habilidades en un entorno profesional
              </div>

            </div>
            <hr />
            <h1 
            className="justify-self-start w-full text-5xl font-thin my-5"
            >
              Algunos de mis proyectos . . .
              </h1>
            <div className="flex flex-wrap justify-evenly mt-12 gap-11 mx-5">
              
                <Proyecto 
                  imgSrc ="/assets/images/tictactoe.png" 
                  name="Tic Tac Toe"
                  description="Pequeño proyecto 3 en raya. 2 Modos: PvP y PvC"
                  linkRepo="https://github.com/icplana/tic-tac-toe-React"     
                  linkTry="https://icplana.github.io/tic-tac-toe-React/"   
                />    
              
                <Proyecto 
                  imgSrc ="/assets/images/ContribucionesApp.png" 
                  name="ContribucionesApp"
                  description="Pequeño proyecto para aportar comentarios en una web"
                  linkRepo="https://github.com/icplana/ContributionsForm"     
                  linkTry="https://icplana.github.io/ContributionsForm/"   
                />    
               
                <Proyecto 
                  imgSrc ="/assets/images/TodoApp.png" 
                  name="TodoApp"
                  description="Pequeño proyecto para hacer un TodoList"
                  linkRepo="https://github.com/icplana/TodoAppReact"     
                  linkTry="https://icplana.github.io/TodoAppReact/"   
                />    
                 
              

            </div>

        </div>
    
    </>
  )
}
