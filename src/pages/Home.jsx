import { Link } from 'react-router-dom'
import { ChevronRight, Trophy, Baby, Flag, Flame, Timer, Gauge } from 'lucide-react'
import ParticleHero from '../components/ParticleHero'
import SpeedLines from '../components/SpeedLines'
import CountdownTimer from '../components/CountdownTimer'
import { PHONE_NUMBER, PHONE_HREF } from '../constants'

const EXPERIENCES = [
  {
    title: 'Junior Racers',
    tagline: 'Ages 7-12',
    desc: 'Safe, fun, and fast-paced entry into racing. Perfect for young champions starting their journey.',
    duration: '10 MIN',
    speed: '30 KM/H',
    icon: Baby,
    gradient: 'from-green-500/20 via-emerald-600/10 to-transparent',
    borderColor: 'border-green-500/30',
    hoverBorder: 'hover:border-green-400/60',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-400',
    accentColor: 'text-green-400',
  },
  {
    title: 'Grand Prix',
    tagline: 'Ages 13+',
    desc: 'Our flagship experience. Full heat, qualifying rounds, and podium finish. The real deal.',
    duration: '15 MIN',
    speed: '50 KM/H',
    icon: Flag,
    featured: true,
    gradient: 'from-amber-500/20 via-amber-600/10 to-transparent',
    borderColor: 'border-apex-gold/40',
    hoverBorder: 'hover:border-apex-gold/80',
    iconBg: 'bg-apex-gold/10',
    iconColor: 'text-apex-gold',
    accentColor: 'text-apex-gold',
  },
  {
    title: 'Pro Circuit',
    tagline: 'Ages 18+',
    desc: 'For the elite. High-torque karts, aggressive lines, and championship-grade telemetry.',
    duration: '20 MIN',
    speed: '60 KM/H',
    icon: Flame,
    gradient: 'from-red-500/20 via-red-600/10 to-transparent',
    borderColor: 'border-apex-red/30',
    hoverBorder: 'hover:border-apex-red/60',
    iconBg: 'bg-apex-red/10',
    iconColor: 'text-apex-red',
    accentColor: 'text-apex-red',
  },
]

export default function Home() {
  return (
    <main>
      {/* INTERACTIVE PARTICLE HERO */}
      <ParticleHero particleCount={18} />

      {/* EXPERIENCES PREVIEW */}
      <section className="py-28 bg-apex-black relative overflow-hidden">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-apex-red uppercase tracking-[0.3em] text-xs font-bold font-body">Select Your Tier</span>
            <h2 className="font-display text-4xl md:text-6xl text-white uppercase mt-3 mb-4">
              CHOOSE YOUR <span className="text-apex-red">ADRENALINE</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-apex-red to-apex-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {EXPERIENCES.map((exp) => {
              const Icon = exp.icon
              return (
                <div
                  key={exp.title}
                  className={`group relative bg-apex-surface rounded-xl border ${exp.borderColor} ${exp.hoverBorder} transition-all duration-500 overflow-hidden cursor-pointer ${
                    exp.featured ? 'md:-translate-y-3 shadow-[0_0_50px_rgba(245,158,11,0.08)]' : ''
                  }`}
                >
                  {/* Top gradient wash */}
                  <div className={`absolute top-0 left-0 w-full h-40 bg-gradient-to-b ${exp.gradient} pointer-events-none`} />

                  {/* Most Popular badge */}
                  {exp.featured && (
                    <div className="absolute top-4 right-4 z-10 bg-apex-gold text-black font-bold text-[10px] tracking-widest px-3 py-1 uppercase rounded-full font-body">
                      Most Popular
                    </div>
                  )}

                  <div className="relative p-8 pt-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl ${exp.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${exp.iconColor}`} />
                    </div>

                    {/* Title + tagline */}
                    <div className="mb-4">
                      <h3 className="font-display text-2xl text-white uppercase mb-1">{exp.title}</h3>
                      <span className={`text-xs font-body uppercase tracking-widest ${exp.accentColor}`}>{exp.tagline}</span>
                    </div>

                    <p className="text-apex-muted text-sm mb-8 font-body leading-relaxed">{exp.desc}</p>

                    {/* Stats row */}
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <Timer className="w-3.5 h-3.5 text-apex-muted" />
                        <span className="text-xs text-apex-muted font-body">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gauge className="w-3.5 h-3.5 text-apex-muted" />
                        <span className="text-xs text-apex-muted font-body">{exp.speed}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* View all link */}
          <div className="text-center mt-12">
            <Link
              to="/experiences"
              className="inline-flex items-center gap-2 text-apex-muted hover:text-white font-body text-sm uppercase tracking-widest transition-colors cursor-pointer"
            >
              Compare all experiences
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* COUNTDOWN TIMER */}
      <CountdownTimer />

      {/* FINAL CTA */}
      <section className="py-28 bg-apex-surface relative overflow-hidden">
        <SpeedLines color="#F59E0B" count={12} className="opacity-[0.06]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-apex-red/10 to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-apex-gold/10 to-transparent" />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <Trophy className="w-12 h-12 text-apex-gold mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-6xl text-white uppercase mb-4">
            READY TO <span className="text-apex-red">RACE</span>?
          </h2>
          <p className="text-apex-muted mb-10 text-lg max-w-lg mx-auto">
            Walk in and experience the thrill of professional outdoor karting. No booking needed.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-apex-red text-white text-lg px-10 py-4 rounded-md font-display tracking-widest animate-pulse-glow hover:bg-apex-red-light active:scale-95 transition-all cursor-pointer"
          >
            CALL {PHONE_NUMBER}
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  )
}
