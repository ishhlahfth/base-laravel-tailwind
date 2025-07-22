/** @type {import('tailwindcss').Config} */
export default {
  content: [],
   theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], // dari --font-outfit
      },
      colors: {
        brand: {
          25: '#f2f7ff',
          50: '#ecf3ff',
          100: '#dde9ff',
          200: '#c2d6ff',
          300: '#9cb9ff',
          400: '#7592ff',
          500: '#465fff',
          600: '#3641f5',
          700: '#2a31d8',
          800: '#252dae',
          900: '#262e89',
          950: '#161950',
        },
        gray: {
          100: '#f2f4f7',
          900: '#101828',
        },
        error: {
          500: '#f04438',
        },
        // Tambahkan sesuai kebutuhan
      },
      fontSize: {
        // dari token seperti --text-title-2xl
        'title-2xl': ['72px', { lineHeight: '90px' }],
        'title-xl': ['60px', { lineHeight: '72px' }],
        'title-lg': ['48px', { lineHeight: '60px' }],
        'title-md': ['36px', { lineHeight: '44px' }],
        'title-sm': ['30px', { lineHeight: '38px' }],
        'theme-xl': ['20px', { lineHeight: '30px' }],
        'theme-sm': ['14px', { lineHeight: '20px' }],
        'theme-xs': ['12px', { lineHeight: '18px' }],
      },
      boxShadow: {
        'theme-md': '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
        'theme-xl': '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
        'datepicker': '-5px 0 0 #262d3c, 5px 0 0 #262d3c',
      },
      zIndex: {
        1: 1,
        9: 9,
        99: 99,
        999: 999,
        9999: 9999,
        99999: 99999,
        999999: 999999,
      },
    },
  },
  plugins: [],
}

