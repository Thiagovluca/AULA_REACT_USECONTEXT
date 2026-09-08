import { useContext } from "react"
import { NumberContext } from "../context/NumberContext"

export default function DobroNumber() {

    const {number} = useContext(NumberContext)


    return (
        <div className="mt-4 bg-green-400  p-4">
            <h3 className="text-lg font-bold">Dobro Number: {number * 2}</h3>
        </div>
    )

}