import { useEffect, useRef } from 'react'

export default function SpeedLines({ color = '#E11D48', count = 30, className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const lines = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      length: 40 + Math.random() * 120,
      speed: 4 + Math.random() * 8,
      opacity: 0.1 + Math.random() * 0.3,
      width: 0.5 + Math.random() * 1.5,
    }))

    let animId
    const animate = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      for (const line of lines) {
        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(line.x + line.length, line.y - line.length * 0.15)
        ctx.strokeStyle = color
        ctx.globalAlpha = line.opacity
        ctx.lineWidth = line.width
        ctx.lineCap = 'round'
        ctx.stroke()

        line.x += line.speed
        if (line.x > w + line.length) {
          line.x = -line.length
          line.y = Math.random() * h
        }
      }

      ctx.globalAlpha = 1
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [color, count])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  )
}
