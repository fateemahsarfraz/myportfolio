import React from 'react';
import { Window } from '../components/Window';
import { Layers, Cuboid, Users, CheckCircle2, ExternalLink, Github, Activity } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "EventSphere",
      desc: "A React-based event management platform where users can add tasks, manage events, and interact through a dashboard. Includes CRUD operations and dynamic UI handling.",
      tags: ["React", "Tailwind",],
      status: "Live",
      bg: "bg-purple-50/50",
      border: "border-purple-100",
      icon: <Layers className="text-purple-500 w-8 h-8" />,
      liveLink: "https://eventsphere-reactapp.vercel.app/",
      githubLink: "https://github.com/fateemahsarfraz/eventsphere-reactapp.git"
    },
    {
      title: "NutriFlow",
      desc: "A responsive, client-side React application for intuitive meal planning and nutrition tracking. It features an interactive drag-and-drop weekly calendar, real-time macro visualization using Recharts, and seamless free recipe discovery powered by TheMealDB API.",
      tags: ["React", "API", "Recharts"],
      status: "Live",
      bg: "bg-amber-50/50",
      border: "border-amber-100",
      icon: <Activity className="text-amber-500 w-8 h-8" />,
      liveLink: "https://nutriflow-chi.vercel.app/",
      githubLink: "https://github.com/fateemahsarfraz/nutriflow.git"
    },
    {
      title: "Planner App (React)",
      desc: "A React-based planner application for managing daily tasks and schedules. Focused on state management, dynamic UI updates, and structured component design.",
      tags: ["React", "State Management"],
      status: "Live",
      bg: "bg-emerald-50/50",
      border: "border-emerald-100",
      icon: <CheckCircle2 className="text-emerald-500 w-8 h-8" />,
      liveLink: "https://planner-app-ten-brown.vercel.app/",
      githubLink: "https://github.com/fateemahsarfraz/planner-app.git"
    },
    {
      title: "Lumina 3D",
      desc: "A visually interactive website built using Framer Motion, focused on smooth animations and modern UI design. Explores 3D-inspired layouts and creative frontend development.",
      tags: ["React", "Framer Motion"],
      status: "Live",
      bg: "bg-rose-50/50",
      border: "border-rose-100",
      icon: <Cuboid className="text-rose-500 w-8 h-8" />,
      liveLink: "https://lumina3-d.vercel.app/",
      githubLink: "https://github.com/fateemahsarfraz/lumina3D.git"
    },
    {
      title: "SkillSwap",
      desc: "A MERN-based platform for skill exchange where users can connect, send requests, and learn from each other. Includes authentication and dynamic UI.",
      tags: ["MongoDB", "Express", "React", "Node"],
      status: "WIP",
      bg: "bg-blue-50/50",
      border: "border-blue-100",
      icon: <Users className="text-blue-500 w-8 h-8" />,
      liveLink: "#",
      githubLink: "https://github.com/fateemahsarfraz/Skillswap.git"
    }
  ];

  const tagIcons = {
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Tailwind": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "Node": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    "Framer Motion": "https://cdn.simpleicons.org/framer/0055FF"
  };

  return (
    <Window id="projects">
      <div className="flex flex-col space-y-4 max-w-5xl mx-auto md:px-6 pb-6">
        <div className="pt-2">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-tight">
            A few of my projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto">
          {projects.map((p, i) => (
            <div key={i} className={`p-6 ${p.bg} rounded-3xl border ${p.border} shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden backdrop-blur-md`}>
              
              <div className="relative z-10 flex flex-col h-full space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
                    {p.icon}
                  </div>
                  {p.status === 'WIP' && (
                     <span className="px-3 py-1 bg-amber-100 text-amber-700 border text-xs font-bold rounded-full uppercase tracking-widest shadow-sm">
                       WIP
                     </span>
                  )}
                </div>
                
                <div className="mt-3">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{p.title}</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed min-h-[50px]">
                    {p.desc}
                  </p>
                </div>
                
                <div className="mt-auto pt-3 flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                     <span key={tag} className="flex items-center gap-1.5 text-xs bg-white px-3 py-1.5 rounded-xl border border-slate-200 text-slate-600 font-bold shadow-sm">
                       {tagIcons[tag] && (
                         <img src={tagIcons[tag]} alt={tag} className="w-3.5 h-3.5 object-contain" />
                       )}
                       {tag}
                     </span>
                  ))}
                </div>

                <div className="pt-4 mt-2 border-t border-slate-200/60 flex items-center gap-3">
                   <a href={p.githubLink} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-xl transition-colors shadow-sm">
                     <Github className="w-4 h-4" /> Code
                   </a>
                   {p.liveLink !== '#' ? (
                     <a href={p.liveLink} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm font-bold rounded-xl transition-colors shadow-sm">
                       Live <ExternalLink className="w-4 h-4" />
                     </a>
                   ) : (
                     <button disabled className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-100 text-slate-400 border border-slate-200 text-sm font-bold rounded-xl cursor-not-allowed">
                       Live <ExternalLink className="w-4 h-4 opacity-50" />
                     </button>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}
