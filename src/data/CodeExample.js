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
    <section className='hero'>
      <h1>Hero Section</h1>
      <p>This is the hero component example.</p>
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
