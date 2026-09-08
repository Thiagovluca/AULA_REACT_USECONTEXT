import DobroNumber from "./DobroNumber";
import TriploNumber from "./TriploNumber";

export default function MultiplosNumber() {

    return (
        <div className="bg-gray-200 mt-4 p-4">
            <h3 className="text-lg font-bold">Múltiplos Number</h3>
            <DobroNumber/>
            <TriploNumber/>
        </div>
    )
}