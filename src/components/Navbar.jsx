import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Zap } from 'lucide-react'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/experiences', label: 'Experiences' },
  { to: '/about', label: 'About' },
  { to: '/booking', label: 'Booking' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(225,29,72,0.1)]'
          : 'bg-neutral-950/40 backdrop-blur-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Zap className="w-6 h-6 text-apex-red group-hover:text-apex-red-light transition-colors" />
          <span className="text-2xl font-display font-black tracking-tighter text-white uppercase">
            APEX KARTING
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center font-display uppercase tracking-wider text-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-all duration-300 hover:text-apex-red ${
                location.pathname === link.to
                  ? 'text-apex-red font-bold border-b-2 border-apex-red pb-1'
                  : 'text-neutral-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Book Now CTA */}
        <Link
          to="/booking"
          className="hidden md:flex items-center gap-2 bg-apex-red text-white px-6 py-2.5 rounded-md font-display uppercase tracking-widest text-sm animate-pulse-glow hover:bg-apex-red-light active:scale-95 transition-all cursor-pointer"
        >
          Book Now
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-apex-border">
          <div className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-display uppercase tracking-wider text-sm py-2 transition-colors ${
                  location.pathname === link.to ? 'text-apex-red' : 'text-neutral-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-apex-red text-white px-6 py-3 rounded-md font-display uppercase tracking-widest text-sm text-center mt-2 cursor-pointer"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
