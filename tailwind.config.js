/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 2.5s linear infinite',
        'bounce-down': 'bounce-down .5s infinite',
        'bounce-up': 'bounce-down .5s infinite',
        
      },
      keyframes: {
        'bounce-down' : {
          '0%, 100%' : {
            transform: 'translateY(25%)'
          },
          '50%' : {
            transform: 'translateY(0)'
          }
        },
        'bounce-up' : {
          '0%, 100%' : {
            transform: 'translateY(-25%)'
          },
          '50%' : {
            transform: 'translateY(0)'
          }
        },
      }
    },
  },
  plugins: [],
}
