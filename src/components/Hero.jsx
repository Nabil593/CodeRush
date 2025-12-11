import React, { useEffect, useState } from 'react'
import { ArrowRight, ChevronDown, Play, Sparkle } from "lucide-react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { codeExamples, floatingCards } from '../data/CodeExample.js';
import { atelierCaveDark, atomOneDark, nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Hero = () => {

  const [mousePosition, setMousePosition] = useState({x:0, y:0});
  const [activeTab, setActiveTab] = useState("App.jsx");

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({x: e.clientX, y:e.clientY});
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const currentFloatingCards = floatingCards[activeTab];



  return (
    <section className='relative  flex items-center justify-center pt-20 sm:pt-20 lg:pt-8 overflow-hidden'>
      <div className='max-w-7xl mx-auto text-center relative w-full'>
      <div className='max-w-7xl mx-auto flex flex-col  text-center  gap-6 sm:gap-8 items-center relative'>

        {/* LEFT SIDE */}
        <div className='flex flex-col items-center justify-center lg:py-18 sm:py-10 py-8'>
          <div className='inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-900 border border-gray-500/20 rounded-full mb-1.5 sm:mb-2 animate-in slide-in-from-bottom duration-700'>
            <Sparkle className='w-4 h-4'/>
            <span className='text-xs sm:text-sm'>Introducing CodeRush AI</span>
          </div>

          <h1 className='text-[42px] sm:text-6xl md:text-6xl lg:text-8xl font-semibold mb-4 sm:mb-6 leading-12 lg:leading-22 animate-in slide-in-from-bottom duration-700 delay-100 '>
            <span className='text-white font-bold block mb-1 sm:mb-2'>CODE FASTER</span>
            <span className='text-white font-bold block mb-1 sm:mb-2'>BUILD BETTER</span>
            <span className='text-white font-bold block mb-1 sm:mb-2'>WITH CODERUSH AI</span>
          </h1>
          <p className='text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-4 lg:mx-2  mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed'>Accelerate your development workflow with intelligent code completion, automated testing, and smart debugging. Ship production-ready code 10x faster</p>

          <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300'>

            <button className='cursor-pointer group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2'>
              <span>Start Coding Free</span>
              <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300'/>
            </button>

            <button className='cursor-pointer group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-400 text-black rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2'>
              <div>
                <Play className='w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300'/>
              </div>
              <span>Watch Demo</span>
            </button>
          </div>
        </div>


        {/* RIGHT SIDE */}
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

            <div className='p-3 sm:p-4 relative h-full'>
            {/* FILE TABS */}
            <div className='flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto'>
              <button onClick={() => setActiveTab("App.jsx")} className={`px-3 py-2 backdrop-blur-sm text-xs rounded-t-lg  border ${activeTab === "App.jsx" ? 
                "bg-blue-500/30 text-white border-blue-400/20" : 
                "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} text-gray-300 transition-all duration-200 whitespace-nowrap`}>App.jsx</button>

              <button onClick={() => setActiveTab("Hero.jsx")} className={`px-3 py-2 backdrop-blur-sm text-xs rounded-t-lg  border ${activeTab === "Hero.jsx" ? 
                "bg-blue-500/30 text-white border-blue-400/20" : 
                "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} text-gray-300 transition-all duration-200 whitespace-nowrap`}>Hero.jsx</button>

              <button onClick={() => setActiveTab("Navber.jsx")} className={`px-3 py-2 backdrop-blur-sm text-xs rounded-t-lg  border ${activeTab === "Navber.jsx" ? 
                "bg-blue-500/30 text-white border-blue-400/20" : 
                "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} text-gray-300 transition-all duration-200 whitespace-nowrap`}>Navber.jsx</button>
            </div>

            {/* Code Content */}
            <div className='relative overflow-hidden flex-grow'>
              <SyntaxHighlighter language='javascript' style={atelierCaveDark}
              customStyle={{
                            backgroundColor: "#1A1A1A",
                            margin: 0,
                            padding: 0,
                            fontSize: '12px',
                            borderRadius: '8px',
                            height: '100%',
                            border: '1px solid #3c3c3c',
                          }}
               showLineNumbers>
                {codeExamples[activeTab]}
              </SyntaxHighlighter>
            </div>

          </div>
          </div>

          {/* FLOATING CARDS */}
          <div className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${currentFloatingCards.bgColor} backdrop-blur-lg rounded-lg p-4 border border-white/20 shadow-2xl`}>
            <div className='flex items-center space-x-2 mb-2'>
              <div className={`w-6 h-6 ${currentFloatingCards.iconColor} flex items-center justify-center text-sm font-bold`}>{currentFloatingCards.icon}</div>
              <span className={`text-sm font-medium ${currentFloatingCards.textColor}`}>{currentFloatingCards.title}</span>
            </div>
            <div className={`text-sm text-left ${currentFloatingCards.contentColor}`}>{currentFloatingCards.context}</div>
          </div>

        </div>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Hero;