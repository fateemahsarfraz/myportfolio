import React, { useRef, useState } from 'react';
import { motion, useDragControls } from 'motion/react';
import { useDesktopStore } from '../store/useDesktopStore';
import { cn } from '../lib/utils';
import { X, Minus, Maximize2 } from 'lucide-react';

export function Window({ id, children }) {
  const { apps, closeApp, minimizeApp, focusApp, activeAppId } = useDesktopStore();
  const app = apps[id];
  const windowRef = useRef(null);
  const dragControls = useDragControls();
  const [isDragging, setIsDragging] = useState(false);

  if (!app.isOpen || app.isMinimized) {
    return null;
  }

  const isActive = activeAppId === id;

  return (
    <motion.div
      ref={windowRef}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ 
        opacity: isActive ? 1 : 0.8, 
        scale: isActive ? (isDragging ? 1.01 : 1) : 0.98,
        y: isActive ? 0 : 10,
      }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onPointerDown={() => focusApp(id)}
      style={{ 
        zIndex: isDragging ? 50 : app.zIndex,
        margin: 'auto',
        top: '2vh',
        left: 0,
        right: 0,
        bottom: '10vh'
      }}
      className={cn(
        "fixed flex flex-col rounded-[2.5rem] overflow-hidden backdrop-blur-3xl transition-colors duration-300 w-[95vw] md:w-[75vw] h-[85vh] md:h-[80vh] border",
        isActive 
          ? "bg-white/80 border-white/80" 
          : "bg-white/40 border-white/40",
        isDragging 
          ? "shadow-[0_30px_65px_-15px_rgba(0,0,0,0.2)] bg-white/90" 
          : (isActive ? "shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)]" : "shadow-xl")
      )}
    >
      {/* Subtle Dot Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15] z-0" 
        style={{ backgroundImage: 'radial-gradient(#94a3b8 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} 
      />

      <div
        className="h-14 flex items-center justify-between px-6 border-b border-slate-200/30 cursor-grab active:cursor-grabbing w-full touch-none shrink-0 relative z-10 bg-white/40 backdrop-blur-sm transition-colors duration-300"
        onPointerDown={(e) => { focusApp(id); dragControls.start(e); }}
      >
        <div className="flex gap-2.5">
          <button onClick={() => closeApp(id)} className="w-3.5 h-3.5 rounded-full bg-rose-400 hover:bg-rose-500 flex items-center justify-center transition-colors group shadow-sm border border-rose-500">
            <X className="w-2.5 h-2.5 text-white opacity-0 group-hover:opacity-100" strokeWidth={3} />
          </button>
          <button onClick={() => minimizeApp(id)} className="w-3.5 h-3.5 rounded-full bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center group shadow-sm border border-yellow-500">
            <Minus className="w-2.5 h-2.5 text-white opacity-0 group-hover:opacity-100" strokeWidth={3} />
          </button>
          <button className="w-3.5 h-3.5 rounded-full bg-green-400 hover:bg-green-500 flex items-center justify-center group shadow-sm border border-green-500">
            <Maximize2 className="w-2.5 h-2.5 text-white opacity-0 group-hover:opacity-100" strokeWidth={3} />
          </button>
        </div>
        
        <div className="flex-1 text-center font-sans font-medium text-sm text-slate-800 tracking-wide pointer-events-none select-none">
          {app.title}
        </div>
        
        <div className="w-[50px]">{/* Spacer for flex centering */}</div>
      </div>

      <div className="flex-1 overflow-auto p-4 md:p-6 lg:p-8 relative z-10 scrollbar-hide">
        {children}
      </div>
    </motion.div>
  );
}
