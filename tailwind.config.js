/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        bai: ['var(--font-bai)', 'sans-serif']
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    colors: {
      transparent: 'transparent',
      navy: '#0a192f',
      'light-navy': '#112240',
      'lightest-navy': '#233554',
      slate: '#8892b0',
      'light-slate': '#a8b2d1',
      'lightest-slate': '#ccd6f6',
      white: '#e6f1ff',
      green: '#64ffda'
    }
  },
  plugins: []
}
