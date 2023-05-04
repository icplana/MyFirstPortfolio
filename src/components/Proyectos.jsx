import { Proyecto } from "./Proyecto"


export const Proyectos = () => {
  return (
    <>
      <h1 
        className="bg-gradient-to-br from-yellow-400 to-neutral-300 bg-clip-text text-transparent text-5xl mt-8"
        >
            PROYECTOS
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
    </>
  )
}
