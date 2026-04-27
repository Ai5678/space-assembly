import { useState, useEffect } from "react"

import Background from "./components/Background"
import Header from "./components/Header"
import Chips from "./components/Chips"
import Answer from "./components/Answer"
import Keyboard from "./components/Keyboard"
import GameButton from "./components/GameButton"
import ConfettiContainer from "./components/ConfettiContainer"
import RightPanel from "./components/RightPanel"
import {getFarewellText, getRandomWord} from "./utils"
import arcadeCabinetImg from "../images/arcade_cabinet.png"

export default function AssemblyEndgame() {
    const total_lives = 9
  // state values
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])
    console.log(guessedLetters)
    const [currentWord, setCurrentWord] = useState<string>(():string => getRandomWord())
    console.log("currentWord", currentWord)

    // derived values
    const wrongGuessesCount: number = guessedLetters.filter((letter: string): boolean => !currentWord.toUpperCase().includes(letter)).length
    console.log("wrongGuessesCount", wrongGuessesCount)

    const isWin: boolean = currentWord.toUpperCase().split("").every((letter: string): boolean => guessedLetters.includes(letter))
    const isLose: boolean = !isWin && wrongGuessesCount >= total_lives
    const isGameOver: boolean = isWin || isLose
    const lastGuessLetter: string = guessedLetters[guessedLetters.length - 1]
    const isLastGuessWrong: boolean = Boolean(lastGuessLetter) && !currentWord.toUpperCase().includes(lastGuessLetter)
    const farewellText: string | null = isLastGuessWrong ? getFarewellText(lastGuessLetter) : null

    function handleGuess(letter: string): void {
        if (isGameOver) return
        setGuessedLetters((current: string[]): string[] => current.includes(letter) ? current : [...current,letter])
    }
    useEffect(() : (()=> void )=> {
        function handleKeyDown(event: KeyboardEvent): void {
            if (isGameOver) return
            const letter: string = event.key.toUpperCase()
            if (!letter.match(/^[A-Z]$/)) return
            setGuessedLetters((current: string[]): string[] => current.includes(letter) ? current : [...current, letter])
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [isGameOver])

    function resetGame(): void {
        setCurrentWord(getRandomWord())
        setGuessedLetters([])
    }

    return (
        <>
            <Background />
            <ConfettiContainer iswin={isWin} />
            <div className="page-layout">
                <Header />
                <main className="game-layout">
                    {/* left panel */}
                    <aside className="side-panel left-panel">
                        <Chips wrongGuessesCount={wrongGuessesCount} total_lives={total_lives}/>
                    </aside>

                    {/* center panel */}
                    <div className="center-panel"  style={{backgroundImage: `url(${arcadeCabinetImg})`}}>
                        <div className={"screen-content"}>
                        <Answer currentWord={currentWord.toUpperCase()} guessedLetters={guessedLetters} isLose={isLose}/>
                        <Keyboard onGuess={handleGuess} guessedLetters={guessedLetters} currentWord={currentWord} isGameOver={isGameOver}/>
                        {isGameOver && <GameButton resetGame={resetGame} />}
                        </div>
                    </div>

                    {/* right panel */}
                    <RightPanel isWin={isWin} isLose={isLose} isGameOver={isGameOver} farewellText={farewellText}/>
                </main>
                <footer className="credits">
                    <a href="https://www.flaticon.com/free-icons/coin" title="coin icons" target="_blank" rel="noreferrer">Coin icons by smashingstocks – Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/character" title="character icons" target="_blank" rel="noreferrer">Character icons by redempticon – Flaticon</a>
                    <span>"Watercolor violet outer space background" by Freepik</span>
                </footer>
            </div>
        </>
    )
}