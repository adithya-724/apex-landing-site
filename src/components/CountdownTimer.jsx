import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    function getNextRaceTime() {
      const now = new Date()
      const slots = [10, 12, 14, 16, 18, 20, 22]
      for (const hour of slots) {
        const slot = new Date(now)
        slot.setHours(hour, 0, 0, 0)
        if (slot > now) return slot
      }
      const tomorrow = new Date(now)
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(slots[0], 0, 0, 0)
      return tomorrow
    }

    const timer = setInterval(() => {
      const next = getNextRaceTime()
      const diff = next - new Date()
      setTimeLeft({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <section className="py-20 bg-apex-surface border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="font-body text-apex-red uppercase tracking-[0.3em] text-sm font-bold mb-4">
          Next Race Starts In
        </p>
        <div className="flex justify-center gap-4 md:gap-8">
          {[
            { value: pad(timeLeft.hours), label: 'Hours' },
            { value: pad(timeLeft.minutes), label: 'Minutes' },
            { value: pad(timeLeft.seconds), label: 'Seconds' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="bg-apex-black border border-apex-red/30 rounded-lg px-6 py-4 md:px-10 md:py-6 box-glow-red">
                <span className="font-display text-4xl md:text-6xl text-white text-glow-red">
                  {value}
                </span>
              </div>
              <span className="text-apex-muted text-xs uppercase tracking-widest mt-3 font-body">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
