

export const Proyecto = ({ imgSrc, name, description, linkTry, linkRepo }) => {
  return (
    <div className="flex shrink-0 grow max-w-md w-96 flex-col rounded overflow-hidden mb-6 justify-center">
        
        <img src={ imgSrc } className="rounded-t-lg" alt="" />
        <div className="flex flex-col px-2 bg-stone-900 rounded-b-lg">
            <h3 className="self-start pl-1 pt-2 text-xl">{ name }</h3>
            <p 
                className="font-thin"
            >
                { description }
            </p>
            <div className="flex justify-evenly my-5 ">
                <a className="px-4 py-2 border border-white bordir-solid rounded hover:bg-white hover:font-semibold hover:text-black" href={ linkTry } target="_blank">Pruébalo!</a>
                <a className="px-4 py-2 border border-white bordir-solid rounded hover:bg-white hover:font-semibold hover:text-black" href={ linkRepo } target="_blank">Mira el código</a>
            </div>
        </div>
     
    </div>
  )
}
