type Props = {
    count: number
    aumentar: () => void
}

export default function Nivel2({ count, aumentar }: Props) {

    return (
        <div>
            <h2>Nível 2</h2>
            <p>Cont: {count}</p>
            <button onClick={aumentar}>Clique</button>
        </div>
    )
}