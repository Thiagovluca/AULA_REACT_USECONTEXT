import Nivel2 from "./Nivel2"

type Props = {
    count: number
    aumentar: () => void
}

export default function Nivel1({ count, aumentar }: Props) {

    return (
        <div>
            <h2>Nível 1</h2>
            <p>Cont: {count}</p>
            <button onClick={aumentar}>Clique</button>
            <Nivel2 count={count} aumentar={aumentar}/>
        </div>
    )

}