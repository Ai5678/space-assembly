import {clsx} from "clsx"
import type {JSX} from "react"

type KeyboardProps = {
    onGuess: (letter:string) => void;
    guessedLetters: string[];
    currentWord: string;
    isGameOver: boolean;
}

export default function Keyboard({onGuess, guessedLetters, currentWord, isGameOver}: KeyboardProps): JSX.Element{
    const alphabet: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

    const keyboardElements: JSX.Element[] = alphabet.map((letter: string, index: number): JSX.Element =>{
        const isGuessed: boolean = guessedLetters.includes(letter)
        const isInWord: boolean = currentWord.toUpperCase().includes(letter)
        const buttonClassNames: string = clsx({
            "isCorrect" : isGuessed && isInWord,
            "isWrong" : isGuessed && !isInWord,
        })
        return(
        <button key={index} className={buttonClassNames} onClick={() => onGuess(letter)} disabled={isGameOver}>{letter}</button>
        )
    })
    return(
        <section className="keyboard-container">
            {keyboardElements}
        </section>
    )
}