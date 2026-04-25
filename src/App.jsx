import { useEffect, useState } from 'react';
import { Dock } from './components/Dock';
import { AboutMe } from './apps/AboutMe';
import { Projects } from './apps/Projects';
import { Contact } from './apps/Contact';
import { useDesktopStore } from './store/useDesktopStore';
import { cn } from './lib/utils';

export default function App() {
  const [time, setTime] = useState(new Date());
  const { activeAppId } = useDesktopStore();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const themes = {
    about: {
      bg: 'bg-rose-50/30',
      blob1: 'bg-rose-200/50',
      blob2: 'bg-orange-100/50',
      blob3: 'bg-pink-100/50',
      textColor: 'text-rose-800'
    },
    projects: {
      bg: 'bg-purple-50/30',
      blob1: 'bg-purple-200/50',
      blob2: 'bg-indigo-200/50',
      blob3: 'bg-violet-100/50',
      textColor: 'text-purple-800'
    },
    contact: {
      bg: 'bg-emerald-50/30',
      blob1: 'bg-emerald-200/50',
      blob2: 'bg-green-100/50',
      blob3: 'bg-teal-100/50',
      textColor: 'text-emerald-800'
    },
    default: {
      bg: 'bg-slate-50',
      blob1: 'bg-slate-200/40',
      blob2: 'bg-slate-100/40',
      blob3: 'bg-slate-100/40',
      textColor: 'text-slate-800'
    }
  };

  const currentTheme = themes[activeAppId] || themes.default;

  return (
    <div className={cn("relative w-screen h-screen overflow-hidden selection:bg-slate-200 selection:text-slate-900 transition-colors duration-1000", currentTheme.bg)}>
      {/* Decorative Blobs */}
      <div className={cn("absolute top-[10%] left-[15%] w-[32rem] h-[32rem] rounded-full blur-[100px] pointer-events-none blob z-0 transition-colors duration-1000", currentTheme.blob1)} />
      <div className={cn("absolute bottom-[15%] right-[10%] w-[36rem] h-[36rem] rounded-full blur-[120px] pointer-events-none blob-2 z-0 transition-colors duration-1000", currentTheme.blob2)} />
      <div className={cn("absolute top-[30%] right-[30%] w-[24rem] h-[24rem] rounded-full blur-[90px] pointer-events-none blob z-0 transition-colors duration-1000", currentTheme.blob3)} />

      {/* Desktop Widget (Logo / Title) */}
      <div className="absolute top-8 left-8 pointer-events-none select-none z-10 transition-opacity duration-500">
        <h1 className="text-4xl font-serif text-slate-800 tracking-tight whitespace-nowrap">My Portfolio</h1>
      </div>

      {/* Desktop Widget (Clock) */}
      <div className="absolute top-12 right-12 text-right pointer-events-none select-none drop-shadow-sm z-10 transition-opacity duration-500">
        <h1 className="text-5xl font-sans font-medium text-slate-800 tracking-tight">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toLowerCase()}
        </h1>
        <p className="text-slate-500 font-medium text-lg mt-2 tracking-wide block">
          {time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' }).toLowerCase()}
        </p>
      </div>

      {/* Apps Container */}
      <AboutMe />
      <Projects />
      <Contact />

      {/* Taskbar / Dock */}
      <Dock />
    </div>
  );
}
