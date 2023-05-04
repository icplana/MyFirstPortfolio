import { Herramienta } from "./Herramienta"


export const Herramientas = () => {
  return (
    <>
      <div className='text-white max-w-screen-lg px-auto'>  
        <h1 
            className="bg-gradient-to-br text-center from-yellow-400 to-neutral-300 bg-clip-text text-transparent text-5xl mt-8 mb-8"
            >
                Herramientas
          </h1>
           
           <Herramienta
           imgSrc="/assets/images/html.svg" 
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
           
           
            
      </div>
    </>
  )
}
