import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Rahul Kapoor',
    title: 'Professional Drifter',
    initials: 'RK',
    rating: 5,
    text: '"The best indoor track in India hands down. The grip levels and the atmosphere are insane!"',
  },
  {
    name: 'Ananya Sharma',
    title: 'Adventure Enthusiast',
    initials: 'AS',
    rating: 5,
    text: '"Took my son for the Junior Racers session. Safety standards are top-notch. He loved every second."',
  },
  {
    name: 'Maanav Varma',
    title: 'Sim Racer',
    initials: 'MV',
    rating: 4,
    text: '"Technical track with great overtaking spots. The telemetry data provided after the race is pro level."',
  },
  {
    name: 'Priya Menon',
    title: 'Corporate Event Manager',
    initials: 'PM',
    rating: 5,
    text: '"Booked for our team of 30. Flawless organization, incredible energy. Everyone is still talking about it."',
  },
]

export default function TestimonialSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length)

  return (
    <section className="py-24 bg-apex-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-body text-apex-red uppercase tracking-widest text-sm font-bold">
            Driver Feedback
          </span>
          <h2 className="font-display text-4xl text-white uppercase mt-2">
            REAL SPEED. <span className="text-apex-gold">REAL STORIES.</span>
          </h2>
        </div>

        {/* Desktop: show all cards */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        {/* Mobile: slider */}
        <div className="lg:hidden relative">
          <TestimonialCard testimonial={TESTIMONIALS[active]} />
          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={prev} className="p-2 text-apex-muted hover:text-white transition-colors cursor-pointer" aria-label="Previous testimonial">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    i === active ? 'bg-apex-red w-6' : 'bg-apex-surface-high'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 text-apex-muted hover:text-white transition-colors cursor-pointer" aria-label="Next testimonial">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-apex-surface p-8 border-l border-apex-red/30 transition-all hover:border-apex-red/60">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating ? 'text-apex-gold fill-apex-gold' : 'text-apex-surface-high'}`}
          />
        ))}
      </div>
      <p className="text-apex-text italic font-body mb-6 leading-relaxed">{testimonial.text}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-apex-surface-high flex items-center justify-center font-bold text-apex-red text-sm">
          {testimonial.initials}
        </div>
        <div>
          <span className="block text-white font-bold text-xs uppercase">{testimonial.name}</span>
          <span className="block text-apex-muted text-[10px] uppercase">{testimonial.title}</span>
        </div>
      </div>
    </div>
  )
}
