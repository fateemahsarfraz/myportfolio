import { create } from 'zustand';

export const useDesktopStore = create((set) => ({
  apps: {
    about: { id: 'about', title: 'hello_fatima_v2.1.exe', iconName: 'User', isOpen: true, isMinimized: false, zIndex: 1 },
    projects: { id: 'projects', title: 'projects.exe', iconName: 'FolderHeart', isOpen: false, isMinimized: false, zIndex: 0 },
    contact: { id: 'contact', title: 'reach_out.exe', iconName: 'Mail', isOpen: false, isMinimized: false, zIndex: 0 },
  },
  activeAppId: 'about',
  highestZIndex: 1,

  openApp: (id) =>
    set((state) => {
      // Minimize all other apps
      const newApps = { ...state.apps };
      Object.keys(newApps).forEach((appId) => {
        if (appId !== id) {
          newApps[appId] = { ...newApps[appId], isMinimized: true }; // Keep them open but minimized
        }
      });

      const app = newApps[id];
      const newZIndex = state.highestZIndex + 1;
      
      newApps[id] = { ...app, isOpen: true, isMinimized: false, zIndex: newZIndex };

      return {
        apps: newApps,
        activeAppId: id,
        highestZIndex: newZIndex,
      };
    }),

  closeApp: (id) =>
    set((state) => {
      const app = state.apps[id];
      return {
        apps: { ...state.apps, [id]: { ...app, isOpen: false, isMinimized: false } },
        activeAppId: state.activeAppId === id ? null : state.activeAppId,
      };
    }),

  minimizeApp: (id) =>
    set((state) => {
      const app = state.apps[id];
      return {
        apps: { ...state.apps, [id]: { ...app, isMinimized: true } },
        activeAppId: state.activeAppId === id ? null : state.activeAppId,
      };
    }),

  focusApp: (id) =>
    set((state) => {
      const app = state.apps[id];
      if (!app.isOpen || app.isMinimized) return state; 
      if (app.zIndex === state.highestZIndex) return state;
      
      const newZIndex = state.highestZIndex + 1;
      return {
        apps: { ...state.apps, [id]: { ...app, zIndex: newZIndex } },
        activeAppId: id,
        highestZIndex: newZIndex,
      };
    }),
}));
