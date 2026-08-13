import { ChevronRight, Users, Timer, Gauge, Baby } from 'lucide-react'
import { PHONE_NUMBER, PHONE_HREF } from '../constants'

const TIERS = [
  {
    name: 'Level 1',
    tagline: '200cc',
    desc: 'A perfect starting point — full-power karts built for control and confidence on your first laps.',
    age: '16+ years',
    duration: '5 Minute Session',
    cc: '200cc Engine',
    borderColor: 'border-apex-red/50',
    tagColor: 'text-apex-red',
    // Placeholder photo — swap for the real Level 1 kart photo when available.
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0zcK4n62F2TqYofkJgJYF3gX4zpsI_2txIeXimWgBxjj1ohbFQgsdURq3j9SdlNijAytoh6ob2I-bOPwpNu3cT8CRkgjYrFATdIp4zSDfVf7zOXBpkWQJ8U5dgBQ-U-7Z9YJLR2Dous9U6-0ZDsE4MMplB4o38M0HHTZ5HFXnlEkfoexNsDkTkDuOKcfl0P3HwiTn-7TGA2acHnimu61RKmAxIict3q5o19qKBGiRnhRmuU7kWA2ro1IgE7FUFf-I1jMsppYP3_A',
  },
  {
    name: 'Level 2',
    tagline: '270cc',
    desc: 'Our flagship experience — more power, more track time, for racers ready to push harder.',
    age: '16+ years',
    duration: '10 Minute Session',
    cc: '270cc Engine',
    featured: true,
    borderColor: 'border-apex-gold',
    tagColor: 'text-apex-gold',
    // Placeholder photo — swap for the real Level 2 kart photo when available.
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9vaN-XGLlqTPJWLgkr-g66hZptlvt31RPUM8Q5DNZOcsdoqOXwuwNdoaQXn1OkCLpVb3cy6lmGGBD27iClPF-u6UAx_yfbkLc8xZq4xdUPEnv3O3s2UwSt7N0byPWwWYFeXzn5q-X2VVeV_IFp5mYqEp6qtcQVwfODCHYBObn4NXeiLdG33ietIEsqZ7qHE10-29z4FRhaU463NAzPHIVRKK0kQ8WoZOwGYC0UsLScUiTxj0luOA9PWK1-L4Df0zdWBYK3wgey3M',
  },
]

const COMPARISON = [
  { feature: 'Age Requirement', level1: '16+', level2: '16+' },
  { feature: 'Session Duration', level1: '5 min', level2: '10 min' },
  { feature: 'Engine Displacement', level1: '200cc', level2: '270cc' },
]

