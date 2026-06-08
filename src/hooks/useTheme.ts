// import { useState, useEffect } from 'react';

// export function useTheme() {
//   const [isDark, setIsDark] = useState<boolean>(() => {
//     const stored = localStorage.getItem('theme');
//     if (stored) return stored === 'dark';
//     return true; // default dark
//   });

//  useEffect(() => {
//   const root = document.documentElement;
//   if (isDark) {
//     root.classList.add('dark');
//     root.classList.remove('light');
//   } else {
//     root.classList.remove('dark');
//     root.classList.add('light');
//   }
//   localStorage.setItem('theme', isDark ? 'dark' : 'light');
// }, [isDark]);
//   const toggleTheme = () => setIsDark((prev) => !prev);

//   return { isDark, toggleTheme };
// }
import { useState, useEffect } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return { isDark, toggleTheme };
}
