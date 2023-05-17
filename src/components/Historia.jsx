import { Link } from "react-router-dom"


export const Historia = () => {
  return (
    <div>
        <div className='text-white max-w-screen-lg px-auto text-center'>               
            <h2 className='pt-32 text-5xl  bg-gradient-to-br from-yellow-400 to-neutral-300 bg-clip-text text-transparent py-2'> Ignasi Casanovas Plana</h2>
            <h4 className='text-2xl mt-2'>
                <strong className='font-extralight'>Front End Developer</strong>
            </h4>            
            <p className='mt-10'>Empezemos...</p> 
            <p className='mt-5'> 
                <span className='underline'>2016-2020</span>  
                <br /> 
                Me graduo en Química en la UAB
            </p>
            <img src="./assets/images/whiteArrow.webp" width="90rem" className='mx-auto mt-5 rotate-90' alt="" />
            <p className='mt-5'>
                <span className='underline'>2020-2022</span> 
                <br /> 
                Hago un máster en Dermofarmacia. Trabajo en I+D en sectores de alimentación y cosmetica
            </p>
            <img src="./assets/images/whiteArrow.webp" width="90rem" className=' mx-auto mt-5 rotate-90' alt="" />                
            <p className='mt-5 font-thin text-4xl mb-5'>Pero... y la programación ?</p>            
            <p className='mx-32'>Desde un poco antes de entrar en la universidad ya me empeze a interesar por el mundo de la programación, incluso durante la carrera aprendi un poco de python</p>
            <p className='text-5xl my-14'>. <br /> . <br /> .</p>
            <p className='mt-5 font-thin text-4xl mb-5'>Y ahora ?</p>
            <p>Desde noviembre de 2022 decidi dejar mi trabajo y ponerme a estudiar de forma autodidacta para ser <strong>FrontEnd Developer</strong>.</p>
            <img src="./assets/images/whiteArrow.webp" width="200rem" className='mx-auto mt-16 rotate-90' alt="" />    
            <p className='mt-16 text-4xl underline mb-8'>Conocimientos</p>
            <p>HTML, CSS( Sass, Bootstrap, Tailwind), JS (), Node, REACT, Git&Github (un poco de GitFlow), SQL ,Jest</p>

            <div className="mt-5">
                <img src="./assets/images/html.svg" className="inline w-20 mr-4 rounded" alt="HTML" />
                <img src="./assets/images/CSS.png" className="inline w-20 mr-4 rounded" alt="CSS" />
                <img src="./assets/images/sass.png" className="inline w-20 mr-4 rounded" alt="Sass"/>
                <img src="./assets/images/tailwind.png" className="inline w-20 mr-4 rounded" alt="TailwindCSS"/>
                <img src="./assets/images/bootstrap.png" className="inline w-20 mr-4 rounded" alt="Bootstrap" />
                <img src="./assets/images/JS.png" className="inline w-20 mr-4 rounded" alt="JavaScript"/>
                <img src="./assets/images/REACT.svg" className="inline w-20 mr-4 rounded" alt="ReactJS" />
                <img src="./assets/images/node.png" className="inline w-20 mr-4 rounded" alt="NodeJS" />
                <img src="./assets/images/GIT.png" className="inline w-20 mr-4 rounded" alt="GIT" />
                <img src="./assets/images/footerGithub2.png" className="inline w-20 mr-4 rounded" alt="GitHub" />
                
            </div>
            <p className='text-5xl my-10'>. <br /> . <br /> .</p>
            <p className="mt-5 font-thin text-4xl mb-5">Y todo esto ?</p>
            <img src="./assets/images/whiteArrow.webp" width="200rem" className='mx-auto mt-16 rotate-90' alt="" /> 
            <p className="mt-20 text-6xl font-bold animate-bounce mb-32"><Link to="MyFirstPortfolio/Proyectos">Proyectos</Link></p>
        </div>
    </div>
  )
}
