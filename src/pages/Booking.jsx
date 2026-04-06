import { useState } from 'react'
import { Calendar, ChevronLeft, ChevronRight, Minus, Plus, Zap } from 'lucide-react'

const TIME_SLOTS = [
  { time: '10:00 AM — 01:00 PM', label: 'Morning Shift', available: true },
  { time: '02:00 PM — 06:00 PM', label: 'Afternoon', available: true },
  { time: '07:00 PM — 11:00 PM', label: 'Night Session', available: true },
]

const EXPERIENCE_OPTIONS = [
  { id: 'junior', name: 'Junior', tier: 'Rookie Tier', price: 799, features: ['6.5HP Karts', '10 Min Session'] },
  { id: 'grandprix', name: 'Grand Prix', tier: 'Pro Tier', price: 1299, featured: true, features: ['9HP Sodi Karts', '20 Min Session', 'Telemetry Print'] },
  { id: 'pro', name: 'Pro Circuit', tier: 'Elite Tier', price: 1999, features: ['13HP Karts', '40 Min Session'] },
]

const CALENDAR_DAYS = (() => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const offset = firstDay === 0 ? 6 : firstDay - 1
  const days = []
  for (let i = 0; i < offset; i++) days.push(null)
  for (let i = 1; i <= daysInMonth; i++) days.push(i)
  return days
})()

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(new Date().getDate() + 1)
  const [selectedSlot, setSelectedSlot] = useState(0)
  const [selectedExperience, setSelectedExperience] = useState('grandprix')
  const [racers, setRacers] = useState(2)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const exp = EXPERIENCE_OPTIONS.find((e) => e.id === selectedExperience)
  const subtotal = exp.price * racers
  const gst = Math.round(subtotal * 0.18)
  const total = subtotal + gst

  const monthName = new Date().toLocaleString('default', { month: 'long', year: 'numeric' })

  return (
    <main className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <header className="mb-16 relative">
        <div className="absolute -left-12 -top-12 w-64 h-24 bg-apex-red/10 -skew-x-12 blur-3xl" />
        <h1 className="text-6xl md:text-8xl font-display uppercase tracking-tighter relative z-10">
          <span className="text-apex-red text-glow-red">BOOK</span> YOUR RACE
        </h1>
        <p className="text-apex-muted tracking-[0.3em] text-sm mt-4 uppercase">
          Select your date, experience, and hit the track
        </p>
      </header>

      {/* Progress Bar */}
      <div className="space-y-4 mb-12">
        <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] font-bold text-apex-muted">
          <span className="text-apex-red">01 Select Date</span>
          <span>02 Experience</span>
          <span>03 Details</span>
          <span>04 Confirm</span>
        </div>
        <div className="h-1.5 w-full bg-apex-surface-high rounded-full overflow-hidden relative">
          <div className="h-full w-1/4 bg-gradient-to-r from-apex-red-light to-apex-red relative">
            <div className="absolute right-0 top-0 h-full w-2 bg-apex-red-light blur-sm" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-8 space-y-12">
          {/* Date & Time */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold font-display uppercase tracking-tight flex items-center gap-3">
              <Calendar className="w-5 h-5 text-apex-red" />
              01. Select Race Schedule
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Calendar */}
              <div className="bg-apex-surface p-6 rounded-lg border border-apex-border/30">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold uppercase tracking-widest text-xs">{monthName}</span>
                  <div className="flex gap-4">
                    <button className="text-apex-muted hover:text-white cursor-pointer" aria-label="Previous month">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="text-apex-muted hover:text-white cursor-pointer" aria-label="Next month">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-[10px] text-apex-muted mb-4 uppercase">
                  {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {CALENDAR_DAYS.map((day, i) => (
                    <div key={i}>
                      {day ? (
                        <button
                          onClick={() => day > new Date().getDate() && setSelectedDate(day)}
                          className={`aspect-square flex items-center justify-center text-sm rounded cursor-pointer transition-all ${
                            day === selectedDate
                              ? 'bg-apex-red text-white font-bold box-glow-red'
                              : day <= new Date().getDate()
                              ? 'text-apex-muted/30'
                              : 'hover:bg-apex-surface-high'
                          }`}
                          disabled={day <= new Date().getDate()}
                        >
                          {day}
                        </button>
                      ) : (
                        <div />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="space-y-4">
                <div className="text-xs uppercase tracking-widest text-apex-muted mb-2">Available Windows</div>
                <div className="grid grid-cols-1 gap-3">
                  {TIME_SLOTS.map((slot, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedSlot(i)}
                      className={`flex items-center justify-between p-4 transition-all cursor-pointer ${
                        i === selectedSlot
                          ? 'bg-apex-surface border-l-2 border-apex-red'
                          : 'bg-apex-black border border-apex-border/30 hover:bg-apex-surface'
                      }`}
                    >
                      <span className="text-sm font-bold">{slot.time}</span>
                      <span className={`text-[10px] px-2 py-1 rounded uppercase ${
                        i === selectedSlot ? 'bg-amber-900/30 text-apex-gold' : 'bg-apex-surface-high text-apex-muted'
                      }`}>
                        {slot.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience Selection */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold font-display uppercase tracking-tight flex items-center gap-3">
              <Zap className="w-5 h-5 text-apex-red" />
              02. Choose Your Machine
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {EXPERIENCE_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedExperience(opt.id)}
                  className={`relative text-left p-5 rounded-lg transition-all cursor-pointer ${
                    selectedExperience === opt.id
                      ? 'bg-apex-surface border-2 border-apex-red shadow-[0_0_30px_rgba(225,29,72,0.15)]'
                      : 'bg-apex-black border border-apex-border/30 hover:border-apex-red/50'
                  } ${opt.featured && selectedExperience === opt.id ? 'scale-105 z-10' : ''}`}
                >
                  {opt.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-apex-red text-white text-[10px] px-3 py-1 font-bold uppercase tracking-tighter font-display">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="text-[10px] uppercase tracking-widest text-apex-muted mb-1">{opt.tier}</div>
                  <div className="font-display text-xl mb-4">{opt.name.toUpperCase()}</div>
                  <div className="text-2xl font-bold text-apex-gold mb-6">₹{opt.price.toLocaleString()}</div>
                  <ul className="text-[10px] space-y-2 uppercase tracking-tight text-apex-muted">
                    {opt.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-apex-red rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>
          </section>

          {/* Pilot Details */}
          <section className="space-y-6">
            <h3 className="text-xl font-bold font-display uppercase tracking-tight flex items-center gap-3">
              <span className="w-5 h-5 text-apex-red font-display text-sm flex items-center justify-center">03</span>
              Pilot Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-apex-surface p-8 rounded-lg">
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] uppercase tracking-widest text-apex-muted" htmlFor="racers">Number of Racers</label>
                <div className="flex items-center gap-4 bg-apex-black border-b-2 border-apex-red p-1 w-fit">
                  <button
                    onClick={() => setRacers(Math.max(1, racers - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-apex-surface-high transition-colors cursor-pointer"
                    aria-label="Decrease racers"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-xl font-bold font-display">{racers}</span>
                  <button
                    onClick={() => setRacers(Math.min(10, racers + 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-apex-surface-high transition-colors cursor-pointer"
                    aria-label="Increase racers"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-apex-muted" htmlFor="name">Lead Pilot Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="ENTER FULL NAME"
                  className="w-full bg-apex-surface-high border-none border-b-2 border-apex-red/30 focus:border-apex-red focus:ring-0 px-4 py-3 text-sm placeholder:text-apex-muted/30 font-body"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-apex-muted" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="PILOT@EMAIL.COM"
                  className="w-full bg-apex-surface-high border-none border-b-2 border-apex-red/30 focus:border-apex-red focus:ring-0 px-4 py-3 text-sm placeholder:text-apex-muted/30 font-body"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] uppercase tracking-widest text-apex-muted" htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 00000 00000"
                  className="w-full bg-apex-surface-high border-none border-b-2 border-apex-red/30 focus:border-apex-red focus:ring-0 px-4 py-3 text-sm placeholder:text-apex-muted/30 font-body"
                />
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN — Sticky Summary */}
        <aside className="lg:col-span-4 lg:sticky lg:top-32">
          <div className="bg-apex-surface p-8 rounded-lg border border-apex-border/30 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-5 rotate-12">
              <Zap className="w-48 h-48" />
            </div>
            <h4 className="text-xl font-bold font-display uppercase mb-8 border-b border-apex-border/20 pb-4">
              BOOKING SUMMARY
            </h4>
            <div className="space-y-6 mb-8">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-apex-muted">Race Window</div>
                  <div className="font-bold text-sm">
                    {monthName.split(' ')[0]} {selectedDate}, {new Date().getFullYear()}
                  </div>
                  <div className="text-xs text-apex-muted">{TIME_SLOTS[selectedSlot].time}</div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-apex-muted">Configuration</div>
                  <div className="font-bold text-sm">{exp.name} Tier</div>
                  <div className="text-xs text-apex-muted">{racers} Racers x ₹{exp.price.toLocaleString()}</div>
                </div>
              </div>
            </div>

            <div className="space-y-3 border-t border-apex-border/20 pt-6">
              <div className="flex justify-between text-sm">
                <span className="text-apex-muted uppercase tracking-wider">Subtotal</span>
                <span className="font-bold">₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-apex-muted uppercase tracking-wider">GST (18%)</span>
                <span className="font-bold">₹{gst.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pt-4 mt-2 border-t border-apex-red/20">
                <span className="font-display uppercase tracking-tighter text-lg">Total</span>
                <span className="text-2xl font-black text-apex-gold text-glow-gold">₹{total.toLocaleString()}</span>
              </div>
            </div>

            <button className="w-full mt-8 bg-apex-red text-white py-4 rounded font-bold font-display uppercase tracking-wider animate-pulse-glow hover:bg-apex-red-light transition-all flex items-center justify-center gap-3 cursor-pointer">
              CONFIRM BOOKING
              <Zap className="w-5 h-5" />
            </button>
            <p className="text-center text-[10px] text-apex-muted mt-4 uppercase tracking-[0.1em]">
              By confirming, you agree to our Safety Waivers
            </p>
          </div>

          {/* Live Status */}
          <div className="mt-6 p-6 bg-apex-surface border-l-2 border-apex-gold rounded-r-lg">
            <div className="flex items-center gap-4">
              <img
                className="w-16 h-16 rounded-lg object-cover grayscale hover:grayscale-0 transition-all"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAo2XB6kmkOCDei3ur63_0Rs1vs_Fhnz-qs6ytrDeDW-_oq3ENBFnqtCbjA5woL-S9jCK3d6a9XY5MVDmNmtqtAQuqnYAdw3YZmtIumRPdpyF9hhMs9FC-o6Pz3HD1KpM0Fbsg6rZEJoRtBLeV_j0ms6uSDWg2Ll8XI1kursM9zDlrO8mZeewBvkUgSt42oXKu01IPeekgVr0PeRNEUlXJDExnURfRltEh2D0reHlkb2VnwuJcw1n4HsVaypmhcwt_hSdssPBX3NQ"
                alt="Go-kart tire close up"
              />
              <div>
                <div className="text-[10px] font-bold text-apex-gold uppercase tracking-[0.2em]">Live Status</div>
                <div className="text-sm font-bold uppercase font-display">Track: Circuit A</div>
                <div className="text-[10px] text-apex-muted uppercase">Current Fast Lap: 42.103s</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
