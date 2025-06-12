import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        gold: '#D4B254',
        dark: '#222222',
        light: '#EEEEEE',
        gray: '#777777',
        black50: '#00000080',
        black20: '#00000033',
      },
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        roboto: ['Roboto', 'Arial', 'sans-serif'],
        awesome: ['FontAwesomePro-Regular', 'sans-serif'],
        awesomeBrands: ['FontAwesome5Brands-Regular', 'sans-serif'],
      },
      fontSize: {
        xs: '13px',
        sm: '15px',
        base: '18px',
        lg: '24px',
        xl: '32px',
        '2xl': '42px',
        '3xl': '52px',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
        'float': 'float 3s ease-in-out infinite'
      }
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        '.animation-delay-200': {
          'animation-delay': '200ms',
        },
        '.animation-delay-400': {
          'animation-delay': '400ms',
        },
        '.animation-delay-600': {
          'animation-delay': '600ms',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
export default config 