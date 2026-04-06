import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Experiences from './pages/Experiences'
import About from './pages/About'
import Booking from './pages/Booking'

export default function App() {
  return (
    <div className="min-h-screen bg-apex-black text-apex-text font-body">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </div>
  )
}
