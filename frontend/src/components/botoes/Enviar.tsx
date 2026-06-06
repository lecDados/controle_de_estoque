import "./Enviar.css"
type BotaoProps = {
    texto: string
}

export function Enviar({ texto }: BotaoProps) {
    return (
        <button id="Enviar">{texto}</button>
    )
}