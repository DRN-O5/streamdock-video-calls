import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("streamdock-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("streamdock-theme", theme);
    set({ theme });
  },
}))