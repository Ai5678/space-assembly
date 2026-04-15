import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { useEffect, useState } from "react"

export default function Background() {
  const [init, setInit] = useState(false)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

  return (
    <>
      <div className="bg-image" />
      {init && (
        <Particles
          id="stars"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            particles: {
              number: { value: 300, density: { enable: true } },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: {
                value: { min: 0.2, max: 1 },
                animation: { enable: true, speed: 0.6},
              },
              size: { value: { min: 0.5, max: 2.5 } },
              move: {
                enable: true,
                speed: 0.8,
                direction: "outside",
                random: false,
                straight: true,
                // speed: 0.8,
                // direction: "none",
                // random: true,
                // straight: false,
                // outModes: { default: "out" },
              },
              links: { enable: false },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  )
}
