import React from 'react'

const Navber = () => {
  return (
    <nav className='fixed top-0 w-full z-50 transition-all duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-14'>

          {/* LOGO */}
          <h1 className='text-2xl font-bold'>CodeRush.</h1>

          {/* NAV LINKS */}
          <div className='flex space-x-6 lg:space-x-8'>
              <a href='#features' className='text-gray-300 hover:text-white text-sm lg:text-base'>Features</a>
              <a href='pricing' className='text-gray-300 hover:text-white text-sm lg:text-base'>Pricing</a>
              <a href='testimonials' className='text-gray-300 hover:text-white text-sm lg:text-base'>Testimonials</a>
          </div>

          {/* BUTTON */}
          <button className=''>
            
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Navber;