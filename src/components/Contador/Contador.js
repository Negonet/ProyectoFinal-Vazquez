
const Contador = ( {max, counter, setCounter, handleAddCart} ) => {
    
    const handleMore = () => {
        counter < max && setCounter(counter +1)
    }

    const handleLess = () => {
        if (counter > 1) {
            setCounter(counter -1)
        } 
    } 
   
    return (

        <div className="pt-[15px] flex flex-col items-center justify-center ">
            <p className="pr-2 text-gray-300">Cantidad de Cajas</p>  
            <div className="flex mt-2">
                <div className="btn1">
                    <button onClick={handleMore} disabled={counter === max} className={`rounded-md py-0 px-[3px] font-bold text-gray-200 ${counter === max ? "bg-black" : "bg-green-600 shadow-lg hover:bg-green-500 hover:text-gray-600 ease-in-out duration-300"}`} >+</button>     
                </div>
                <span className="px-2 font-bold">{counter}</span>
                <div className="btn2 ">
                    <button onClick={handleLess} disabled={counter === 1} className={`rounded-md py-0 px-[5px] font-bold text-gray-200  ${counter === 1 ? "bg-black" : "ease-in-out duration-300 shadow-lg bg-red-700 hover:bg-red-600 hover:text-gray-600" }`}>-</button>     
                </div>
            </div>
            <div className="mt-2">
                <button onClick={handleAddCart} type="submit" className="ml-[6px] py-[2px] px-[5px] rounded-md text-gray-400 bg-slate-700 hover:bg-slate-600 border-[0.1px] shadow-lg border-gray-500 hover:text-white ease-in-out duration-300"><a href="#">Agregar al carrito</a></button>
            </div>
        </div>

    )
}


export default Contador

