import monsterImg from "../../images/monster.png"
import Status from "./Status"

type RightPanelProps = {
  isWin: boolean
  isLose: boolean
  isGameOver: boolean
  farewellText: string | null
}

export default function RightPanel({ isWin, isLose, isGameOver, farewellText }: RightPanelProps) {
  return (
    <aside className="side-panel right-panel">
      <Status isWin={isWin} isLose={isLose} isGameOver={isGameOver} farewellText={farewellText ?? ""} />
      <div className="monster-container">
        <img src={monsterImg} alt="alien monster" className="monster-img" />
      </div>
    </aside>
  )
}
