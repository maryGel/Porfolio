import lineClamp from '@tailwindcss/line-clamp';


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ['nav-item'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Cabin", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem"
        }
      },
      backgroundImage: {
        'gradient-bg': "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.1)), url('/images/Background.jpg')",
      },
      keyframes: {
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-left': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'project-slide-down': {   
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'slide-up': 'slide-up 8s ease-out forwards',
        'slide-right': 'slide-right 3s ease-out forwards',
        'slide-left': 'slide-left 3s ease-out forwards',
        'slide-down': 'slide-down 3s ease-out forwards',
        'project-slide-down': 'project-slide-down .5s ease-out forwards',
      }
    },
  },
  plugins: [lineClamp],
}

