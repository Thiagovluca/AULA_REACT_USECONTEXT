import { useContext } from "react";
import { NumberContext } from "../context/NumberContext";


export default function Number() {

    const {number, aumentar} = useContext(NumberContext)

    return(
        <div>
            <h2 className=" bg-orange-400 text-lg font-bold">  Número: {number}</h2>
            <button className="bg-blue-600 text-white font-bold py-2 px-4 
            rounded" onClick={aumentar}>Aumentar</button>
        </div>
    )

}