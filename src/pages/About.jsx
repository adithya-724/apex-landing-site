import {
  Shield, HardHat, Gauge, UserCheck, Moon, Eye, CheckCircle, ChevronRight,
} from 'lucide-react'
import { PHONE_NUMBER, PHONE_HREF } from '../constants'

const EXPECT_CARDS = [
  { icon: Shield, title: 'Safety Briefing', desc: 'Detailed video and physical briefing session before every race for all drivers.', color: 'text-apex-red', border: 'border-apex-red' },
  { icon: HardHat, title: 'Helmet & Gear Provided', desc: 'Pro-grade racing suits, sanitized helmets, and head socks for maximum safety.', color: 'text-apex-gold', border: 'border-apex-gold' },
  { icon: Gauge, title: 'Real-Time Lap Timing', desc: 'Precision telemetry for every driver. Compare sectoral times on trackside displays.', color: 'text-apex-red', border: 'border-apex-red' },
  { icon: UserCheck, title: 'Professional Marshals', desc: 'Trained track-side marshals ensure fair racing, safety, and expert guidance.', color: 'text-apex-gold', border: 'border-apex-gold' },
  { icon: Moon, title: 'Floodlit Night Racing', desc: 'Race after dark under full floodlights for a true circuit-night atmosphere.', color: 'text-apex-red', border: 'border-apex-red' },
  { icon: Eye, title: 'Spectator Viewing Area', desc: 'Elevated viewing deck with live timing feeds for friends and family.', color: 'text-apex-gold', border: 'border-apex-gold' },
]

const SAFETY_ITEMS = [
  'Full Roll Cages', 'Remote Speed Governors', 'FIA-Standard Marshals',
  'Mandatory Driver Briefing', 'High-Impact Barriers', 'Professional Grade Helmets',
]

