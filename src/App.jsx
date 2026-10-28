import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'



const App = () => {
  return (
    <>
    <CustomCursor />
    <Navbar />
    <Hero />
    <Services />
    <Projects />
    <About />
    <Experience />
    <Contact />
    <Footer />
    </>
  )
}

export default App
