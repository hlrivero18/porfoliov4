import './App.css'
import NavBar from './components/navbar/navbar'
import Home from './pages/home/home'
import Footer from './components/footer/footer'
import Loader from './components/loader/loader'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'


function App() {
  const [initialLoading, setInitialLoading] = useState(true)

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setInitialLoading(false)
    }, 2000);

    return ()=> clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {initialLoading && <Loader/>}
      </AnimatePresence>
      <NavBar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
