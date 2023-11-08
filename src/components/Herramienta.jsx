import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

export const Herramienta = ({ imgSrc, name, fuentes, certificaciones }) => {

    const { language } = useContext( LanguageContext )

  return (
    <div className="flex justify-center sm:justify-start w-screen max-w-screen-lg border border-white rounded px-2 py-4 mb-5">
        <img src={ imgSrc } className="inline-block  w-20 mr-4 rounded" alt="" />
        <div className="flex flex-col justify-center">
            <h3>{ name }</h3>
            <p className='hidden sm:block'>{
            ( language === 'CA') 
            ? 'Fonts principals:'
            : ( language === 'ES' )
              ? 'Fuentes principales:'
              : 'Main sources:'       
            }
            {
                    fuentes.map( (fuente, i) => {
                        if ( i === 0 )return( 
                            <>
                                <span> </span>
                                <a 
                                    href={ fuente.link } 
                                    className="font-extralight" 
                                    target="_blank"
                                > 
                                    { fuente.name }
                                </a> 
                            </>
                        )
                        if ( i >= 0 && i < fuentes.length - 1 ) return( 
                            <>
                                <span>, </span>
                                <a 
                                    href={ fuente.link } 
                                    className="font-extralight" 
                                    target="_blank"
                                >
                                    { fuente.name }
                                </a>
                            </>
                        )
                        if ( i === fuentes.length -1 ) return(
                            <> 
                                <span> & </span> 
                                <a 
                                    href={ fuente.link } 
                                    className="font-extralight" 
                                    target="_blank"
                                >
                                    { fuente.name }
                                </a>
                            </>
                        )
                })
            }  
            </p>
                <p className='hidden sm:block'>{
                    certificaciones.length === 0
                    ? ' '
                    : ( language === 'CA') 
                        ? 'Certificacions:'
                        : ( language === 'ES' )
                            ? 'Certificaciones:'
                            : 'Certifications:'   
                }
                {
                   
                    certificaciones.map( (certificacion, i) => {
                        if ( i === 0 ) return( 
                            <>
                                <span> </span>
                                <a 
                                    href={ certificacion.link } 
                                    className="font-extralight" 
                                    target="_blank"
                                >
                                    { certificacion.name }
                                </a>
                            </>
                        ) 
                        if ( i >= 0 && i < certificaciones.length - 1 ) return(
                        <>
                            <span>, </span>
                            <a 
                                href={ certificacion.link } 
                                className="font-extralight" 
                                target="_blank"
                                >
                                    { certificacion.name }
                                </a>
                            </>
                        )
                        if ( i === certificaciones.length -1 ) return(
                            <>
                                <span> & </span>
                                <a 
                                    href={ certificacion.link } 
                                    className="font-extralight" 
                                    target="_blank"
                                >
                                    { certificacion.name }
                                </a> 
                            </> 
                        )
                })
                } 
                </p>
        </div>
    </div>


  )
}