export default function Experiences() {
  return (
    <main className="pt-24">
      {/* Hero Header */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-30 grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdPv_rrT09DoQiLcYO6gA3c_ZfuDw600lnkJXZccnGHzc0A2g7sdujwmvHkHyy2IXWIQ6lDabrPQ5dsjbwEu4hR3lp0NeYLiLNZ62QaIMSPvJVrg-bCg8qtXCvshbdqZ8GFCA32q_2bfO5x7U-FNFa4FIQdr6hfy00pzPym1QpFAI8g6pUC3yM0oErqb78y6h-Tm92CLW7hTYcLaxPISjXggIpNUlKVL21Qn1XbOIQyksLr-hQODJnPkioMUK2k9IzoTxUFqso_Is"
            alt="Go-kart racing on outdoor track"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-apex-black via-transparent to-apex-black" />
        </div>
        <div className="relative z-10 text-center">
          <div className="inline-block bg-apex-surface-high/60 backdrop-blur-md px-4 py-1 mb-4 rounded-sm border border-white/5">
            <span className="text-apex-gold font-body text-xs tracking-[0.3em] uppercase">
              Engineered for Velocity
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-8xl text-white uppercase tracking-tighter text-glow-red leading-none mb-6">
            OUR EXPERIENCES
          </h1>
          <p className="max-w-xl mx-auto text-apex-muted font-body text-lg leading-relaxed">
            From professional telemetry for pro racers to safe circuits for rising stars. Choose your intensity.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-apex-red to-transparent opacity-50" />
      </section>

      {/* Pricing Tiers */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`bg-apex-surface rounded-lg overflow-hidden border-t-4 ${tier.borderColor} hover:bg-apex-surface-light transition-all duration-500 flex flex-col h-full ${
                tier.featured ? 'lg:scale-105 z-10 shadow-[0_0_40px_rgba(245,158,11,0.1)] relative' : ''
              }`}
            >
              {tier.featured && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-apex-gold text-black font-body text-[10px] font-black px-4 py-1 uppercase tracking-widest rounded-full z-10">
                  MOST POPULAR
                </div>
              )}
              <img src={tier.image} alt={`${tier.name} kart`} className="w-full h-40 object-cover" />
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <span className={`${tier.tagColor} font-body text-[10px] tracking-widest uppercase`}>{tier.tagline}</span>
                  <h3 className={`font-display ${tier.featured ? 'text-4xl' : 'text-3xl'} text-white mt-2 mb-4`}>
                    {tier.name.toUpperCase()}
                  </h3>
                  <p className="text-apex-muted text-sm mb-8">{tier.desc}</p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-apex-gold" />
                    <span className="font-body text-sm">{tier.age}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Timer className="w-4 h-4 text-apex-gold" />
                    <span className="font-body text-sm">{tier.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gauge className="w-4 h-4 text-apex-gold" />
                    <span className="font-body text-sm">{tier.cc}</span>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5 text-center">
                  <span className="text-apex-muted text-xs uppercase tracking-widest font-body">Walk-ins Welcome</span>
                </div>
              </div>
            </div>
          ))}

          {/* Kids Karts - Coming Soon */}
          <div className="bg-apex-surface rounded-lg overflow-hidden border-t-4 border-dashed border-white/20 flex flex-col h-full">
            <div className="p-8 flex flex-col flex-grow items-center text-center justify-center">
              <Baby className="w-10 h-10 text-apex-muted mb-4" />
              <span className="bg-white/10 text-apex-muted font-body text-[10px] font-black px-4 py-1 uppercase tracking-widest rounded-full mb-4">
                COMING SOON
              </span>
              <h3 className="font-display text-3xl text-white mb-3">KIDS KARTS</h3>
              <p className="text-apex-gold text-sm font-body uppercase tracking-widest mb-3">Launching September 18, 2026</p>
              <p className="text-apex-muted text-sm">Smaller karts built for our youngest racers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="font-display text-4xl text-white uppercase mb-4">TECHNICAL COMPARISON</h2>
          <div className="w-24 h-1 bg-apex-red" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-apex-border">
                <th className="py-4 pr-8 font-body text-xs uppercase tracking-widest text-apex-muted">Feature</th>
                <th className="py-4 px-4 font-body text-xs uppercase tracking-widest text-apex-red">Level 1</th>
                <th className="py-4 px-4 font-body text-xs uppercase tracking-widest text-apex-gold">Level 2</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.feature} className="border-b border-apex-border/30">
                  <td className="py-4 pr-8 text-sm text-apex-muted">{row.feature}</td>
                  <td className="py-4 px-4 text-sm font-bold">{row.level1}</td>
                  <td className="py-4 px-4 text-sm font-bold text-apex-gold">{row.level2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-apex-surface border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-white uppercase mb-4">READY TO HIT THE TRACK?</h2>
          <p className="text-apex-muted mb-8">Choose your tier and walk in today. No booking required.</p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-apex-red text-white px-10 py-4 rounded-md font-display tracking-widest animate-pulse-glow hover:bg-apex-red-light active:scale-95 transition-all cursor-pointer"
          >
            CALL {PHONE_NUMBER} <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  )
}
