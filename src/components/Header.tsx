import type {JSX} from "react"
import {motion} from "framer-motion"

export default function Header(): JSX.Element {
    return (
        <header>
            <h1>
                ARC
                <motion.span
                    animate={{
                        color: [
                            "#FF00FF",            // on
                            "#530B58",            // flicker off
                            "#FF00FF",            // snap back
                            "#530B58",            // off again
                            "#530B58",            // stay off
                            "#FF00FF",            // on
                        ],
                        opacity: [1, 0.2, 1, 0.5, 0.15, 1],
                    }}
                    transition={{
                        duration: 2.5,
                        times: [0, 0.05, 0.08, 0.35, 0.37, 0.45],
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "steps(1, end)" as any,
                    }}
                >
                    A
                </motion.span>
                DE
            </h1>
        </header>
    )
}