import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'

const Navber = () => {
  
  const [menu, setMenu] = useState(false);


  return (
    <nav className='fixed top-0 w-full z-50 transition-all duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-14'>

          {/* LOGO */}
          <h1 className='text-2xl font-bold'>CodeRush.</h1>

          {/* NAV LINKS */}
          <div className='hidden md:flex space-x-6 lg:space-x-8'>
              <a href='#features' className='text-gray-300 hover:text-white text-sm lg:text-base'>Features</a>
              <a href='pricing' className='text-gray-300 hover:text-white text-sm lg:text-base'>Pricing</a>
              <a href='testimonials' className='text-gray-300 hover:text-white text-sm lg:text-base'>Testimonials</a>
          </div>

          {/* BUTTON */}
          <button className=' cursor-pointer md:hidden p-2 text-white' onClick={() => setMenu((prev) => !prev)}>
            {
              menu ? (
                <X className='w-5 h-5 sm:w-6 sm:h-6'/>
              ) : (
                <Menu className='w-5 h-5 sm:w-6 sm:h-6'/>
              )
            }
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {
        menu && 
        <div className='md:hidden bg-gray-900 animate-in slide-in-from-top duration-300'>
          <div className='px-4 py-4 sm:py-6 space-y-3 sm:space-y-4 flex flex-col'>
             <a href='#features' className='text-gray-300 hover:text-white text-sm lg:text-base' onClick={() => setMenu(false)}>Features</a>
              <a href='#pricing' className='text-gray-300 hover:text-white text-sm lg:text-base' onClick={() => setMenu(false)}>Pricing</a>
              <a href='#testimonials' className='text-gray-300 hover:text-white text-sm lg:text-base' onClick={() => setMenu(false)}>Testimonials</a>
          </div>
        </div>
      }

    </nav>
  )
}

export default Navber;