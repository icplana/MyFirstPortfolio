import React from 'react'

export const Herramienta = ({ imgSrc, name, fuentes, certificaciones }) => {
  return (
    <div className="flex justify-start w-screen max-w-screen-lg border border-white rounded px-2 py-4">
        <img src={ imgSrc } className="inline-block  w-20 mr-4 rounded" alt="" />
        <div className="flex flex-col justify-center">
            <h3>{ name }</h3>
            <p>Fuentes principals:
            {
                    fuentes.map( (fuente, i) => {
                        if ( i === 0 ) <a href={ fuente.link } className="font-extralight" target="_blank"> { fuente.name }</a> 
                        if ( i >= 0 && i < fuentes.length - 1 ) <a href={ fuente.link } className="font-extralight" target="_blank">, { fuente.name }</a>
                        if ( i === fuentes.length -1 ) <a href={ fuente.link } className="font-extralight" target="_blank">y { fuente.name }</a>
                })
                }  
            </p>
                <p>Certificaciones:
                {
                    certificaciones.map( (certificacion, i) => {
                        if ( i === 0 ) <a href={ certificacion.link } className="font-extralight" target="_blank"> { certificacion.name }</a> 
                        if ( i >= 0 && i < certificaciones.length - 1 ) <a href={ certificacion.link } className="font-extralight" target="_blank">, { certificacion.name }</a>
                        if ( i === certificaciones.length -1 ) <a href={ certificacion.link } className="font-extralight" target="_blank">y { certificacion.name }</a>
                })
                } 
                </p>
        </div>
    </div>


  )
}
