import './App.css'
import NavBar from './components/navbar/navbar'
import Home from './pages/home/home'
import Footer from './components/footer/footer'
import Loader from './components/loader/loader'
import Experience from './pages/Experience/experience'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import ScrollToHash from './hooks/scrollToHash'

import { Routes, Route } from 'react-router-dom'



function App() {
  const [initialLoading, setInitialLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false)
    }, 2000);

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {initialLoading && <Loader />}
      </AnimatePresence>
      <NavBar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
