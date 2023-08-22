/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','./public/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
		  'lg': {'max': '1279px'},
		  'sm': {'max': '767px'}
		},
	
		container: {
		  center: true
		},
		
		fontSize: {
		  sm: ['0.875rem', '1.25rem'],
		  md: ['1rem', '1.5rem'],
		  lg: ['1.125rem', '1.75rem'],
		  xl: ['1.25rem', '1.75rem'],
		  '2xl': ['1.5rem', '2rem'],
		  '3xl': ['1.75rem', '2.25rem'],
		  '4xl': ['2rem', '2.5rem'],
		  '5xl': ['2.5rem', '3rem'],
		  '6xl': ['3rem', '3.5rem']
		},
	
		spacing: {
		  px: '1px',
		  0: '0',
		  0.25: '0.125rem',
		  0.5: '0.25rem',
		  0.75: '0.375rem',
		  1: '0.5rem',
		  1.25: '0.625rem',
		  1.5: '0.75rem',
		  1.75: '0.875rem',
		  2: '1rem',
		  2.5: '1.25rem',
		  3: '1.5rem',
		  3.5: '1.75rem',
		  4: '2rem',
		  4.5: '2.25rem',
		  5: '2.5rem',
		  5.5: '2.75rem',
		  6: '3rem',
		  7: '3.5rem',
		  8: '4rem',
		  10: '5rem',
		  12: '6rem',
		  14: '7rem',
		  16: '8rem',
		  18: '9rem',
		  20: '10rem',
		  22: '11rem',
		  24: '12rem',
		  26: '13rem',
		  28: '14rem',
		  30: '15rem',
		  32: '16rem',
		  36: '18rem',
		  40: '20rem',
		  48: '24rem'
		},
	
		boxShadow: {
		  'sm': '0 0 2px 0 rgba(0, 0, 0, 1)',
		  'sm2x': '0 0 4px 0 rgba(0, 0, 0, 1)',
		  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
		  'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
		  'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
		  'none': '0 0 0 0 #0000'
		},
	
		extend: {
		  colors: {
			'primary': {
			  900: '#173382',
			  800: '#2949A3',
			  300: '#7086a9',
			  100: '#F0F5FC'
			},
			'base': {
			  800: '#333840',
			  600: '#58606e',
			  400: '#8e99ab',
			  300: '#c8d1e0',
			  100: '#f5f7fa'
			},
			'system': {
			  error: '#DE1B1B',
			  red: '#F45252',
			  orange: '#FFA845',
			  green: '#7CF772',
			  blue: '#6FEEEE',
			},
		  },
	
		  boxShadow: {
			'overlay': '0 0 0 100vmax rgba(0, 0, 0, .7)'
		  },
	
		  screens: {
			'hover-hover': {'raw': '(hover: hover)'}
		  },
	
		  keyframes: {
			slideInUp: {
			  '0%': { transform: 'translateY(-1.5rem)' },
			  '100%': { transform: 'translateY(0)' }
			},
			slideOutUp: {
			  '0%': { transform: 'translateY(0)' },
			  '100%': { transform: 'translateY(-1.5rem)' }
			},
		  },
	
		  animation: {
			slideInUp: 'slideInUp 150ms ease-out forwards',
			slideOutUp: 'slideOutUp 150ms ease-in forwards'
		  }
		},
	  },
		plugins: [],
	}
