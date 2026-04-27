import type {JSX} from "react"
import {motion} from "framer-motion"
import coinImg from "../../images/coin.png"


type ChipsProps = {
    wrongGuessesCount: number
    total_lives: number
}

const coinVariants = {
    initial: { opacity: 0, y: -20, scale: 0.5 },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: i * 0.07, type: "spring" as const, stiffness: 260, damping: 18 },
    }),
    lost: {
        x: [0, -8, 8, -6, 6, -3, 3, 0],
        transition: { duration: 0.35 },
    },
}

export default function Chips({ wrongGuessesCount, total_lives}: ChipsProps): JSX.Element {
    return (
        <section className="coins-container">
            {Array.from({length: total_lives}, (_, i) => {
                const isLost = i < wrongGuessesCount
                const isJustLost = i === wrongGuessesCount - 1

                return(
                    <motion.div
                    key={i}
                    className={`coin-wrapper ${i % 2 !== 0 ? "coin-right-col" : ""}`}
                    custom={i}
                    variants={coinVariants}
                    initial="initial"
                    animate={isJustLost ? ["animate", "lost"] : "animate"}
                    >
                        <img src={coinImg} alt={`life ${i + 1}`} className={`coin-img ${isLost ? "coin-lost" : ""}`}
                        />
                    </motion.div>
                )
            })}
        </section>
    )
}