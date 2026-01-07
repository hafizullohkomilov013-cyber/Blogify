import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Main  from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <Footer />
      <div className="flex justify-center pb-12">
        <p className="text-[#6B7280]">© 2025 Blogify. All rights reserved.</p>
      </div>
    </>
  );
}

export default App
