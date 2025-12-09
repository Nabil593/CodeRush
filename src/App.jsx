import React from 'react'
import Navber from './components/Navber';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='min-h-screen bg-black text-white overflow-hidden'>
      <Navber />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App;