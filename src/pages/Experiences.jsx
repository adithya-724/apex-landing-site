import { Link } from 'react-router-dom'
import { ChevronRight, Users, Timer, Gauge, Trophy, Baby, Shield, Check } from 'lucide-react'

const TIERS = [
  {
    name: 'Junior Racers',
    tagline: 'Safety First',
    desc: 'Perfect for young champions starting their racing journey.',
    age: '7-12 years',
    duration: '10 Minutes Session',
    speed: 'Top Speed: 30 KM/H',
    price: '₹799',
    borderColor: 'border-green-500/50',
    tagColor: 'text-green-400',
    icon: Baby,
    features: ['6.5 HP Karts', 'Dedicated junior track', 'Professional supervision', 'Safety gear included'],
    cta: 'Book Junior Race',
    ctaStyle: 'border border-apex-border hover:bg-white hover:text-black',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdPv_rrT09DoQiLcYO6gA3c_ZfuDw600lnkJXZccnGHzc0A2g7sdujwmvHkHyy2IXWIQ6lDabrPQ5dsjbwEu4hR3lp0NeYLiLNZ62QaIMSPvJVrg-bCg8qtXCvshbdqZ8GFCA32q_2bfO5x7U-FNFa4FIQdr6hfy00pzPym1QpFAI8g6pUC3yM0oErqb78y6h-Tm92CLW7hTYcLaxPISjXggIpNUlKVL21Qn1XbOIQyksLr-hQODJnPkioMUK2k9IzoTxUFqso_Is',
  },
  {
    name: 'Grand Prix',
    tagline: 'The Main Event',
    desc: 'Unleash your inner pro on our flagship high-performance fleet.',
    age: '13+ years',
    duration: '15 Minutes Session',
    speed: 'Top Speed: 50 KM/H',
    price: '₹1,299',
    featured: true,
    borderColor: 'border-apex-gold',
    tagColor: 'text-apex-gold',
    icon: Trophy,
    features: ['9 HP Sodi Karts', 'Full telemetry reporting', 'Qualifying rounds', 'Podium ceremony'],
    cta: 'Book Grand Prix',
    ctaStyle: 'bg-apex-red text-white animate-pulse-glow',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0zcK4n62F2TqYofkJgJYF3gX4zpsI_2txIeXimWgBxjj1ohbFQgsdURq3j9SdlNijAytoh6ob2I-bOPwpNu3cT8CRkgjYrFATdIp4zSDfVf7zOXBpkWQJ8U5dgBQ-U-7Z9YJLR2Dous9U6-0ZDsE4MMplB4o38M0HHTZ5HFXnlEkfoexNsDkTkDuOKcfl0P3HwiTn-7TGA2acHnimu61RKmAxIict3q5o19qKBGiRnhRmuU7kWA2ro1IgE7FUFf-I1jMsppYP3_A',
  },
  {
    name: 'Pro Circuit',
    tagline: 'Expert Tier',
    desc: 'Raw speed for those who have mastered the racing line.',
    age: '18+ (Exp Required)',
    duration: '20 Minutes Session',
    speed: 'Top Speed: 60 KM/H',
    price: '₹1,999',
    borderColor: 'border-apex-red/50',
    tagColor: 'text-apex-red',
    icon: Shield,
    features: ['13 HP Karts', 'Advanced telemetry', 'Competitive league eligible', 'Championship points'],
    cta: 'Book Pro Circuit',
    ctaStyle: 'border border-apex-border hover:bg-white hover:text-black',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9vaN-XGLlqTPJWLgkr-g66hZptlvt31RPUM8Q5DNZOcsdoqOXwuwNdoaQXn1OkCLpVb3cy6lmGGBD27iClPF-u6UAx_yfbkLc8xZq4xdUPEnv3O3s2UwSt7N0byPWwWYFeXzn5q-X2VVeV_IFp5mYqEp6qtcQVwfODCHYBObn4NXeiLdG33ietIEsqZ7qHE10-29z4FRhaU463NAzPHIVRKK0kQ8WoZOwGYC0UsLScUiTxj0luOA9PWK1-L4Df0zdWBYK3wgey3M',
  },
]

const COMPARISON = [
  { feature: 'Age Requirement', junior: '7-12', grandPrix: '13+', pro: '18+' },
  { feature: 'Session Duration', junior: '10 min', grandPrix: '15 min', pro: '20 min' },
  { feature: 'Top Speed', junior: '30 km/h', grandPrix: '50 km/h', pro: '60 km/h' },
  { feature: 'Kart Power', junior: '6.5 HP', grandPrix: '9 HP', pro: '13 HP' },
  { feature: 'Telemetry', junior: 'Basic', grandPrix: 'Full', pro: 'Advanced' },
  { feature: 'Price', junior: '₹799', grandPrix: '₹1,299', pro: '₹1,999' },
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
            alt="Go-kart racing on indoor track"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-apex-black via-transparent to-apex-black" />
        </div>
        <div className="relative z-10 text-center">
          <div className="inline-block bg-apex-surface-high/60 backdrop-blur-md px-4 py-1 mb-4 rounded-sm border border-white/5">
            <span className="text-apex-gold font-body text-xs tracking-[0.3em] uppercase">
              Engineered for Velocity
            </span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-tighter text-glow-red leading-none mb-6">
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
              className={`bg-apex-surface rounded-lg p-8 border-t-4 ${tier.borderColor} hover:bg-apex-surface-light transition-all duration-500 flex flex-col h-full ${
                tier.featured ? 'lg:p-10 transform lg:scale-105 z-10 shadow-[0_0_40px_rgba(245,158,11,0.1)] relative' : ''
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-apex-gold text-black font-body text-[10px] font-black px-4 py-1 uppercase tracking-widest rounded-full">
                  MOST POPULAR
                </div>
              )}
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
                  <span className="font-body text-sm">{tier.speed}</span>
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className={`${tier.featured ? 'text-5xl' : 'text-4xl'} font-display text-white`}>
                    {tier.price}
                  </span>
                  <span className="text-apex-muted text-xs uppercase font-body">/ Session</span>
                </div>
                <Link
                  to="/booking"
                  className={`w-full block text-center py-4 font-body font-bold uppercase tracking-widest text-sm transition-all duration-300 cursor-pointer ${tier.ctaStyle}`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
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
                <th className="py-4 px-4 font-body text-xs uppercase tracking-widest text-green-400">Junior</th>
                <th className="py-4 px-4 font-body text-xs uppercase tracking-widest text-apex-gold">Grand Prix</th>
                <th className="py-4 px-4 font-body text-xs uppercase tracking-widest text-apex-red">Pro Circuit</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.feature} className="border-b border-apex-border/30">
                  <td className="py-4 pr-8 text-sm text-apex-muted">{row.feature}</td>
                  <td className="py-4 px-4 text-sm font-bold">{row.junior}</td>
                  <td className="py-4 px-4 text-sm font-bold text-apex-gold">{row.grandPrix}</td>
                  <td className="py-4 px-4 text-sm font-bold">{row.pro}</td>
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
          <p className="text-apex-muted mb-8">Choose your tier and book your session today.</p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-apex-red text-white px-10 py-4 rounded-md font-display tracking-widest animate-pulse-glow hover:bg-apex-red-light active:scale-95 transition-all cursor-pointer"
          >
            BOOK NOW <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
