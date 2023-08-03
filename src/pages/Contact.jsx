import { useContext, useRef } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { useForm } from '../hooks/useForm'
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const { language } = useContext( LanguageContext )

    const { onInputChange, onResetForm, name, email, message, formState } = useForm( { name: '', email: '', message: '' } )

    const form = useRef()
    const nameAlert = useRef()
    const emailAlert = useRef()
    const messageAlert = useRef()

    const onSubmit = (e) => {
        e.preventDefault()

        let formCheck = true

        if ( name.length < 1 ){
           
            nameAlert.current.classList.remove( 'hidden' )
            setTimeout(() => {
                nameAlert.current.classList.add( 'hidden' )
            }, 2500);
            formCheck = false
        }
        if ( email.length < 5 || !email.includes('@') ){
            
            emailAlert.current.classList.remove( 'hidden' )
            setTimeout(() => {
                emailAlert.current.classList.add( 'hidden' )
            }, 2500);
            formCheck = false
        }
        if ( message.length < 10 || message.length > 2500 ){
            
            messageAlert.current.classList.remove( 'hidden' )
            setTimeout(() => {
                messageAlert.current.classList.add( 'hidden' )
            }, 2500);
            formCheck = false
        }

        if ( !formCheck ) return

        emailjs.sendForm('service_pnq8zwb', 'template_lpn0pno', form.current, 'sQNWifqekJ_EuWY3l')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        


        if ( language === 'CA' ) alert('Missatge enviat')
        if ( language === 'ES' ) alert('Mensaje enviado')
        if ( language === 'EN' ) alert('Message sent')
        onResetForm()
  };


    

  return (
    <div className='w-10/12 max-w-lg text-white'>
         <h1 
            className="bg-gradient-to-br text-center from-yellow-400 to-neutral-300 bg-clip-text text-transparent text-5xl mt-8 mb-8"
            >
                {
                ( language === 'CA') 
                ? 'Contacte'
                : ( language === 'ES' )
                  ? 'Contacto'
                  : 'Contact' 
                }
          </h1>
        <form action="" ref={ form } className='flex flex-col gap-3' onSubmit={ onSubmit }>
                
                           
                <label htmlFor="formName" className='font-semibold'>{
                            ( language === 'CA') 
                            ? 'Nom:'
                            : ( language === 'ES' )
                            ? 'Nombre:'
                            : 'Name:'   
                            }
                </label>
                <input 
                    type="text" 
                    id='formName'  
                    className="mb-1 px-2 py-1 rounded-md text-black"
                    name='name'
                    onInput={ onInputChange }
                    value={ name }
                    placeholder={
                            ( language === 'CA') 
                            ? 'Bernat'
                            : ( language === 'ES' )
                            ? 'Juan'
                            : 'Mike'   
                            }
                />
                <p 
                    className='bg-red-300 text-red-500 font-semibold rounded-md py-2 px-1 hidden'
                    ref={ nameAlert }
                >
                    {
                        ( language === 'CA') 
                        ? 'Nom no vàlid'
                        : ( language === 'ES' )
                            ? 'Nombre inválido'
                            : 'Invalid name' 
                    }
                </p>
            


            
                <label htmlFor="formEmail" className='font-semibold mt-4'>
                    {
                        ( language === 'CA') 
                        ? 'Correu:'
                        : ( language === 'ES' )
                        ? 'Correo:'
                        : 'Email:'   
                    }
                </label>
                <input 
                    type="email" 
                    id='formName' 
                    className='mb-1 px-2 py-1 rounded-md text-black'
                    onInput={ onInputChange }
                    name='email'
                    value={ email }
                    placeholder={
                            ( language === 'CA') 
                            ? 'correu@correu.cat'
                            : ( language === 'ES' )
                            ? 'correo@correo.es'
                            : 'email@email.com'   
                            } 
                />

                <p 
                    className='bg-red-300 text-red-500 font-semibold rounded-md py-2 px-1 hidden'
                    ref={ emailAlert }
                >
                    {
                        ( language === 'CA') 
                        ? 'Correu no vàlid'
                        : ( language === 'ES' )
                            ? 'Correo inválido'
                            : 'Invalid email' 
                    }
                </p>
           
                <label 
                    htmlFor="formMessage" 
                    className='font-semibold mt-4'>
                        {
                            ( language === 'CA') 
                            ? 'Missatge:'
                            : ( language === 'ES' )
                                ? 'Mensaje:'
                                : 'Message:'   
                        }
                </label>
                <textarea 
                    id="formMessage" 
                    cols="30" 
                    rows="10"
                    minLength="1"
                    maxLength="2500"
                    className='px-2 py-1 rounded-md mb-1 text-black' 
                    name='message'
                    onInput={ onInputChange }
                    value={ message }
                    placeholder={
                        ( language === 'CA') 
                            ? 'Escriu aquí...'
                            : ( language === 'ES' )
                                ? 'Escribir aquí...'
                                : 'Type here...'  
                    }
                ></textarea>
                <span className='self-end'>{ `${ message.length }/2500` }</span>
                <p 
                    className='bg-red-300 text-red-500 font-semibold rounded-md py-2 px-1 hidden'
                    ref={ messageAlert }
                >
                    {
                        ( language === 'CA') 
                        ? 'Missatge no vàlid (mínim 10 caràcters, màxim 2500 caràcters).'
                        : ( language === 'ES' )
                            ? 'Mensaje no válido (mínimo 10 caracteres, máximo 2500).'
                            : 'Invalid message (min 10 characters , max 2500 characters).' 
                    }
                </p>

           

            <input 
                type='submit'
                className='bg-black rounded-lg w-fit px-4 py-2 my-4 font-bold hover:cursor-pointer'
                value={
                    ( language === 'CA') 
                    ? 'Enviar'
                    : ( language === 'ES' )
                        ? 'Enviar'
                        : 'Submit'   
                }
            />
            




        </form>

    </div>
  )
}
