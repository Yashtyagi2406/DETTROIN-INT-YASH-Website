import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Academics from './pages/Academics/Academics'
import Admissions from './pages/Admissions/Admissions'
import Facilities from './pages/Facilities/Facilities'
import Gallery from './pages/Gallery/Gallery'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          {/* Academics routes */}
          <Route path="/academics" element={<Academics />} />
          <Route path="/academics/*" element={<Academics />} />
          
          {/* Admissions routes */}
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/admissions/*" element={<Admissions />} />
          
          {/* Facilities, Gallery, Blog, Contact */}
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <WhatsAppButton />
      <Footer />
    </Router>
  )
}

export default App
