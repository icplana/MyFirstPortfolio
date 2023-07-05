import { Proyecto } from "./Proyecto";

const proyectos = [
  {
    imgSrc: "./assets/images/tictactoe.png",
    name: "Tic Tac Toe",
    description: "Small project tic tac toe. 2 games modes: PvP and PvC",
    linkRepo: "https://github.com/icplana/tic-tac-toe-React",
    linkTry: "https://icplana.github.io/ContributionsForm/",
  },
  {
    imgSrc: "./assets/images/ContribucionesApp.png",
    name: "ContribucionesApp",
    description: "Small project to make public contributions",
    linkRepo: "https://github.com/icplana/ContributionsForm",
    linkTry: "https://icplana.github.io/ContributionsForm/",
  },
  {
    imgSrc: "./assets/images/TodoApp.png",
    name: "TodoApp",
    description: "Small project to create a todo list",
    linkRepo: "https://github.com/icplana/TodoAppReact",
    linkTry: "https://icplana.github.io/TodoAppReact/",
  },
];

export const HomeLanding = () => {
  return (
    <>
      <div className="text-white max-w-screen-lg px-auto text-center">
        <h2 className="pt-16 text-5xl mb-10  bg-gradient-to-br from-yellow-400 to-neutral-300 bg-clip-text text-transparent py-2">
          Ignasi Casanovas Plana
        </h2>

        <div className="flex flex-wrap my-6 mx-5 justify-center mb-12">
          <div className="w-4/12 min-w-fit flex justify-center">
            <img
              className="rounded-full aspect-square max-w-xs"
              src="./assets/images/profile.jpeg"
              alt=""
            />
          </div>

          <div className="w-8/12 text-white p-8">
            Hello! I'm Ignasi Casanovas Plana, an aspiring frontend developer
            with a strong passion for creating web applications. My immediate
            goal is to secure a junior front-end position, where I can
            contribute my skills in HTML, CSS, JavaScript, React, Vite, Node.js,
            and Jest. 
            <br />
            <br />
            In the long term, I aspire to become a full-stack
            developer, expanding my knowledge beyond the frontend technologies.
            I am committed to continuous learning, keeping up with the latest
            industry trends, and acquiring additional skills to contribute
            eectively to all aspects of web development.
          </div>
        </div>
        <hr />
        <h1 className="justify-self-start w-full text-5xl font-thin my-5">
          Some of my projects . . .
        </h1>
        <div className="flex flex-wrap justify-evenly mt-12 gap-11 mx-5">
          {proyectos.map((proyecto) => (
            <Proyecto
              imgSrc={proyecto.imgSrc}
              name={proyecto.name}
              description={proyecto.description}
              linkRepo={proyecto.linkRepo}
              linkTry={proyecto.linkTry}
            />
          ))}
        </div>
      </div>
    </>
  );
};
