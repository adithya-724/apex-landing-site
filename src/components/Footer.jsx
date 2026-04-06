import { Link } from 'react-router-dom'
import { Zap, Instagram, Youtube, Twitter, MapPin, Clock, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-apex-red" />
              <span className="text-xl font-display font-bold text-white uppercase">
                Apex Karting
              </span>
            </Link>
            <p className="text-apex-muted text-sm leading-relaxed">
              India's premier indoor go-karting experience. Engineered for velocity, built for champions.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-apex-muted hover:text-apex-red transition-colors cursor-pointer" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-apex-muted hover:text-apex-red transition-colors cursor-pointer" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-apex-muted hover:text-apex-red transition-colors cursor-pointer" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-white mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link to="/experiences" className="text-apex-muted hover:text-apex-red text-sm transition-colors">Experiences</Link>
              <Link to="/about" className="text-apex-muted hover:text-apex-red text-sm transition-colors">About the Track</Link>
              <Link to="/booking" className="text-apex-muted hover:text-apex-red text-sm transition-colors">Book a Race</Link>
              <a href="#" className="text-apex-muted hover:text-apex-red text-sm transition-colors">Safety Protocols</a>
              <a href="#" className="text-apex-muted hover:text-apex-red text-sm transition-colors">Corporate Events</a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-white mb-4">Visit Us</h4>
            <div className="flex flex-col gap-3 text-sm text-apex-muted">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-apex-red flex-shrink-0" />
                <span>Apex Karting Arena, Sector 18, Gurugram, Haryana 122015</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-apex-red flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-white mb-4">Racing Hours</h4>
            <div className="flex flex-col gap-2 text-sm text-apex-muted">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-apex-gold flex-shrink-0" />
                <span>Mon–Fri: 12:00 PM – 10:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-apex-gold flex-shrink-0" />
                <span>Sat–Sun: 10:00 AM – 11:00 PM</span>
              </div>
              <p className="text-xs text-apex-muted/60 mt-2">Last race session 30 min before closing</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs uppercase tracking-widest text-apex-muted/40">
            © 2026 Apex Karting India. Engineered for Velocity.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-apex-muted/40 hover:text-apex-red text-xs uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-apex-muted/40 hover:text-apex-red text-xs uppercase tracking-widest transition-colors">Terms</a>
            <a href="#" className="text-apex-muted/40 hover:text-apex-red text-xs uppercase tracking-widest transition-colors">Franchise</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
