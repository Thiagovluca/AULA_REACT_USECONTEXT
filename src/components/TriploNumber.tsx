import { useContext } from "react"
import { NumberContext } from "../context/NumberContext"

export default function TriploNumber() {

    const {number} = useContext(NumberContext)


    return (
        <div className="mt-4 bg-purple-400  p-4">
            <h3 className="text-lg font-bold"> Triplo Number: {number * 3}</h3>
        </div>
    )
}