import { Proyecto } from "./Proyecto"

const proyectos = [
  {
    imgSrc:"./assets/images/tictactoe.png",
    name: "Tic Tac Toe",
    description: "Small project tic tac toe. 2 games modes: PvP and PvC",
    linkRepo: "https://github.com/icplana/tic-tac-toe-React",
    linkTry:"https://icplana.github.io/ContributionsForm/"
  },
  {
    imgSrc:"./assets/images/ContribucionesApp.png" ,
    name:"ContribucionesApp",
    description:"Small project to make public contributions",
    linkRepo:"https://github.com/icplana/ContributionsForm",    
    linkTry:"https://icplana.github.io/ContributionsForm/" 
  },
  {
    imgSrc:"./assets/images/TodoApp.png",
    name:"TodoApp",
    description:"Small project to create a todo list",
    linkRepo:"https://github.com/icplana/TodoAppReact",
    linkTry:"https://icplana.github.io/TodoAppReact/" 
  }
]
export const Proyectos = () => {
  return (
    <>
      <h1 
        className="bg-gradient-to-br from-yellow-400 to-neutral-300 bg-clip-text text-transparent text-5xl mt-8"
        >
            PROYECTOS
      </h1>
      <div className="flex flex-wrap justify-evenly mt-12 gap-11 mx-5">
        
          { proyectos.map( proyecto => (
            <Proyecto
              imgSrc = { proyecto.imgSrc }
              name = { proyecto.name }
              description = { proyecto.description }
              linkRepo = { proyecto.linkRepo }    
              linkTry = { proyecto.linkTry}
            />
          ))}  
            
        

      </div>
    </>
  )
}
