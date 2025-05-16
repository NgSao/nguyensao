"use client"


import { useEffect, useState } from "react"

export default function AnimatedStarsBackground() {
  const [stars, setStars] = useState<any[]>([])
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)

    const newStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.7 + 0.3,
      duration: Math.random() * 8 + 4,
      delay: Math.random() * 5,
      direction: Math.random() > 0.5 ? 1 : -1,
    }))
    setStars(newStars)
  }, [])

  if (!hasMounted) return null

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.y}%`,
            left: `${star.x}%`,
            opacity: star.opacity,
            animation: `
              twinkle ${star.duration}s ease-in-out ${star.delay}s infinite alternate,
              float ${star.duration * 2}s ease-in-out ${star.delay}s infinite ${star.direction > 0 ? "normal" : "reverse"}
            `,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes twinkle {
          0% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(10px) translateX(5px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }
      `}</style>
    </div>
  )
}
