import { useState } from 'react'
// import ProjectImage from './assets/projectImage.png'
import './App.css'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Project from './components/Project'

function App() {

  return (
      <div>
        <Navigation/>
        <Header/>
        <Project/>
        {/* <Footer/> */}
      </div>
  )
}

export default App
