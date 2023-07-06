import { Proyecto } from "./Proyecto"

const proyectos = [
  {
    imgSrc:"./assets/images/NotesApp.jpg",
    name:"NotesApp",
    description:"Medium/big project to create a NotesApp",
    linkRepo:"https://github.com/icplana/NotesAppReact",
    linkTry:"https://notes-app-react-gfprhhsbf-icplana.vercel.app/" ,
    tecs: "React, MUI, Redux, Vite, Vercel, Firebase, Cloudinary and Jest"
  },
  {
    imgSrc:"./assets/images/tictactoe.png",
    name: "Tic Tac Toe",
    description: "Small project tic tac toe. 2 games modes: PvP and PvC",
    linkRepo: "https://github.com/icplana/tic-tac-toe-React",
    linkTry:"https://icplana.github.io/ContributionsForm/",
    tecs: "React, TailwindCSS, GithubPages and Vite"
  },
  {
    imgSrc:"./assets/images/ContribucionesApp.png" ,
    name:"ContribucionesApp",
    description:"Small project to make public contributions",
    linkRepo:"https://github.com/icplana/ContributionsForm",    
    linkTry:"https://icplana.github.io/ContributionsForm/" ,
    tecs: "React, Bootstrap, GithubPages and Vite"
  },
  {
    imgSrc:"./assets/images/TodoApp.png",
    name:"TodoApp",
    description:"Small project to create a todo list",
    linkRepo:"https://github.com/icplana/TodoAppReact",
    linkTry:"https://icplana.github.io/TodoAppReact/" ,
    tecs: "React, TailwindCSS, GithubPages and Vite"
  }
  
]
export const Proyectos = () => {
  return (
    <>
      <h1 
        className="bg-gradient-to-br from-yellow-400 to-neutral-300 bg-clip-text text-transparent text-5xl mt-8"
        >
            PROJECTS
      </h1>
      <div className="flex flex-wrap justify-evenly mt-12 gap-11 mx-5">
        
          { proyectos.map( proyecto => (
            <Proyecto
              key={ proyecto.linkRepo }
              imgSrc = { proyecto.imgSrc }
              name = { proyecto.name }
              description = { proyecto.description }
              linkRepo = { proyecto.linkRepo }    
              linkTry = { proyecto.linkTry}
              tecs = { proyecto.tecs }
            />
          ))}  
            
        

      </div>
    </>
  )
}
