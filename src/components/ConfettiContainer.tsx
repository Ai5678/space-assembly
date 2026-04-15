import Confetti from "react-confetti"
import type {JSX} from "react"

export default function ConfettiContainer({iswin}: { iswin: boolean }): JSX.Element | null {
    if (!iswin) {
        return null
    } else {
        return (
            <Confetti
                recycle={false}
                numberOfPieces={1000}
            />
        )
    }
}