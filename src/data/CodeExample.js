export const codeExamples = {
    
"App.jsx" : `
import React, { useState } from 'react';
import { CodeRush } from '@codeRush/ai';

const App = () => {

  const [code, setCode] = useState("");

  const handleAICompletion = async () => {
    const suggestion = await CodeRush.complete(code);
    setCode(suggestion);
  };

  return (
    <div className='app'>
      <CodeEditor
        onChange={setCode}
        OnAI={handleAICompletion}
      />
    </div>
  );
};

export default App;
`,

"Hero.jsx" : `
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#0f0f0f]">
      
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
        Hero Section
      </h1>

      <p className="text-base sm:text-lg lg:text-2xl text-gray-300 max-w-2xl">
        This is the hero component example.
      </p>

    </section>
  );
};

export default Hero;
`,

"Navber.jsx" : `
import React, { useState } from 'react';

const Navber = () => {

  const [active, setActive] = useState("Home");

  return (
    <nav className='w-full flex items-center justify-between p-4 bg-black text-white'>
      <h2 className='text-xl font-bold'>MyBrand</h2>

      <ul className='flex gap-6'>
        <li className={active === "Home" ? "text-blue-400" : ""}>Home</li>
        <li className={active === "About" ? "text-blue-400" : ""}>About</li>
        <li className={active === "Contact" ? "text-blue-400" : ""}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navber;
`
};


export const floatingCards = {
  "App.jsx" : {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "AI",
    title: "Smart Completion",
    context: "AI-Powred suggestions in real-time"
  },

  "Hero.jsx" : {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "⚡",
    title: "Auto Animation",
    context: "Dynamic typing sffects genarated automatically"
  },

  "Navber.jsx" : {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "🔍",
    title: "Smart Search",
    context: "Intelligent code search across your project",
  },

};