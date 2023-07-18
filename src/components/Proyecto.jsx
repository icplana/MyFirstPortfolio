import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"


export const Proyecto = ({ imgSrc, name, caDescription, esDescription, enDescription, linkTry, linkRepo, tecs }) => {

    const { language } = useContext( LanguageContext )

  return (
    <div className="flex bg-white text-white shrink-0 grow max-w-md w-96 flex-col rounded-lg overflow-hidden mb-6 justify-center">
        
        <img src={ imgSrc } className="rounded-t h-80 object-contain" alt="" />
        <div className="flex flex-col px-2 py-2 bg-stone-900 rounded-b pl-6">
            <h3 className="self-start pl-1 pt-2 text-xl">{ name }</h3>
            <p 
                className="font-thin h-12 self-start"
            >
                { ( language === 'CA') 
                    ? caDescription
                    : ( language === 'ES' )
                      ? esDescription
                      : enDescription  }
            </p>

            <p className="self-start">
                <b>{
                    ( language === 'CA') 
                    ? 'Tecnologies:'
                    : ( language === 'ES' )
                      ? 'Tecnologías:'
                      : 'Technologies:'   
                    }</b>
                { ' ' + tecs }
            </p>
            <div className="flex justify-evenly py-8 ">
                <a className="px-4 my-2 border border-white bordir-solid rounded hover:bg-white hover:font-semibold hover:text-black" href={ linkTry } target="_blank">
                    {
                        ( language === 'CA') 
                        ? "Prova'l!"
                        : ( language === 'ES' )
                          ? 'Pruébalo!'
                          : 'Try it!'   
                    }
                </a>
                <a className="px-4 my-2 border border-white bordir-solid rounded hover:bg-white hover:font-semibold hover:text-black" href={ linkRepo } target="_blank">{
                    ( language === 'CA') 
                    ? 'Mira el codi'
                    : ( language === 'ES' )
                      ? 'Mira el código'
                      : 'Check the code'   
                }</a>
            </div>
        </div>
     
    </div>
  )
}
