import React from 'react';
import { Window } from '../components/Window';
import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutMe() {
  const techStack = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Framer Motion', icon: 'https://cdn.simpleicons.org/framer/0055FF' }
  ];

  const name = "Fatima Sarfraz";

  return (
    <Window id="about">
      <div className="flex flex-col h-full max-w-4xl mx-auto md:px-6 pb-6">
        {/* Header intro */}
        <div className="space-y-4 bg-white/70 p-6 md:p-8 rounded-[2rem] border border-white shadow-sm mt-2">
           <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight flex items-center flex-wrap gap-x-2 md:gap-x-3">
             <span className="text-slate-800">Hey! I am</span>
             <span className="text-pink-400 font-medium flex items-center">
               {name.split('').map((char, i) => (
                 <motion.span
                   key={i}
                   initial={{ opacity: 0, display: "none" }}
                   animate={{ opacity: 1, display: "inline" }}
                   transition={{ delay: 0.5 + i * 0.1, duration: 0.05 }}
                 >
                   {char === ' ' ? '\u00A0' : char}
                 </motion.span>
               ))}
               <motion.span
                 animate={{ opacity: [1, 0] }}
                 transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                 className="inline-block w-[3px] h-[1em] bg-pink-400 ml-1"
               />
             </span>
           </h2>
        </div>

        {/* About text */}
        <div className="text-slate-600 text-base md:text-lg leading-relaxed flex flex-col space-y-4 mt-4 px-4 md:px-0">
           <p className="font-medium text-slate-800">
             A Computer Science student learning full-stack web development and building practical web applications.
           Right now, my focus is on frontend development using React, while I’m gradually expanding into backend technologies like Node.js and MongoDB to build complete full-stack applications.
           </p>
        </div>

        {/* Tools and Currently learning */}
        <div className="mt-6">
           <div className="bg-white/60 p-6 md:p-8 rounded-[2rem] border border-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center">
                  <Terminal className="text-rose-600 w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 font-serif">Technologies I’m working on</h3>
              </div>
              <div className="flex flex-col space-y-5">
                 <div className="flex flex-wrap gap-3">
                   {techStack.map(tech => (
                     <span key={tech.name} className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-100 text-sm font-bold text-slate-600 shadow-sm hover:scale-105 hover:border-slate-200 transition-all cursor-default">
                       <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain" />
                       {tech.name}
                     </span>
                   ))}
                 </div>
                 <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-x-3 gap-y-2">
                   <p className="text-sm font-medium text-slate-600 mr-2">
                     <span className="font-bold text-slate-700 text-base">Basic experience with:</span>
                   </p>
                   <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-100">
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="w-4 h-4" /> Node.js
                   </span>
                   <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-100">
                     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="w-4 h-4" /> MongoDB
                   </span>
                   <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-100">
                     REST APIs
                   </span>
                 </div>
                 <div className="pt-2">
                   <p className="text-sm font-medium text-slate-600">
                     <span className="font-bold text-slate-700 text-base">Exploring:</span> AI tools and integrations
                   </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </Window>
  );
}
