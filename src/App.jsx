import './App.css'
import NavBar from './components/navbar/navbar'
import Home from './pages/home/home'
import Footer from './components/footer/footer'
import Loader from './components/loader/loader'
import Experience from './pages/Experience/experience'
import Project from './pages/project/project'
import Certifications from './pages/certifications/certifications'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import ScrollToHash from './hooks/scrollToHash'

import { Routes, Route, useLocation } from 'react-router-dom'



function App() {
  const [initialLoading, setInitialLoading] = useState(true)
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false)
    }, 2000);

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* <ScrollToHash initialLoading={initialLoading} /> */}

      <AnimatePresence>
        {initialLoading && <Loader />}
      </AnimatePresence>

      <NavBar />

      <AnimatePresence mode="wait" >
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  )
}

export default App
