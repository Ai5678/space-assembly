import type {JSX} from "react"

type AnswerProps = {
    currentWord: string;
    guessedLetters: string[];
    isLose: boolean;
}

export default function Answer({currentWord, guessedLetters, isLose}: AnswerProps): JSX.Element{

    const letterElements: JSX.Element[] = currentWord.split("").map((letter: string, index: number): JSX.Element => {
        
        const isGuessed: boolean = guessedLetters.includes(letter)
        const isMissed: boolean = isLose && !isGuessed
        
        return(
            <span key={index} className={`letter ${isMissed ? "missed" : ""}`}>
                {isGuessed || isLose ? letter : ""}
            </span>
        )
    })

    return(
        <section className="letters-container">
            {letterElements}
        </section>
    )
}