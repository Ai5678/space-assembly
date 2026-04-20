import {clsx} from "clsx"
import type { JSX } from "react"

type GameStatusProps = {
    isWin: boolean
    isLose: boolean
    isGameOver: boolean
    farewellText: string | null
    
}

export default function Status({isWin, isLose, isGameOver, farewellText}: GameStatusProps): JSX.Element | string{

    const statusClassNames: string = clsx({
        "win": isWin,
        "lose": isLose,
        "farewell": farewellText,
    })

    return (
    <section className={clsx("status", statusClassNames)}>
        {
            isGameOver ? (
                isWin ? (
                    <>
                        <h2>You win!</h2>
                        <p>Well done! 🥳</p>
                    </>
                ) : (
                    <>
                        <h2>You lose!</h2>
                        <p>Try again! 💪</p>
                    </>
                )
            ) : (
                <p>{farewellText}</p>
            )
        }
    </section>
    )
}