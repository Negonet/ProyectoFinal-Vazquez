import { Link } from "react-router-dom"
import Banner from "../Banner/Banner.js"
import './Inicio.scss'

export const Inicio = () => {

    return (

        <div>
            <Banner />
            <div className=" h-30 max-sm:mt-[30px] max-sm:mb-[10px] items-center bg-slate-50 my-[0px] mx-auto rounded-lg max-sm:w-[330px] max-w-[900px] shadow-lg">
                <h2 className="text-gray-700 p-2 shadow-lg font-mono text-center max-sm:text-base text-3xl">Pagina de Inicio</h2>
            </div>
            <div className="max-sm:w-[350px] overflow-x-hidden max-w-[900px] items-center mx-auto">
                <hr className="mt-2"/>
                <div className="bg-white rounded-lg">
                    <Link className="bg-white" to="/itemListContainer">
                        <img alt="Lista de productos" className="efecto rounded-lg shadow-[0px_12px_50px_2px_rgba(0,0,0,0.56)] max-sm:mt-[6px] mt-[15px]" src="./imgs/pizarra.jpg"/>
                    </Link>                </div>
                <div className="bg-white rounded-lg">
                    <Link to="/products/corte">
                        <img alt="Promocion1" className="efecto rounded-lg shadow-[0px_12px_50px_2px_rgba(0,0,0,0.56)] max-sm:mt-[6px] mt-[15px]" src="./imgs/lamb2.jpg"/>
                    </Link>
                    
                </div>
                <div className="bg-white rounded-lg mb-20">
                    <Link className="bg-white" to="/products/menudencia">
                        <img alt="Promocion2" className="efecto rounded-lg shadow-[0px_12px_50px_2px_rgba(0,0,0,0.56)] max-sm:mt-[6px] mt-[15px]" src="./imgs/lamb3.jpg"/>
                    </Link>
                </div>            
                
            </div>
        </div>
    )
}