import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function TiltCard({ children, className = '', glowColor = 'rgba(225,29,72,0.15)' }) {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x, { damping: 20, stiffness: 150 })
  const ySpring = useSpring(y, { damping: 20, stiffness: 150 })

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ['10deg', '-10deg'])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-10deg', '10deg'])

  const glowX = useTransform(xSpring, [-0.5, 0.5], ['0%', '100%'])
  const glowY = useTransform(ySpring, [-0.5, 0.5], ['0%', '100%'])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      transition={{ scale: { duration: 0.3 } }}
    >
      {/* Cursor-tracking glow */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none z-0 opacity-60"
          style={{
            background: `radial-gradient(circle at ${glowX} ${glowY}, ${glowColor}, transparent 70%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
        />
      )}

      {/* Content pushed forward in 3D space */}
      <div style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }} className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
