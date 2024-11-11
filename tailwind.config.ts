import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'custom-white': '#FFFFFF',
  			'custom-black': '#000000',
  			'cd-10': '#191A1A',
  			'cd-13': '#202122',
  			'cd-16': '#28292A',
  			'cd-18': '#2D2F2F',
  			'cd-22': '#373730',
  			'cd-25': '#3F3F3F',
  			'cd-02': '#060606',
  			'cd-04': '#0A0A0B',
  			'cd-06': '#0F0F10',
  			'cd-07': '#121212',
  			'cd-08': '#141415',
  			'cg-1': '#666666',
  			'cg-2': '#7D7D7D',
  			'cg-3': '#999999',
  			'cg-4': '#CCCCCC',
  			'cg-5': '#D9D9D9',
  			'cg-6': '#E6E6E6',
  			'cg-7': '#F2F2F2',
  			'cg-8': '#FCFCFC',
  			'cg-9': '#a2a2a2'
  		},
  		keyframes: {
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
			
			wave: {
				'0%': { transform: 'rotate(0.0deg)' },
				'15%': { transform: 'rotate(14.0deg)' },
				'30%': { transform: 'rotate(-8.0deg)' },
				'40%': { transform: 'rotate(14.0deg)' },
				'50%': { transform: 'rotate(-4.0deg)' },
				'60%': { transform: 'rotate(10.0deg)' },
				'70%': { transform: 'rotate(0.0deg)' },
				'100%': { transform: 'rotate(0.0deg)' },
			}
  		},
  		animation: {
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
			wave: 'wave 1.5s linear infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;