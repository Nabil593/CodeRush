import React, { useEffect, useState } from 'react'
import { ChevronDown } from "lucide-react";

const Hero = () => {

  const [mousePosition, setMousePosition] = useState({x:0, y:0});

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({x: e.clientX, y:e.clientY});
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);



  return (
    <section className='relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 lg:pt-8 overflow-hidden'>
      {/* <div className='absolute inset-0 opacity-30' style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px,  rgba(26, 26, 26, 0.50), transparent 40%)`
      }}/>*/}

      <div className='relative order-2 w-full'>
        <div className='relative bg-white/5 backfrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-white/10'>
          <div className='bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:w-[350px] lg:h-[450px] border border-white/5'>
            {/* IDE HEADER */}
            <div className='flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backfrop-blur-sm border-b border-white/10'>

            {/* THREE DOTS */}
            <div className='flex items-center gap-2'>
            <div className='flex items-center space-x-1 sm:space-x-2'>
              <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500'/>
              <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500'/>
              <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500'/>
            </div>
            <span className='text-xs font-semibold sm:text-sm text-gray-300'>CodeRush.</span>
            </div>
            <ChevronDown className='w-3 h-3 sm:w-4 sm:h-4 text-gray-400'/>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero;