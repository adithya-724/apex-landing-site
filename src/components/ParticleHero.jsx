import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Gauge, Route, Timer, Flag } from 'lucide-react'
import SpeedLines from './SpeedLines'
import TiltCard from './TiltCard'

const STATS = [
  { icon: Gauge, value: '60 KM/H', label: 'Top Speed' },
  { icon: Route, value: '800M', label: 'Pro Track' },
  { icon: Timer, value: '42.3S', label: 'Lap Record' },
]

export default function ParticleHero({ particleCount = 20 }) {
  const containerRef = useRef(null)
  const particlesRef = useRef([])
  const animationFrameRef = useRef()
  const startTimeRef = useRef(Date.now())
  const lastMouseMoveRef = useRef(Date.now())
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [staticCursor, setStaticCursor] = useState({ x: 0, y: 0 })
  const [isAutoMode, setIsAutoMode] = useState(true)
  const [isStaticAnimation, setIsStaticAnimation] = useState(false)
  const timeoutRef = useRef()

  const rows = particleCount
  const totalParticles = rows * rows

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    container.innerHTML = ''
    particlesRef.current = []

    for (let i = 0; i < totalParticles; i++) {
      const particle = document.createElement('div')
      const row = Math.floor(i / rows)
      const col = i % rows
      const centerRow = Math.floor(rows / 2)
      const centerCol = Math.floor(rows / 2)
      const distanceFromCenter = Math.sqrt(
        Math.pow(row - centerRow, 2) + Math.pow(col - centerCol, 2)
      )

      const maxDist = Math.sqrt(centerRow * centerRow + centerCol * centerCol)
      const normalizedDist = distanceFromCenter / maxDist
      const scale = Math.max(0.15, 1.4 - normalizedDist * 1.2)
      const opacity = Math.max(0.03, 0.9 - normalizedDist * 0.85)
      // Inner = bright red, mid = crimson, outer = gold/amber fade
      const hue = normalizedDist < 0.3 ? 350 : normalizedDist < 0.6 ? 10 : 35
      const saturation = normalizedDist < 0.4 ? 90 : 80
      const lightness = Math.max(10, 70 - normalizedDist * 55)
      const glowSize = Math.max(0.2, 8 - normalizedDist * 7)

      particle.className = 'absolute rounded-full will-change-transform'
      particle.style.cssText = `
        width: ${normalizedDist < 0.2 ? '0.5rem' : '0.3rem'};
        height: ${normalizedDist < 0.2 ? '0.5rem' : '0.3rem'};
        left: ${col * 1.4}rem;
        top: ${row * 1.4}rem;
        transform: scale(${scale});
        opacity: ${opacity};
        background: hsl(${hue}, ${saturation}%, ${lightness}%);
        box-shadow: 0 0 ${glowSize * 0.25}rem 0 hsl(${hue}, 85%, 50%);
        mix-blend-mode: screen;
        z-index: ${Math.round(totalParticles - distanceFromCenter * 5)};
        transition: transform 0.05s linear;
      `

      container.appendChild(particle)
      particlesRef.current.push(particle)
    }
  }, [rows, totalParticles])

  useEffect(() => {
    const animate = () => {
      const currentTime = (Date.now() - startTimeRef.current) * 0.001
      if (isAutoMode) {
        const x = Math.sin(currentTime * 0.35) * 200 + Math.sin(currentTime * 0.18) * 100
        const y = Math.cos(currentTime * 0.25) * 140 + Math.cos(currentTime * 0.22) * 70
        setCursor({ x, y })
      } else if (isStaticAnimation) {
        const timeSinceLastMove = Date.now() - lastMouseMoveRef.current
        if (timeSinceLastMove > 200) {
          const strength = Math.min((timeSinceLastMove - 200) / 1000, 1)
          setCursor({
            x: staticCursor.x + Math.sin(currentTime * 1.5) * 20 * strength,
            y: staticCursor.y + Math.cos(currentTime * 1.2) * 16 * strength,
          })
        }
      }
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    animate()
    return () => { if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current) }
  }, [isAutoMode, isStaticAnimation, staticCursor])

  useEffect(() => {
    particlesRef.current.forEach((particle, i) => {
      const row = Math.floor(i / rows)
      const col = i % rows
      const centerRow = Math.floor(rows / 2)
      const centerCol = Math.floor(rows / 2)
      const distanceFromCenter = Math.sqrt(Math.pow(row - centerRow, 2) + Math.pow(col - centerCol, 2))
      const maxDist = Math.sqrt(centerRow * centerRow + centerCol * centerCol)
      const normalizedDist = distanceFromCenter / maxDist

      const delay = distanceFromCenter * 5
      const originalScale = Math.max(0.15, 1.4 - normalizedDist * 1.2)
      const dampening = Math.max(0.25, 1 - normalizedDist * 0.06)

      setTimeout(() => {
        particle.style.transform = `translate(${cursor.x * dampening}px, ${cursor.y * dampening}px) scale(${originalScale})`
        particle.style.transition = `transform ${90 + distanceFromCenter * 12}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`
      }, delay)
    })
  }, [cursor, rows])

  const handlePointerMove = (e) => {
    const event = e.touches ? e.touches[0] : e
    const newCursor = {
      x: (event.clientX - window.innerWidth / 2) * 0.7,
      y: (event.clientY - window.innerHeight / 2) * 0.7,
    }
    setCursor(newCursor)
    setStaticCursor(newCursor)
    setIsAutoMode(false)
    setIsStaticAnimation(false)
    lastMouseMoveRef.current = Date.now()
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setIsStaticAnimation(true), 500)
    setTimeout(() => {
      if (Date.now() - lastMouseMoveRef.current >= 4000) {
        setIsAutoMode(true)
        setIsStaticAnimation(false)
        startTimeRef.current = Date.now()
      }
    }, 4000)
  }

  return (
    <section
      className="relative w-full min-h-screen bg-apex-black overflow-hidden"
      onMouseMove={handlePointerMove}
      onTouchMove={handlePointerMove}
    >
      {/* Checkered flag pattern — subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #fff 25%, transparent 25%),
            linear-gradient(-45deg, #fff 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #fff 75%),
            linear-gradient(-45deg, transparent 75%, #fff 75%)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
        }}
      />

      {/* Massive radial glow behind particles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-red-600/15 via-red-900/10 to-transparent blur-3xl" />
        <div className="absolute inset-[15%] rounded-full bg-gradient-to-b from-amber-500/10 via-transparent to-transparent blur-2xl" />
      </div>

      {/* Speed lines canvas */}
      <SpeedLines color="#E11D48" count={25} className="opacity-[0.08]" />

      {/* Particle Grid */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={containerRef}
          className="relative"
          style={{ width: `${rows * 1.4}rem`, height: `${rows * 1.4}rem` }}
        />
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-apex-red/20 pointer-events-none" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-apex-red/20 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-apex-gold/20 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-apex-gold/20 pointer-events-none" />

      {/* Horizontal racing stripes */}
      <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-apex-red/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-apex-gold/10 to-transparent pointer-events-none" />

      {/* Left / Right ambient glows */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-red-950/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-950/10 to-transparent pointer-events-none" />

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-24">
        <div className="text-center max-w-5xl mx-auto mt-8">
          {/* Tagline pill */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] backdrop-blur-md rounded-full text-sm text-apex-gold uppercase tracking-[0.25em] font-body border border-apex-gold/10">
              <Flag className="w-3.5 h-3.5" />
              India's Premier Indoor Karting
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-7xl md:text-[9rem] lg:text-[12rem] font-display font-black tracking-tighter leading-[0.85] mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="bg-gradient-to-b from-white via-red-200 to-red-600 bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 40px rgba(225,29,72,0.3))' }}>
              FEEL THE
            </span>
            <br />
            <span className="bg-gradient-to-b from-amber-200 via-amber-400 to-amber-700 bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 30px rgba(245,158,11,0.25))' }}>
              SPEED
            </span>
          </motion.h1>

          {/* Divider with dot */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-apex-red" />
            <div className="w-2 h-2 rounded-full bg-apex-red animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-apex-red" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-neutral-400 font-body max-w-2xl mx-auto leading-relaxed mb-14"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Experience the rush of professional indoor karting on India's most advanced racing circuit.
            Challenge your limits. Beat the clock. Own the podium.
          </motion.p>

          {/* Stat Badges — 3D Tilt */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-14">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.12 }}
              >
                <TiltCard
                  className="bg-black/50 backdrop-blur-lg border border-white/[0.06] px-7 py-4 flex items-center gap-4 group hover:border-apex-gold/30 hover:bg-white/[0.03] transition-all duration-300 cursor-default"
                  glowColor="rgba(245,158,11,0.12)"
                >
                  <div className="w-10 h-10 rounded-full bg-apex-red/10 flex items-center justify-center group-hover:bg-apex-red/20 transition-colors">
                    <stat.icon className="w-5 h-5 text-apex-gold" />
                  </div>
                  <div>
                    <span className="font-display text-xl text-white block leading-tight">{stat.value}</span>
                    <span className="text-apex-muted text-[10px] uppercase tracking-widest font-body">{stat.label}</span>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/booking"
              className="group relative px-12 py-5 bg-apex-red hover:bg-apex-red-light text-white font-display text-lg tracking-wider uppercase transition-all duration-300 overflow-hidden box-glow-red cursor-pointer active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                BOOK YOUR RACE
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>

            <Link
              to="/experiences"
              className="px-8 py-[18px] border border-white/15 hover:border-apex-gold/50 text-white hover:text-apex-gold font-display tracking-wider uppercase transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              View Experiences
            </Link>
          </div>

          {/* Interactive hint */}
          <div className="mt-20 flex items-center justify-center gap-4 text-white/15 text-[10px] uppercase tracking-[0.3em] font-body">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-white/15" />
            <span className="animate-pulse">Move cursor to interact</span>
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-white/15" />
          </div>
        </div>
      </div>
    </section>
  )
}
