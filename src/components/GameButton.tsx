import type {JSX} from "react"

type GameButtonProps = {
    resetGame: () => void;
}

export default function GameButton({resetGame}: GameButtonProps): JSX.Element{
    return(
        <button className="new-game" onClick={resetGame}>New Game</button>
    )
}