export default function About() {
  return (
    <main className="pt-24">
      {/* Page Header */}
      <header className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 grayscale mix-blend-overlay">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqNn1mZ8OzsDju5kD1deaYNSRH3dVjsEk98p04OJPIgcAd2tr4eJ_Jm_Zw8SDSoch5ZCR4vT3Xjnv7mPOKdviksZWPdKcKF7WqM2_aKpJ-N1c4O99In7MSzJEcYjN-spz2-h2bZRVFxLbEGjio8jcTS-wiZYd4Q_ZwYB6opzY_1uq1QBNams1c0bMsKj34IRVmr0Ora65gGrqoS4UJMz-L7UBJubThzCPNlQ4bsPA0B90WMt0VUnrmeY3j5VljyfQYPj28vQ02XWU"
            alt="Outdoor karting track at night"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tighter text-white neon-glow-red">
            ABOUT <span className="text-apex-red">THE TRACK</span>
          </h1>
          <p className="mt-6 text-apex-muted max-w-2xl mx-auto text-lg md:text-xl">
            Engineered for high-stakes competition. Experience Coimbatore's most technical outdoor circuit with telemetry-grade precision.
          </p>
        </div>
      </header>

      {/* Track Layout */}
      <section className="py-24 bg-apex-surface border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 space-y-8">
              <div className="inline-block px-3 py-1 bg-amber-900/30 text-apex-gold text-xs font-bold rounded-sm font-display">
                CIRCUIT SPECIFICATIONS
              </div>
              <h2 className="text-4xl font-display uppercase tracking-tighter leading-none">
                MASTER THE <br /><span className="text-apex-gold">APEX LINE</span>
              </h2>
              <p className="text-apex-muted leading-relaxed">
                Our 550m professional circuit features 8 demanding turns designed to test technical skill and raw courage. From the high-speed Turn 4 sweeper to the technical Turn 7 hairpin, every meter is a battle for the podium.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-apex-surface-high border-l-2 border-apex-red">
                  <div className="text-xs text-apex-muted uppercase mb-1">Track Length</div>
                  <div className="text-2xl font-display">550M</div>
                </div>
                <div className="p-4 bg-apex-surface-high border-l-2 border-apex-gold">
                  <div className="text-xs text-apex-muted uppercase mb-1">Max Speed</div>
                  <div className="text-2xl font-display">65 KM/H</div>
                </div>
              </div>
            </div>

            {/* Track SVG */}
            <div className="lg:col-span-8 relative aspect-video bg-gradient-radial rounded-xl border border-white/10 p-8 flex items-center justify-center overflow-hidden"
              style={{ background: 'radial-gradient(circle at center, #1a1919 0%, #000000 100%)' }}
            >
              <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}
              />
              <svg className="w-full h-full max-h-[500px]" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="trackPath" d="M100,380 C60,380 40,340 40,280 C40,200 60,140 130,110 C220,70 320,70 380,110 C420,135 400,180 340,200 C280,220 260,260 300,290 C340,320 380,300 400,260 C440,200 520,140 620,140 C700,140 750,180 750,250 C750,330 680,380 580,380 L100,380 Z" stroke="#E11D48" strokeWidth="24" strokeLinecap="round" className="opacity-30" />
                <path d="M100,380 C60,380 40,340 40,280 C40,200 60,140 130,110 C220,70 320,70 380,110 C420,135 400,180 340,200 C280,220 260,260 300,290 C340,320 380,300 400,260 C440,200 520,140 620,140 C700,140 750,180 750,250 C750,330 680,380 580,380 L100,380 Z" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" className="neon-glow-red" />
                <path d="M115,360 C85,360 65,335 65,280 C65,215 85,160 140,130 C215,95 305,95 365,125 C395,145 380,175 335,190 C295,205 280,235 305,260 C330,285 360,270 375,245 C405,205 470,165 610,165 C670,165 715,195 715,250 C715,310 660,360 575,360 L115,360 Z" stroke="#F59E0B" strokeWidth="2" strokeDasharray="8 8" className="racing-line" />
                {[
                  [40, 280], [130, 110], [380, 110], [340, 200],
                  [300, 290], [400, 260], [620, 140], [750, 250],
                ].map(([cx, cy], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="14" fill="#F59E0B" />
                    <text x={cx} y={cy + 5} textAnchor="middle" fill="black" fontSize="12" fontFamily="Russo One">
                      {i + 1}
                    </text>
                  </g>
                ))}
                <circle r="7" fill="#F59E0B" className="drop-shadow-[0_0_8px_rgba(245,158,11,0.9)]">
                  <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#trackPath" />
                  </animateMotion>
                </circle>
              </svg>
              <div className="absolute bottom-4 right-4 text-[10px] text-apex-muted font-mono uppercase tracking-widest">
                Apex-OS Telemetry v4.2.1 // ACTIVE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-32 bg-apex-black">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter mb-4">WHAT TO EXPECT</h2>
            <div className="w-24 h-1 bg-apex-red mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPECT_CARDS.map((card) => (
              <div key={card.title} className={`bg-apex-surface border-b-2 ${card.border} p-8 hover:bg-apex-surface-light transition-all cursor-pointer`}>
                <div className={`${card.color} mb-6`}>
                  <card.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-display uppercase mb-3">{card.title}</h3>
                <p className="text-apex-muted text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 bg-apex-surface-light relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOHILVnWa-mhgKJP08gFXJtl2mcAMw_4M_Fq0OYr_4WQVeWQg9H_hs1O59HZqiD00-fPPDghfwYahOIUDJ5QVg-0tMviSROhGESuOYE5xw_mvvmlorvC70gV0AzxSce9tpCLlRuesTA_11UZvMes8ot3nIHR9A7yJQ1VZaEBHpH1l0Jsh62L2timrXt3BLpMOrF0SU1bTL0eyXgtdBot-57adrz-Rbu6wdDCg0Vhy3I5Hlq_kLv40Q1s_v1wXRihnpT-wwNxi_nfE"
            alt="Racing helmet with red reflections"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tighter mb-12">
              YOUR SAFETY IS <br /><span className="text-apex-red">OUR PRIORITY</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {SAFETY_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-apex-gold" />
                  </div>
                  <span className="text-xl font-bold uppercase font-display tracking-tight">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-16 p-8 bg-apex-black border border-white/5 relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-apex-red" />
              <p className="text-apex-muted italic leading-relaxed">
                "At Apex Karting Arena, we believe velocity should never compromise safety. Every kart is inspected daily and our systems are monitored by real-time telemetry to ensure the safest high-performance experience in Coimbatore."
              </p>
              <div className="mt-4 text-apex-red font-bold font-display text-sm">— RACING STEWARD CORE</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-apex-black border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-white uppercase mb-4">EXPERIENCE THE APEX</h2>
          <p className="text-apex-muted mb-8">Walk in and feel the rush of professional outdoor karting.</p>
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
