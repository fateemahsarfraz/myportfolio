import { motion } from 'motion/react';
import { useDesktopStore } from '../store/useDesktopStore';
import { User, FolderHeart, Mail, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import React from 'react';

const iconMap = {
  User: User,
  FolderHeart: FolderHeart,
  Mail: Mail,
  Sparkles: Sparkles,
};

export function Dock() {
  const { apps, openApp, activeAppId } = useDesktopStore();
  const appIds = Object.keys(apps);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-3xl border border-white rounded-[2rem] h-20 flex items-center px-4 gap-4 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] z-[9999]"
    >
      {appIds.map((id) => {
        const app = apps[id];
        const IconComponent = iconMap[app.iconName];
        const isActive = activeAppId === id;
        const isRunning = app.isOpen;

        const activeColorMap = {
          about: "text-rose-500",
          projects: "text-purple-500",
          contact: "text-emerald-500"
        };

        const activeBgMap = {
          about: "bg-gradient-to-br from-rose-50 to-pink-100 border-rose-200 shadow-[0_4px_15px_-3px_rgba(225,29,72,0.2)]",
          projects: "bg-gradient-to-br from-purple-50 to-indigo-100 border-purple-200 shadow-[0_4px_15px_-3px_rgba(147,51,234,0.2)]",
          contact: "bg-gradient-to-br from-emerald-50 to-teal-100 border-emerald-200 shadow-[0_4px_15px_-3px_rgba(16,185,129,0.2)]"
        };

        const hoverColorMap = {
          about: "group-hover:text-rose-400",
          projects: "group-hover:text-purple-400",
          contact: "group-hover:text-emerald-400"
        };
        
        const dotColorMap = {
          about: "bg-rose-400",
          projects: "bg-purple-400",
          contact: "bg-emerald-400"
        };

        return (
          <div key={id} className="relative group flex items-center justify-center h-full px-2">
            <button
              onClick={() => openApp(id)}
              className={cn(
                "w-14 h-14 rounded-[1.2rem] flex items-center justify-center transition-all duration-300 relative shadow-sm overflow-hidden",
                isActive 
                  ? `${activeBgMap[id]} scale-110 -translate-y-2` 
                  : "bg-white hover:bg-slate-50 hover:scale-110 hover:-translate-y-2 hover:shadow-md border border-slate-100"
              )}
            >
              <IconComponent
                className={cn(
                  "w-6 h-6 transition-colors duration-300",
                  isActive ? activeColorMap[id] : `text-slate-500 ${hoverColorMap[id]}`
                )}
                strokeWidth={isActive ? 2.5 : 2}
              />
            </button>
            {isRunning && (
              <div className={cn("absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full", isActive ? dotColorMap[id] : "bg-slate-400")} />
            )}
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-800 backdrop-blur-md rounded-xl text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none scale-90 group-hover:scale-100 duration-200">
              {app.title}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
