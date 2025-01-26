import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import './App.css'

function App() {
  
  return (
    <>
      <div>
        <Header />
      </div>
      <aside className="intro">
        <About />
      </aside>
      
    </>
  )
}

export default App
