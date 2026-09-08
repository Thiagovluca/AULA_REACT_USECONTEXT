// Declara os tipos das informações:
import { createContext, createElement, useState } from "react";

type NumberContextValue = {
    number: number;
    aumentar: () => void;
}

// Declara as Informações:
export const NumberContext = createContext<NumberContextValue>({
    number: 0,
    aumentar: () => {}
})

// Criar uma Função para cofigurar as informações:
export function NumberContextProvider({children}: {children: React.ReactNode}) {
    
    const [number, setNumber] = useState(0)

    const aumentar = () => {
        setNumber(number + 1)
    }

    return createElement(
        NumberContext.Provider, { value: { number, aumentar } }, children
    )
}