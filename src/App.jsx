import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Highlights from './Components/Highlights'
import Model from './Components/Model'
import FullStory from './Components/FullStory'
import Chip from './Components/Chip'

const App = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Highlights />
      <Model/>
      <FullStory/>
      <Chip/>
    </main>
  )
}

export default App
